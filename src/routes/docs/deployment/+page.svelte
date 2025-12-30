<svelte:head>
	<title>Deployment - FastFlow Docs</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
	<h1>Deployment</h1>
	<p class="lead">
		Since FastFlow is built on SvelteKit, it can be deployed to a variety of platforms using adapters.
	</p>

	<h2>Vercel (Recommended)</h2>
	<p>
		FastFlow comes pre-configured with <code>adapter-auto</code>, which works seamlessly with Vercel.
	</p>
	<ol>
		<li>Push your code to a Git repository (GitHub, GitLab, etc.).</li>
		<li>Import your project into Vercel.</li>
		<li>Vercel will detect SvelteKit and configure the build settings automatically.</li>
		<li>Click <strong>Deploy</strong>.</li>
	</ol>

	<h2>Environment Variables</h2>
	<p>
		Don't forget to set your production environment variables in your hosting provider's dashboard:
	</p>
	<ul>
		<li><code>DATABASE_URL</code>: Connection string for your production database.</li>
		<li><code>PUBLIC_GA_ID</code>: Your Google Analytics ID (optional).</li>
	</ul>
</div>