<script>
	export let data;
</script>

<svelte:head>
	<title>Blog - FastFlow</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Blog</h1>
	
	<div class="grid gap-8">
		{#each data.posts as post}
			<a href="/blog/{post.slug}" class="block group p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
				<div class="flex items-center justify-between mb-4">
					<span class="text-sm text-slate-500 dark:text-slate-400">{new Date(post.date).toLocaleDateString()}</span>
					<span class="text-xs font-bold px-2 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">{post.author}</span>
				</div>
				<h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h2>
				<p class="text-slate-600 dark:text-slate-400">{post.description}</p>
			</a>
		{/each}
	</div>
</div>