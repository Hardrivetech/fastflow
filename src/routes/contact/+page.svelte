<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<svelte:head>
	<title>Contact Us - FastFlow</title>
</svelte:head>

<div class="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get in touch</h1>
		<p class="text-lg text-slate-600 dark:text-slate-400">
			Have questions about FastFlow? We'd love to hear from you.
		</p>
	</div>

	{#if form?.success}
		<div class="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-6 text-center">
			<h3 class="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">Message Sent!</h3>
			<p class="text-green-700 dark:text-green-300">Thank you for contacting us. We'll get back to you shortly.</p>
			<a href="/" class="inline-block mt-6 text-green-700 dark:text-green-300 font-medium hover:underline">Return Home &rarr;</a>
		</div>
	{:else}
		<form method="POST" use:enhance class="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
			<!-- Name -->
			<div>
				<label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
				<input 
					type="text" 
					name="name" 
					id="name" 
					value={form?.data?.name ?? ''}
					class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border"
				/>
				{#if form?.errors?.name}
					<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.name}</p>
				{/if}
			</div>

			<!-- Email -->
			<div>
				<label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
				<input 
					type="email" 
					name="email" 
					id="email" 
					value={form?.data?.email ?? ''}
					class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border"
				/>
				{#if form?.errors?.email}
					<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.email}</p>
				{/if}
			</div>

			<!-- Subject -->
			<div>
				<label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
				<input 
					type="text" 
					name="subject" 
					id="subject" 
					value={form?.data?.subject ?? ''}
					class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border"
				/>
				{#if form?.errors?.subject}
					<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.subject}</p>
				{/if}
			</div>

			<!-- Message -->
			<div>
				<label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
				<textarea 
					name="message" 
					id="message" 
					rows="4" 
					value={form?.data?.message ?? ''}
					class="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2.5 border"
				></textarea>
				{#if form?.errors?.message}
					<p class="mt-1 text-sm text-red-600 dark:text-red-400">{form.errors.message}</p>
				{/if}
			</div>

			<button type="submit" class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors cursor-pointer">
				Send Message
			</button>
		</form>
	{/if}
</div>