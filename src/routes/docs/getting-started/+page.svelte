<svelte:head>
	<title>Getting Started - FastFlow Docs</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
	<h1>Getting Started with FastFlow</h1>
	<p class="lead">
		FastFlow is designed to get you up and running with a production-ready web stack in minutes.
	</p>

	<h2>Installation</h2>
	<p>To create a new project, simply run the following command in your terminal:</p>

	<pre><code class="language-bash">npm create fastflow@latest</code></pre>

	<p>
		The CLI will guide you through the setup process, offering to automatically install dependencies and start the development server for you.
	</p>

	<h3>Quick Start (Non-interactive)</h3>
	<p>If you prefer to skip the prompts and use defaults, you can use the <code>-y</code> flag:</p>

	<pre><code class="language-bash">npm create fastflow@latest my-app -y</code></pre>

	<h2>Project Structure</h2>
	<p>Once installed, you will see the following structure:</p>
	<ul>
		<li><strong>src/routes</strong>: Your application routes and pages.</li>
		<li><strong>src/lib</strong>: Reusable components and utilities.</li>
		<li><strong>prisma</strong>: Database schema and migrations.</li>
	</ul>

	<h2>Next Steps</h2>
	<p>
		Check out the <a href="/docs/architecture">Architecture</a> guide to understand how the pieces fit together.
	</p>
</div>