import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    // OAuth2: exchange refresh token for an access token at send time
    const oAuth2Client = new google.auth.OAuth2(
      process.env.GMAIL_CLIENT_ID,
      process.env.GMAIL_CLIENT_SECRET
    );
    oAuth2Client.setCredentials({
      refresh_token: process.env.GMAIL_REFRESH_TOKEN,
    });

    const { token } = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GMAIL_CLIENT_ID,
        clientSecret: process.env.GMAIL_CLIENT_SECRET,
        refreshToken: process.env.GMAIL_REFRESH_TOKEN,
        accessToken: token as string,
      },
    });

    // Optional during setup: await transporter.verify();

    const from = process.env.CONTACT_FROM_EMAIL || process.env.GMAIL_USER!;
    const to = process.env.CONTACT_TO_EMAIL || process.env.GMAIL_USER!;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
        <h2>New Request from Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;line-height:1.5">${escapeHtml(message)}</pre>
      </div>
    `;

    const info = await transporter.sendMail({
      from, // must be the Gmail you authorized
      to, // your inbox
      replyTo: email, // so you can reply directly to the visitor
      subject: `New Website Request from ${name} (${service || "General"})`,
      html,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Email failed" },
      { status: 500 }
    );
  }
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
