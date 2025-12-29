<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<svelte:head>
	<title>Contact Us - FastFlow</title>
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-8">Contact Us</h1>

	{#if form?.success}
		<div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 p-4 rounded-lg mb-8">
			<p class="font-medium">Message sent successfully!</p>
			<p class="text-sm mt-1">We'll get back to you as soon as possible.</p>
		</div>
	{/if}

	<form method="POST" use:enhance class="space-y-6">
		<!-- Name -->
		<div>
			<label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
			<input
				type="text"
				name="name"
				id="name"
				value={form?.data?.name?.toString() ?? ''}
				class="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
			/>
			{#if form?.errors?.name}
				<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.name}</p>
			{/if}
		</div>

		<!-- Email -->
		<div>
			<label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
			<input
				type="email"
				name="email"
				id="email"
				value={form?.data?.email?.toString() ?? ''}
				class="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
			/>
			{#if form?.errors?.email}
				<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.email}</p>
			{/if}
		</div>

		<!-- Subject -->
		<div>
			<label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
			<input
				type="text"
				name="subject"
				id="subject"
				value={form?.data?.subject?.toString() ?? ''}
				class="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
			/>
			{#if form?.errors?.subject}
				<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.subject}</p>
			{/if}
		</div>

		<!-- Message -->
		<div>
			<label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
			<textarea
				name="message"
				id="message"
				rows="4"
				value={form?.data?.message?.toString() ?? ''}
				class="mt-1 block w-full rounded-md border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2 px-3 border"
			></textarea>
			{#if form?.errors?.message}
				<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.message}</p>
			{/if}
		</div>

		<div>
			<button
				type="submit"
				class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
			>
				Send Message
			</button>
		</div>
	</form>
</div>