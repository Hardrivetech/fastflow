<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>404 - Page Not Found</title>
</svelte:head>

<div class="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
	<h1 class="text-9xl font-extrabold text-slate-200">404</h1>
	<p class="text-2xl font-bold text-slate-900 mt-4">Page not found</p>
	<p class="text-slate-600 mt-2 max-w-md mx-auto">
		Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
	</p>
	<a href="/" class="mt-8 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
		Go back home
	</a>
</div>