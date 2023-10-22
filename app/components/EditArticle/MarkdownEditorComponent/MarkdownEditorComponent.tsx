// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
'use client';

import './MarkdownEditorComponent.css';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { ChangeEvent, useRef } from 'react';
import 'react-markdown-editor-lite/lib/index.css';
import dynamic from 'next/dynamic';

import Editor, { Plugins } from 'react-markdown-editor-lite';
import useUploadFile from '@/hooks/useUploadFile';
import { uploadFile } from '@/lib/fileUploadHelper';

const ArticleContent = dynamic(
	() => import('@/components/ArticleComponent/ArticleContent/ArticleContent')
);

const EDITOR_PLUGINS = [
	'header',
	'font-bold',
	'font-italic',
	'font-underline',
	'font-strikethrough',
	'list-unordered',
	'list-ordered',
	'block-quote',
	'block-wrap',
	'block-code-inline',
	'block-code-block',
	'table',
	'image',
	'link',
	'clear',
	'logger',
	'mode-toggle',
	'tab-insert',
];

interface MarkdownEditorComponentProps {
	articleId: string;
	myArticleDocument: string;
	setMyArticleDocument: Dispatch<SetStateAction<string | undefined>>;
}

const MarkdownEditorComponent: FunctionComponent<
	MarkdownEditorComponentProps
> = ({ articleId, myArticleDocument, setMyArticleDocument }) => {
	Editor.addLocale('pt_BR', {
		btnHeader: 'Títulos',
		btnClear: 'Apagar tudo',
		btnBold: 'Negrito',
		btnItalic: 'Itálico',
		btnUnderline: 'Sublinhado',
	});
	Editor.useLocale('pt_BR');
	Editor.use(Plugins.TabInsert, {
		tabMapValue: 1,
	});

	const editorRef = useRef<Editor>(null);
	const [uploadImage, InputComponent] = useUploadFile();

	function handleEditorChange(
		{
			text,
			html,
		}: {
			text: string;
			html: string;
		},
		event: ChangeEvent<HTMLTextAreaElement> | undefined
	) {
		event?.preventDefault();

		setMyArticleDocument(text);
	}

	const handleImageUpload = (file: File) => {
		return uploadFile(file, articleId);
	};

	const onCustomImageUpload = async (
		event: any
	): Promise<{ url: string; text?: string | undefined }> => {
		const selectedFile = await uploadImage();
		const uploadedFileURL = await uploadFile(selectedFile, articleId);
		return {
			url: uploadedFileURL,
			text: selectedFile.name,
		};
	};

	return (
		<>
			<InputComponent />
			<Editor
				style={{
					display: 'flex',
					flexGrow: 1,
					height: '85vh',
					borderRadius: 10,
					overflow: 'hidden',
				}}
				plugins={EDITOR_PLUGINS}
				ref={editorRef}
				onChangeTrigger="both"
				renderHTML={(text) => <ArticleContent article={text} />}
				onChange={handleEditorChange}
				allowPasteImage
				defaultValue={myArticleDocument}
				onImageUpload={handleImageUpload}
				onCustomImageUpload={onCustomImageUpload}
				config={{
					view: {
						menu: true,
						md: true, // use this to hide
						html: true,
						fullScreen: true,
						hideMenu: true,
					},
				}}
			/>
		</>
	);
};

export default MarkdownEditorComponent;
