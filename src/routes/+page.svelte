<script>
    // Data defining the FastFlow stack components
    const stackItems = [
        { 
            category: "Frontend", 
            title: "SvelteKit", 
            desc: "Server-side rendering, seamless routing, and hydration for ultimate performance.", 
            icon: "🔥",
            color: "text-orange-500"
        },
        { 
            category: "Styling", 
            title: "Tailwind CSS", 
            desc: "Utility-first CSS framework for rapid, responsive, and modern UI design.", 
            icon: "🎨",
            color: "text-cyan-500"
        },
        { 
            category: "Database", 
            title: "PostgreSQL + Prisma", 
            desc: "Robust relational data storage with type-safe ORM access.", 
            icon: "🐘",
            color: "text-blue-600"
        },
        { 
            category: "Backend", 
            title: "Node.js & Express", 
            desc: "Flexible server-side operations with optional tRPC integration.", 
            icon: "⚙️",
            color: "text-green-600"
        },
        { 
            category: "Auth", 
            title: "Auth0 / Firebase", 
            desc: "Secure, industry-standard authentication and user management.", 
            icon: "🔒",
            color: "text-red-500"
        },
        { 
            category: "Testing", 
            title: "Jest & Cypress", 
            desc: "Comprehensive unit and end-to-end testing for total confidence.", 
            icon: "✅",
            color: "text-purple-500"
        }
    ];
</script>

<!-- Hero Section -->
<section class="relative pt-20 pb-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300 text-sm font-semibold tracking-wide">
            v1.0 is now available
        </div>
        <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Accelerate Your <br class="hidden md:block" />
            <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">Development Flow</span>
        </h1>
        <p class="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            FastFlow is the curated web stack built on SvelteKit, Tailwind, and Prisma. 
            Stop configuring and start shipping performant applications.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/docs/getting-started" class="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-500 transition shadow-xl shadow-blue-500/30 ring-offset-2 focus:ring-2 ring-blue-600">
                Start Building
            </a>
            <a href="/docs" class="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition hover:border-slate-300 dark:hover:border-slate-600">
                Read the Docs
            </a>
        </div>
    </div>
    
    <!-- Animated Background Blobs -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 opacity-40 pointer-events-none">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-0 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-32 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
    </div>
</section>

<!-- The Stack Grid -->
<section id="stack" class="py-24 bg-white dark:bg-slate-950 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">The Best Web Stack</h2>
            <p class="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We've selected the most robust technologies to ensure your application is scalable, type-safe, and easy to maintain.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each stackItems as item}
                <div class="group p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1">
                    <div class="flex items-center justify-between mb-6">
                        <div class="text-4xl">{item.icon}</div>
                        <div class={`text-xs font-bold uppercase tracking-wider ${item.color} bg-white dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-100 dark:border-slate-700 shadow-sm`}>
                            {item.category}
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
            {/each}
        </div>
    </div>
</section>

<!-- Architecture / CLI Section -->
<section id="architecture" class="py-24 bg-slate-900 text-white overflow-hidden relative">
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 class="text-3xl md:text-4xl font-bold mb-6">Production Ready Architecture</h2>
                <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                    FastFlow isn't just a list of tools; it's a cohesive architecture. 
                    We provide pre-configured setups for Docker, CI/CD pipelines with Vercel, 
                    and monitoring with Sentry.
                </p>
                <ul class="space-y-4 mb-8">
                    {#each ['Type-safe from database to frontend', 'Server-Side Rendering (SSR) by default', 'Edge-ready deployment configuration'] as feature}
                        <li class="flex items-center gap-3 text-slate-300">
                            <svg class="w-5 h-5 text-blue-500 flex-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            {feature}
                        </li>
                    {/each}
                </ul>
            </div>
            
            <!-- Code Snippet Visual -->
            <div class="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 font-mono text-sm">
                <div class="flex gap-2 mb-4">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="space-y-2">
                    <p class="text-slate-400"># Create a new FastFlow project</p>
                    <p class="text-white">
                        <span class="text-purple-400">npx</span> create-fastflow-app <span class="text-blue-400">my-awesome-app</span>
                    </p>
                    <p class="text-slate-500 animate-pulse">_</p>
                </div>
            </div>
        </div>
    </div>
</section>
