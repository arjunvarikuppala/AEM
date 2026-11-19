import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  canSimulateEmail,
  escapeHtml,
  isValidEmail,
  isValidPhone,
  pickStrings,
  readJsonObject,
  toHtmlParagraph,
} from "@/lib/formSubmission";

export async function POST(request) {
  try {
    const body = await readJsonObject(request);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const { name, email, phone, location, projectType, budget, timeline, message } = pickStrings(body, [
      "name",
      "email",
      "phone",
      "location",
      "projectType",
      "budget",
      "timeline",
      "message",
    ]);

    if (!name || !email || !phone || !location) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, phone, location)." },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }
    if (!isValidPhone(phone)) {
      return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER || "prashanthvk494@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass && !canSimulateEmail()) {
      console.error("EMAIL_PASS is not configured; quote request email cannot be sent.");
      return NextResponse.json(
        { error: "Failed to submit request. Please call or WhatsApp us instead." },
        { status: 500 }
      );
    }

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

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      location: escapeHtml(location),
      projectType: escapeHtml(projectType || "N/A"),
      budget: escapeHtml(budget || "N/A"),
      timeline: escapeHtml(timeline || "N/A"),
    };

    const mailOptions = {
      from: `"Aadhya Earth Movers Website" <${emailUser}>`,
      to: "prashanthvk494@gmail.com",
      replyTo: email,
      subject: `New Appointment / Quote Request - ${name} | Aadhya Earth Movers`,
      text: `Name: ${name}
Email: ${email}
Phone: ${phone}
Location: ${location}
Project Type: ${projectType || "N/A"}
Estimated Budget: ${budget || "N/A"}
Expected Timeline: ${timeline || "N/A"}
Project Description: ${message || "N/A"}

Submitted On: ${submittedAt}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff; border: 1px solid #333; border-radius: 8px;">
          <h2 style="color: #F4B400; border-bottom: 2px solid #F4B400; padding-bottom: 10px; margin-top: 0;">New Appointment / Quote Request</h2>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; color: #ffffff;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #aaa;">Client Name:</td>
              <td style="padding: 8px 0; font-weight: bold; color: #F4B400;">${safe.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safe.email}" style="color: #F4B400; text-decoration: none;">${safe.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Phone:</td>
              <td style="padding: 8px 0;"><a href="tel:${safe.phone}" style="color: #F4B400; text-decoration: none;">${safe.phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Location:</td>
              <td style="padding: 8px 0;">${safe.location}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Project Type:</td>
              <td style="padding: 8px 0;">${safe.projectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Estimated Budget:</td>
              <td style="padding: 8px 0;">${safe.budget}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #aaa;">Expected Timeline:</td>
              <td style="padding: 8px 0;">${safe.timeline}</td>
            </tr>
          </table>

          <p style="font-weight: bold; color: #aaa; margin-bottom: 6px;">Project Description / Notes:</p>
          <div style="background-color: #141414; padding: 15px; border-radius: 6px; border-left: 4px solid #F4B400; margin-bottom: 20px; color: #dddddd;">
            ${toHtmlParagraph(message || "No additional description provided.")}
          </div>

          <p style="font-size: 12px; color: #888888; margin-bottom: 0;">Submitted On: ${submittedAt}</p>
        </div>
      `,
    };

    if (emailPass) {
      await transporter.sendMail(mailOptions);
    } else {
      console.warn("EMAIL_PASS not set (development). Quote email simulation success for:", name);
    }

    return NextResponse.json(
      { success: true, message: "Appointment request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error submitting quote request email:", error);
    return NextResponse.json(
      { error: "Failed to submit request. Please try again later." },
      { status: 500 }
    );
  }
}
