<svelte:head>
	<title>Architecture - FastFlow Docs</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
	<h1>Architecture</h1>
	<p class="lead">
		FastFlow is built on a modern, type-safe stack designed for performance and developer experience.
	</p>

	<h2>The Stack</h2>
	<p>We have carefully selected the following technologies:</p>
	<ul>
		<li><strong>SvelteKit:</strong> The meta-framework for Svelte, handling routing, SSR, and API endpoints.</li>
		<li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
		<li><strong>Prisma:</strong> A next-generation ORM for type-safe database access.</li>
		<li><strong>TypeScript:</strong> Static typing to catch errors early and improve tooling.</li>
	</ul>

	<h2>Data Flow</h2>
	<p>
		FastFlow uses SvelteKit's <code>load</code> functions to fetch data on the server. This data is then passed to the page components as props.
		Mutations are handled via <strong>Form Actions</strong>, providing a robust way to handle data submissions even without JavaScript.
	</p>

	<h2>Database</h2>
	<p>
		Prisma serves as the bridge to your database. By defining your schema in <code>schema.prisma</code>, 
		FastFlow automatically generates a type-safe client that you can use in your server-side routes.
	</p>
</div>