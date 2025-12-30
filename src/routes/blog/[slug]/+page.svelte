<script>
// @ts-nocheck
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
	export let data;

    $: jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.post.title,
		datePublished: new Date(data.post.date).toISOString(),
		description: data.post.description,
		author: {
			'@type': 'Person',
			name: data.post.author
		},
		url: $page.url.href
	};

	onMount(() => {
		const blocks = document.querySelectorAll('pre');
		blocks.forEach((block) => {
			// Ensure the parent is relative for absolute positioning of the button
			block.classList.add('relative', 'group');

			const button = document.createElement('button');
			button.innerText = 'Copy';
			button.className =
				'absolute top-2 right-2 px-2 py-1 text-xs font-medium text-slate-500 bg-slate-200 dark:bg-slate-700 dark:text-slate-400 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 cursor-pointer';

			button.addEventListener('click', async () => {
				const code = block.querySelector('code')?.innerText;
				if (code) {
					await navigator.clipboard.writeText(code);
					button.innerText = 'Copied!';
					setTimeout(() => (button.innerText = 'Copy'), 2000);
				}
			});
			block.appendChild(button);
		});
	});
</script>

<svelte:head>
	<title>{data.post?.title} - FastFlow</title>
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}

</svelte:head>

<article class="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-8 text-center">
		<div class="text-sm text-slate-500 dark:text-slate-400 mb-2">{new Date(data.post.date).toLocaleDateString()}</div>
		<h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">{data.post.title}</h1>
		<div class="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium">
			{data.post.author}
		</div>
	</div>

	<div class="prose prose-slate dark:prose-invert max-w-none">
		{@html data.post.html}
	</div>
</article>