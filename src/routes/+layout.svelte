<script>
  import "../app.css";
  import { page } from '$app/stores';

  let isMobileMenuOpen = false;
  $: $page.url.pathname, isMobileMenuOpen = false;
</script>

<div class="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
  <!-- Navigation -->
  <header class="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">F</div>
            <span class="text-xl font-bold tracking-tight text-slate-900">FastFlow</span>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          <a href="/#stack" class="hover:text-blue-600 transition-colors">The Stack</a>
          <a href="/#architecture" class="hover:text-blue-600 transition-colors">Architecture</a>
          <a href="/#docs" class="hover:text-blue-600 transition-colors">Docs</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 text-slate-600" onclick={() => isMobileMenuOpen = !isMobileMenuOpen} aria-label="Toggle menu">
            {#if isMobileMenuOpen}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            {/if}
        </button>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-4">
            <a href="https://github.com" target="_blank" class="hidden sm:block text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">GitHub</a>
            <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
                Get Started
            </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
        <div class="md:hidden border-t border-slate-200 bg-white px-4 py-6 space-y-4 shadow-lg">
            <a href="/#stack" class="block text-base font-medium text-slate-600 hover:text-blue-600" onclick={() => isMobileMenuOpen = false}>The Stack</a>
            <a href="/#architecture" class="block text-base font-medium text-slate-600 hover:text-blue-600" onclick={() => isMobileMenuOpen = false}>Architecture</a>
            <a href="/#docs" class="block text-base font-medium text-slate-600 hover:text-blue-600" onclick={() => isMobileMenuOpen = false}>Docs</a>
            <div class="pt-4 border-t border-slate-100 flex flex-col gap-3">
                 <a href="https://github.com" target="_blank" class="text-slate-600 font-medium">GitHub</a>
                 <button class="bg-slate-900 text-white px-5 py-3 rounded-lg text-sm font-semibold w-full">Get Started</button>
            </div>
        </div>
    {/if}
  </header>

  <!-- Page Content -->
  <main class="grow">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="bg-white border-t border-slate-200 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
            <h3 class="text-slate-900 font-bold text-lg">FastFlow</h3>
            <p class="text-slate-500 text-sm mt-1">Accelerate your development journey.</p>
        </div>
        <div class="flex gap-6 text-slate-500 text-sm">
            <a href="/privacy" class="hover:text-blue-600">Privacy</a>
            <a href="/terms" class="hover:text-blue-600">Terms</a>
        </div>
        <div class="text-slate-400 text-sm">
            © {new Date().getFullYear()} FastFlow.
        </div>
    </div>
  </footer>
</div>
