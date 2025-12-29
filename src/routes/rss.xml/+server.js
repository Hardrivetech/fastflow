import matter from 'gray-matter';

export const prerender = true;

export async function GET() {
	const site = 'https://fast-flow-dev.vercel.app';
	const posts = import.meta.glob('/src/posts/*.md', { query: '?raw', import: 'default', eager: true });

	const allPosts = Object.entries(posts)
		.map(([path, content]) => {
			const slug = path.split('/').pop().replace('.md', '');
			const { data } = matter(content);
			return {
				slug,
				...data
			};
		})
		.sort((a, b) => new Date(b.date) - new Date(a.date));

	const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>FastFlow Blog</title>
		<description>The latest news and updates from FastFlow.</description>
		<link>${site}</link>
		<atom:link href="${site}/rss.xml" rel="self" type="application/rss+xml"/>
		<language>en-us</language>
		${allPosts
			.map(
				(post) => `
			<item>
				<title>${post.title}</title>
				<link>${site}/blog/${post.slug}</link>
				<guid isPermaLink="true">${site}/blog/${post.slug}</guid>
				<description>${post.description}</description>
				<pubDate>${new Date(post.date).toUTCString()}</pubDate>
			</item>
		`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
}