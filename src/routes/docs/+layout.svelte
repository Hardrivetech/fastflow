<script>
  import { page } from '$app/stores';
  import TableOfContents from '$lib/TableOfContents.svelte';
  
  const links = [
    { href: '/docs', label: 'Introduction' },
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/architecture', label: 'Architecture' },
    { href: '/docs/deployment', label: 'Deployment' }
  ];

  $: index = links.findIndex(link => link.href === $page.url.pathname);
  $: prev = links[index - 1];
  $: next = links[index + 1];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 shrink-0">
    <nav class="sticky top-24 space-y-1">
      <p class="font-bold text-slate-900 dark:text-slate-100 mb-4 px-3">Documentation</p>
      {#each links as link}
        <a 
          href={link.href} 
          class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors {$page.url.pathname === link.href ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Content -->
  <div class="min-w-0 flex-1">
    <slot />

    <div class="mt-12 flex justify-between border-t border-slate-200 dark:border-slate-800 pt-6">
      {#if prev}
        <a href={prev.href} class="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          &larr; {prev.label}
        </a>
      {:else}
        <div></div>
      {/if}

      {#if next}
        <a href={next.href} class="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
          {next.label} &rarr;
        </a>
      {/if}
    </div>
  </div>

  <!-- Table of Contents -->
  <TableOfContents />
</div>