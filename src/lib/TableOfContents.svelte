<script>
	import { onMount } from 'svelte';
	import { afterNavigate } from '$app/navigation';

	/** @type {Array<{id: string, text: string}>} */
	let headings = [];
	let activeId = '';
	/** @type {IntersectionObserver | null} */
	let observer = null;

	function init() {
		observer?.disconnect();

		const elements = document.querySelectorAll('.prose h2');

		headings = Array.from(elements).map((element) => {
			const text = element.textContent || '';
			if (!element.id) {
				element.id = text
					.toLowerCase()
					.replace(/\s+/g, '-')
					.replace(/[^\w-]/g, '');
			}
			return {
				id: element.id,
				text: text
			};
		});

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeId = entry.target.id;
					}
				});
			},
			{ rootMargin: '0px 0px -80% 0px' }
		);

		// @ts-ignore
		elements.forEach((element) => observer.observe(element));
	}

	afterNavigate(() => {
		init();
	});

	onMount(() => {
		init();
		return () => observer?.disconnect();
	});
</script>

<nav class="hidden xl:block w-64 shrink-0 pl-8 border-l border-slate-200 dark:border-slate-800 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto">
	<p class="font-bold text-slate-900 dark:text-slate-100 mb-4 text-sm">On this page</p>
	{#if headings.length > 0}
		<ul class="space-y-3 text-sm">
			{#each headings as heading}
				<li>
					<a
						href="#{heading.id}"
						class="block transition-colors {activeId === heading.id
							? 'text-blue-600 dark:text-blue-400 font-medium'
							: 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'}"
						onclick={() => (activeId = heading.id)}
					>
						{heading.text}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>