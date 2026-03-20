
'use server';

import nodemailer from 'nodemailer';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(2, "Subject is too short"),
  message: z.string().min(10, "Message is too short"),
});

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
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

    // Check if credentials exist
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.');
      return {
        success: false,
        message: 'Email service is currently misconfigured. Please try again later.'
      };
    }

    // Send email using Nodemailer
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Gmail often overrides the 'from' address to the authenticated user
      to: 'sarsonasjosephuskim@gmail.com',
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
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #3b82f6;">New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
        </div>
      `,
    });

    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (err) {
    console.error('Contact Action Error:', err);
    return {
      success: false,
      message: 'An unexpected error occurred while sending the message. Please try again later.',
    };
  }
}
