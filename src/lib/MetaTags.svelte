<script>
	export let title = 'FastFlow';
	export let description = 'The curated web stack built on SvelteKit, Tailwind, and Prisma. Accelerate your development flow.';
	export let image = 'https://fast-flow-dev.vercel.app/og-image.png'; // Ensure you add an image to your static folder
	export let url = 'https://fast-flow-dev.vercel.app/';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={image} />
</svelte:head>