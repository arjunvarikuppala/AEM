import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields (name, email, phone, message) are required." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "prashanthvk494@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const mailOptions = {
      from: `"Aadhya Earth Movers Website" <${emailUser}>`,
      to: "prashanthvk494@gmail.com",
      replyTo: email,
      subject: "New Website Inquiry | Aadhya Earth Movers",
      text: `Name:
${name}

Email:
${email}

Phone:
${phone}

Message:
${message}

Submitted On:
${submittedAt}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff; border: 1px solid #333; border-radius: 8px;">
          <h2 style="color: #F4B400; border-bottom: 2px solid #F4B400; padding-bottom: 10px;">New Website Inquiry | Aadhya Earth Movers</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #F4B400;">${email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${phone}" style="color: #F4B400;">${phone}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #141414; padding: 15px; border-radius: 6px; border-left: 4px solid #F4B400; margin-bottom: 20px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #888888;">Submitted On: ${submittedAt}</p>
        </div>
      `,
    };

    if (emailPass) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("EMAIL_PASS not set in env. Email simulation success for:", name);
    }

    return NextResponse.json(
      { success: true, message: "Thank you! Your message has been sent successfully. Our team will contact you shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
