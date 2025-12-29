import matter from 'gray-matter';

export const load = async () => {
	const posts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default', eager: true });

	const allPosts = Object.entries(posts).map(([path, content]) => {
		const slug = path.split('/').pop().replace('.md', '');
		const { data } = matter(content);
		return {
			slug,
			...data
		};
	});

	return {
		posts: allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
	};
};