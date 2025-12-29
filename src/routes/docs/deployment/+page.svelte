<script>
  import CodeBlock from '$lib/CodeBlock.svelte';
</script>

<svelte:head>
  <title>Deployment - FastFlow</title>
</svelte:head>

<div class="prose prose-slate dark:prose-invert max-w-none">
  <h1>Deployment</h1>
  <p class="lead">Taking your FastFlow application to production.</p>

  <h2>Vercel (Recommended)</h2>
  <p>FastFlow is optimized for Vercel. Since SvelteKit was created by Vercel, the integration is seamless.</p>
  <ol>
    <li>Push your code to a Git repository (GitHub, GitLab, Bitbucket).</li>
    <li>Import your project in the Vercel dashboard.</li>
    <li>Vercel will automatically detect SvelteKit and configure the build settings.</li>
  </ol>

  <h2>Docker</h2>
  <p>You can also containerize your application using Docker. A <code>Dockerfile</code> is included in the starter template.</p>

  <CodeBlock code={`docker build -t my-fastflow-app .
docker run -p 3000:3000 my-fastflow-app`} language="bash" />

  <h2>Environment Variables</h2>
  <p>Ensure you set your production environment variables (like <code>DATABASE_URL</code>) in your deployment platform settings.</p>
</div>