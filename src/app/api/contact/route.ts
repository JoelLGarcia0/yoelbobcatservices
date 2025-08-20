import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, message } = await req.json();

    //validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL!;
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // minimal HTML
    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif">
        <h2>New Request from Website</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "")}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;line-height:1.5">${escapeHtml(
          message
        )}</pre>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      to,
      from,
      replyTo: email, // so you can reply directly
      subject: `New Website Request from ${name} (${service || "General"})`,
      html,
    });

    if (error) {
      console.error(error);
      return NextResponse.json(
        { ok: false, error: "Email failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Bad request" },
      { status: 400 }
    );
  }
}

/* tiny HTML escape to avoid broken markup */
function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
