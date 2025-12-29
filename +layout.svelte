<script>
  import { page } from '$app/stores';
  
  const links = [
    { href: '/docs', label: 'Introduction' },
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/architecture', label: 'Architecture' },
    { href: '/docs/deployment', label: 'Deployment' }
  ];
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
  <!-- Sidebar -->
  <aside class="w-full md:w-64 shrink-0">
    <nav class="sticky top-24 space-y-1">
      <p class="font-bold text-slate-900 mb-4 px-3">Documentation</p>
      {#each links as link}
        <a 
          href={link.href} 
          class="block px-3 py-2 rounded-lg text-sm font-medium transition-colors {$page.url.pathname === link.href ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>
  </aside>

  <!-- Content -->
  <div class="min-w-0 flex-1">
    <slot />
  </div>
</div>