'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * sendEmail sends contact form submissions through Resend and returns a serializable status.
 */
export async function sendEmail(formData: { name: string; email: string; message: string }) {
    try {
        const { name, email, message } = formData;

        const { error } = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: ['tomasz.m.kaczmarek@gmail.com'],
            subject: `New message from ${name} via Portfolio Contact Form`,
            replyTo: email,
            text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        if (error) {
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (error) {
        console.error("Email sending failed", error);
        return { success: false, error: "Server error. Try again later."};
    }
}
