<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Not Found - FastFlow</title>
</svelte:head>

<div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
	<!-- Background decoration -->
	<div class="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
		<span class="text-[20rem] font-bold text-slate-900 dark:text-white">404</span>
	</div>

	<div class="relative z-10">
		<h1 class="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Page not found</h1>
		<p class="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
			Sorry, we couldn't find the page you're looking for at <span class="font-mono text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-1 rounded">{$page.url.pathname}</span>.
		</p>
		<a href="/" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl">
			Return Home
		</a>
	</div>
</div>