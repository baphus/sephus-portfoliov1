'use server';

import nodemailer from 'nodemailer';
import * as z from 'zod';

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

    // Check if credentials exist in environment
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Email configuration missing: GMAIL_USER or GMAIL_APP_PASSWORD');
      return {
        success: false,
        message: 'Email service is currently misconfigured. Please check environment variables.'
      };
    }

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email using Nodemailer
    // Note: Gmail SMTP forces the 'from' address to the authenticated account.
    // We use 'replyTo' so you can respond directly to the sender's email.
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'sarsonasjosephuskim@gmail.com',
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `
New message from your portfolio website:

-----------------------------------------
SENDER DETAILS
-----------------------------------------
Name: ${name}
Email: ${email}
Subject: ${subject}

-----------------------------------------
MESSAGE CONTENT
-----------------------------------------
${message}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; border: 1px solid #e2e8f0; border-radius: 16px; max-width: 600px; margin: 0 auto; background-color: #ffffff; color: #1e293b;">
          <h2 style="color: #3b82f6; margin-top: 0; font-size: 24px; border-bottom: 2px solid #eff6ff; padding-bottom: 10px;">New Portfolio Inquiry</h2>
          
          <div style="margin-top: 25px; background-color: #f8fafc; padding: 15px; rounded: 12px; border: 1px solid #f1f5f9;">
            <p style="margin: 5px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Sender Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Subject:</strong> ${subject}</p>
          </div>

          <div style="margin-top: 30px;">
            <p style="font-weight: bold; color: #64748b; text-transform: uppercase; font-size: 12px; letter-spacing: 0.1em; margin-bottom: 10px;">Message Content:</p>
            <div style="white-space: pre-wrap; line-height: 1.6; color: #334155; padding: 15px; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px;">
              ${message}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; text-align: center;">
            <p>Sent from your Personal Portfolio Website</p>
            <p>Reply directly to this email to contact ${name}</p>
          </div>
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
