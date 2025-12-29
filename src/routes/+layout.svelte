<script>
  import "../app.css";
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let isMobileMenuOpen = false;
  let isDark = false;
  let showBackToTop = false;

  $: $page.url.pathname, isMobileMenuOpen = false;

  onMount(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark = true;
      document.documentElement.classList.add('dark');
    } else {
      isDark = false;
      document.documentElement.classList.remove('dark');
    }
  });

  function toggleTheme() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  function handleScroll() {
    showBackToTop = window.scrollY > 500;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<svelte:window onscroll={handleScroll} />

<div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
  <!-- Navigation -->
  <header class="sticky top-0 z-50 w-full border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <div class="w-8 h-8 bg-linear-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">F</div>
            <span class="text-xl font-bold tracking-tight text-slate-900 dark:text-white">FastFlow</span>
        </a>

        <!-- Desktop Menu -->
        <nav class="hidden md:flex gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="/#stack" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">The Stack</a>
          <a href="/#architecture" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Architecture</a>
          <a href="/docs" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Docs</a>
        </nav>

        <!-- Mobile Menu Button -->
        <button class="md:hidden p-2 text-slate-600 dark:text-slate-300" onclick={() => isMobileMenuOpen = !isMobileMenuOpen} aria-label="Toggle menu">
            {#if isMobileMenuOpen}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            {:else}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
            {/if}
        </button>

        <!-- CTA -->
        <div class="hidden md:flex items-center gap-4">
            <button onclick={toggleTheme} class="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors" aria-label="Toggle dark mode">
                {#if isDark}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
                {:else}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>
                {/if}
            </button>
            <a href="https://github.com" target="_blank" class="hidden sm:block text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm">GitHub</a>
            <button class="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-900/20">
                Get Started
            </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if isMobileMenuOpen}
        <div class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-6 space-y-4 shadow-lg">
            <a href="/#stack" class="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" onclick={() => isMobileMenuOpen = false}>The Stack</a>
            <a href="/#architecture" class="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" onclick={() => isMobileMenuOpen = false}>Architecture</a>
            <a href="/docs" class="block text-base font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400" onclick={() => isMobileMenuOpen = false}>Docs</a>
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                 <button onclick={toggleTheme} class="flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium">
                    {#if isDark}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg> Light Mode
                    {:else}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg> Dark Mode
                    {/if}
                 </button>
                 <a href="https://github.com" target="_blank" class="text-slate-600 dark:text-slate-300 font-medium">GitHub</a>
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
  <footer class="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-center md:text-left">
            <h3 class="text-slate-900 dark:text-white font-bold text-lg">FastFlow</h3>
            <p class="text-slate-500 text-sm mt-1">Accelerate your development journey.</p>
        </div>
        <div class="flex gap-6 text-slate-500 text-sm">
            <a href="/privacy" class="hover:text-blue-600">Privacy</a>
            <a href="/terms" class="hover:text-blue-600">Terms</a>
            <a href="/contact" class="hover:text-blue-600">Contact</a>
        </div>
        <div class="text-slate-400 text-sm">
            © {new Date().getFullYear()} FastFlow.
        </div>
    </div>
  </footer>

  <!-- Back to Top Button -->
  <button
    onclick={scrollToTop}
    class="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 transform {showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}"
    aria-label="Back to top"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
    </svg>
  </button>
</div>
