
'use server';

import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  try {
    const validatedFields = formSchema.safeParse(values);

    if (!validatedFields.success) {
      return { 
        success: false, 
        message: 'Invalid form data. Please check your inputs and try again.' 
      };
    }

    const { name, email, subject, message } = validatedFields.data;

    // Send email using Resend
    // By default, Resend allows sending to the address you signed up with using the 'onboarding@resend.dev' address.
    // To send to other addresses or use a custom domain, you must verify the domain in the Resend dashboard.
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['sarsonasjosephuskim@gmail.com'],
      replyTo: email,
      subject: subject || `New Inquiry from ${name}`,
      text: `
New message from your portfolio website:

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { 
        success: false, 
        message: 'Failed to send message. Please ensure your RESEND_API_KEY is configured.' 
      };
    }

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (err) {
    console.error('Contact Action Error:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
