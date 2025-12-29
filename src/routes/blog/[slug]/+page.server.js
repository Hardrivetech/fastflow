// @ts-nocheck
import { error } from '@sveltejs/kit';
import matter from 'gray-matter';
import { marked } from 'marked';

export const load = async ({ params }) => {
	const { slug } = params;
	const posts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default', eager: true });
	const filePath = `/src/posts/${slug}.md`;

	if (!posts[filePath]) {
		throw error(404, 'Post not found');
	}

	const fileContent = posts[filePath];
	const { data, content } = matter(fileContent);
	const html = await marked.parse(content);

	return {
		post: {
			...data,
			html
		}
	};
};