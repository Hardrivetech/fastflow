<script>
  import CodeBlock from '$lib/CodeBlock.svelte';
</script>

<svelte:head>
  <title>Architecture - FastFlow</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
  <h1>Architecture</h1>
  <p class="lead">Understanding how FastFlow is structured.</p>

  <h2>The Stack</h2>
  <p>FastFlow is built on top of a modern, type-safe stack:</p>
  <ul>
    <li><strong>SvelteKit:</strong> The meta-framework for Svelte, handling routing, SSR, and API endpoints.</li>
    <li><strong>Tailwind CSS:</strong> A utility-first CSS framework for rapid UI development.</li>
    <li><strong>Prisma:</strong> A next-generation ORM for Node.js and TypeScript.</li>
  </ul>

  <h2>Project Structure</h2>
  <p>Here is a high-level overview of the folder structure:</p>
  
  <CodeBlock code={`/src
  /lib          # Shared utilities and components
  /routes       # File-based routing
    +layout.svelte  # Root layout
    +page.svelte    # Homepage
  /app.css      # Global styles (Tailwind)
/prisma         # Database schema`} language="bash" />

  <h2>Data Flow</h2>
  <p>Data is fetched in <code>+page.server.ts</code> files using SvelteKit's <code>load</code> functions, ensuring type safety from the database (via Prisma) to the client.</p>
</div>