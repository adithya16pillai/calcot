import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Get form data from request
    const { name, email, message } = await request.json();
    
    // Validate form data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email and message are required' },
        { status: 400 }
      );
    }

    // Configure email transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-sending-email@gmail.com', // Replace with a sending email (could be same as receiving)
        pass: process.env.EMAIL_PASSWORD, // Set this in your environment variables
      },
    });

    // Email content
    const mailOptions = {
      from: 'your-sending-email@gmail.com',
      to: 'adithya.pillai16@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}