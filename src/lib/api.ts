export async function sendContactForm(payload: {
  name: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  email: FormDataEntryValue | null;
  service: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
}) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = await res.json();
  if (!res.ok || !json.ok) {
    throw new Error(json.error || "Failed to send message");
  }

  return json;
}
