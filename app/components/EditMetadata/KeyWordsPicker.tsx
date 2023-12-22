// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

'use client';

import {
	getKeyWordById,
	getKeyWordListBySimilar,
} from '@/lib/apiHelpers/keyWordsAPI';
import { Collections, KeyWordsResponse } from '@/types/pocketbase-types';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { useDebouncedCallback } from 'use-debounce';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import usePbAuth from '@/hooks/usePbAuth';

interface InsertKeyWordButtonProps {
	inputValue: string | undefined;
	setSelectedKeyWords: Dispatch<SetStateAction<KeyWordsResponse[]>>;
	selectedKeyWords: KeyWordsResponse[];
	keyWords: KeyWordsResponse[];
}

const InsertKeyWordButton: FunctionComponent<InsertKeyWordButtonProps> = ({
	inputValue,
	setSelectedKeyWords,
	selectedKeyWords,
	keyWords,
}) => {
	const [, user] = usePbAuth();

	const createAndInsertKeyWord = async () => {
		if (inputValue === undefined || inputValue === '' || user === null)
			return;

		const newFakeKeyWord: KeyWordsResponse = {
			id: 'fake',
			word: inputValue,
			user: user.id,
			collectionId: 'fake',
			collectionName: Collections.KeyWords,
			created: new Date().toISOString(),
			updated: new Date().toISOString(),
		};
		setSelectedKeyWords((prev) => [...prev, newFakeKeyWord]);
	};

	return (
		<>
			<Button
				variant="outlined"
				startIcon={<AddIcon />}
				sx={{
					textTransform: 'none',
				}}
				disabled={
					keyWords.some((word) => word.word === inputValue) ||
					selectedKeyWords.some((word) => word.word === inputValue)
				}
				onClick={() => {
					createAndInsertKeyWord();
				}}
			>
				{inputValue}
			</Button>
		</>
	);
};

interface KeyWordsPickerProps {
	defaultKeyWordsId: KeyWordsResponse[] | undefined;
}

const KeyWordsPicker: FunctionComponent<KeyWordsPickerProps> = ({
	defaultKeyWordsId = [],
}) => {
	const [selectedKeyWords, setSelectedKeyWords] =
		useState<KeyWordsResponse[]>(defaultKeyWordsId);
	const [keyWords, setKeyWords] = useState<KeyWordsResponse[]>([]);
	const [fetchingKeyWords, setFetchingKeyWords] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string | undefined>(undefined);

	const invalidWord = useMemo(() => {
		// checks if the keywords is only lowercase letters, numbers and -, no spaces or _

		if (inputValue === undefined || inputValue === '') return false;
		return !/^[a-z0-9-]+$/.test(inputValue);
	}, [inputValue]);

	const debounce = useDebouncedCallback(
		async (value: string | undefined) => {
			setFetchingKeyWords(true);
			if (value === undefined || value.length < 1) {
				setKeyWords([]);
			} else {
				try {
					const response = await getKeyWordListBySimilar(value);

					setKeyWords(response);
				} catch (error) {
					console.error('Error fetching key words:', error);
				}
			}

			setFetchingKeyWords(false);
		},
		// delay in ms
		500
	);
	// TODO - Fix the console error on Autocomplete

	return (
		<>
			<Autocomplete
				multiple
				id="tags-outlined"
				options={keyWords}
				getOptionLabel={(option) => option.word}
				filterSelectedOptions
				defaultValue={[]}
				isOptionEqualToValue={(option, value) => {
					return option.word === value.word && option.id === value.id;
				}}
				fullWidth
				renderInput={(params) => (
					<TextField
						{...params}
						placeholder="palavras-chave..."
						name="keywords-picker"
						error={invalidWord}
						helperText={invalidWord ? 'Palavra inválida' : ''}
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<>
									{fetchingKeyWords ? (
										<CircularProgress
											color="inherit"
											size={20}
										/>
									) : null}
									{params.InputProps.endAdornment}
								</>
							),
						}}
					/>
				)}
				onInputChange={(_, newInputValue) => {
					debounce(newInputValue);
					setFetchingKeyWords(true);
					setInputValue(newInputValue);
				}}
				value={selectedKeyWords}
				onChange={(_, newValue) => {
					setSelectedKeyWords(newValue);
				}}
				groupBy={() => 'true'}
				renderGroup={(params) => (
					<li key={params.key}>
						<ul style={{ padding: 0 }}>{params.children}</ul>
						<Box px={2} pb={1}>
							<Divider
								sx={{
									my: 1,
									color: 'GrayText',
								}}
							>
								Inserir palavra
							</Divider>
							<InsertKeyWordButton
								inputValue={inputValue}
								setSelectedKeyWords={setSelectedKeyWords}
								selectedKeyWords={selectedKeyWords}
								keyWords={keyWords}
							/>
						</Box>
					</li>
				)}
				noOptionsText={
					fetchingKeyWords ? (
						'Buscando palavras...'
					) : inputValue ? (
						<InsertKeyWordButton
							inputValue={inputValue}
							selectedKeyWords={selectedKeyWords}
							setSelectedKeyWords={setSelectedKeyWords}
							keyWords={keyWords}
						/>
					) : (
						'Insira uma palavra-chave'
					)
				}
			/>
			<input
				name="keywords"
				value={selectedKeyWords.map((word) => word.word).join(',')}
				style={{
					display: 'none',
				}}
			/>
		</>
	);
};

export default KeyWordsPicker;
