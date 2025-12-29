import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const email = formData.get('email');
		const subject = formData.get('subject');
		const message = formData.get('message');

		const errors = {};

		if (!name || typeof name !== 'string' || name.length < 2) {
			errors.name = 'Name must be at least 2 characters long.';
		}

		if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address.';
		}

		if (!subject || typeof subject !== 'string' || subject.length < 3) {
			errors.subject = 'Subject must be at least 3 characters long.';
		}

		if (!message || typeof message !== 'string' || message.length < 10) {
			errors.message = 'Message must be at least 10 characters long.';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				errors,
				data: { name, email, subject, message }
			});
		}

		// In a real app, you would send the email here using a service like SendGrid or AWS SES
		return { success: true };
	}
};