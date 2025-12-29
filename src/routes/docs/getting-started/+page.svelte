<script>
  import CodeBlock from '$lib/CodeBlock.svelte';
</script>

<svelte:head>
  <title>Getting Started - FastFlow</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
  <h1>Getting Started</h1>
  <p class="lead">Start building your next big idea in minutes.</p>

  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js 18.17 or later</li>
    <li>npm, pnpm, or yarn</li>
  </ul>

  <h2>Installation</h2>
  <p>To create a new FastFlow project, run the following command in your terminal:</p>
  
  <CodeBlock code="npx create-fastflow-app my-app" language="bash" />

  <p>Follow the interactive prompts to select your preferred options (TypeScript, ESLint, etc.).</p>

  <h2>Running the Development Server</h2>
  <p>Navigate to your project directory and start the server:</p>

  <CodeBlock code={`cd my-app
npm install
npm run dev`} language="bash" />

  <p>Open your browser and visit <code>http://localhost:5173</code> to see your app running.</p>
</div>