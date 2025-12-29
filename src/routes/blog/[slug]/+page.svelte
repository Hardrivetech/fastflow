<script>
// @ts-nocheck

	export let data;
</script>

<svelte:head>
	<title>{data.post?.title} - FastFlow</title>
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