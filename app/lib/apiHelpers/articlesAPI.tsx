// Copyright (c) 2023 Rafael Farias
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
	ArticlesRecord,
	ArticlesResponse,
	ArticlesStatsResponse,
} from '@/types/pocketbase-types';
import pb from '../PocketBase/pocketbase';
import { ArticlesExpand } from '@/types/expanded-types';
import { getFormData } from '../helper';
import { ListResult, RecordOptions } from 'pocketbase';

export async function getFullListOfArticles() {
	try {
		return await pb.collection('articles').getFullList<ArticlesResponse>({
			skipTotal: true,
			batch: 9999,
		});
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getArticleById(id: string) {
	return pb
		.collection('articles')
		.getOne<ArticlesResponse<ArticlesExpand>>(id, {
			skipTotal: true,
			expand: 'tags',
		});
}

export async function getArticleStatsById(articleId: string) {
	return pb
		.collection('articles_stats')
		.getOne<ArticlesStatsResponse>(articleId, {
			skipTotal: true,
		});
}

export async function getBestArticlesOf(time: 'week' | 'month' | 'year') {
	try {
		return await pb
			.collection('articles')
			.getFullList<ArticlesResponse<ArticlesExpand>>({
				skipTotal: true,
				expand: 'tags',
			});
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function getArticleDocumentUrl(article: ArticlesResponse) {
	const record = {
		id: article.id,
		collectionId: article.collectionId,
		collectionName: article.collectionName,
	};

	const documentUrl = pb.files.getUrl(record, article.document);

	try {
		if (documentUrl) {
			return await fetch(documentUrl).then((response) => response.text());
		}
	} catch (error) {
		console.error(error);
	}
	return undefined;
}

export async function createArticle(
	newArticle: ArticlesRecord,
	baseFile: Blob
) {
	const form = getFormData(newArticle);
	form.append('document', baseFile, 'article.md');

	return pb.collection('articles').create<ArticlesResponse>(form);
}

export async function getRandomArticle() {
	try {
		const list = await pb
			.collection('articles')
			.getList<ArticlesResponse>(1, 1, {
				filter: 'visibility = "public"',
				sort: '@random',
			});
		return list.items;
	} catch (error) {
		console.error(error);
		return [];
	}
}

export async function updateArticle(
	articleId: string,
	updatedArticleRecord: ArticlesRecord,
	baseFile: Blob
) {
	const form = getFormData(updatedArticleRecord);
	form.append('document', baseFile, 'article.md');

	return pb.collection('articles').update<ArticlesResponse>(articleId, form);
}

export async function getListOfArticlesStats(
	page: number,
	itemsPerPage: number,
	options: RecordOptions | undefined
) {
	try {
		return await pb
			.collection('articles_stats')
			.getList<ArticlesStatsResponse>(page, itemsPerPage, options);
	} catch (error) {
		console.error(error);
		return {} as ListResult<ArticlesStatsResponse>;
	}
}
