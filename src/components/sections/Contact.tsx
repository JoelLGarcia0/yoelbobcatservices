// components/Contact.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { images } from "../../../public";
import { MapPin, Clock, Phone } from "lucide-react";
import { sendContactForm } from "@/lib/api";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const payload = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        service: formData.get("service"),
        message: formData.get("message"),
      };
      await sendContactForm(payload);

      alert("Thanks! We'll get back to you shortly.");
      form.reset();
    } catch (err) {
      console.error(err);
      alert("Sorry—something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="w-full bg-gray-50">
      <div className="mx-auto w-full">
        <div className="grid md:grid-cols-2">
          {/* LEFT */}
          <div className="relative flex flex-col">
            {/* Background */}
            <div className="absolute inset-0">
              <Image
                src={images.hoursimg}
                alt="Background"
                fill
                priority
                style={{ objectFit: "cover", objectPosition: "10% top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col p-6 md:p-10 text-white">
              {/* Emphasis panel */}
              <div className="mx-auto w-full max-w-xl bg-black/30 backdrop-blur-xs ring-1 ring-white/10 p-6 md:p-8">
                {/* Title with brackets */}
                <div className="mb-6 text-center">
                  <div className="relative mt-4 inline-block">
                    <span
                      aria-hidden
                      className="absolute -left-6 -top-6 block h-6 w-6 border-t-6 border-l-6 border-mainred"
                    />
                    <span
                      aria-hidden
                      className="absolute -right-6 -bottom-6 block h-6 w-6 border-b-6 border-r-6 border-mainred"
                    />
                    <h2 className=" uppercase text-2xl md:text-3xl font-bold">
                      Location & Hours
                    </h2>
                  </div>
                </div>

                {/* Address + Hours */}
                <div className="grid gap-6 text-base md:grid-cols-2">
                  {/* Address */}
                  <div className="space-y-3">
                    <p className="font-bold text-mainred">Address</p>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-mainred" />
                      <address className="not-italic leading-relaxed">
                        15083 SW 184th Ave,
                        <br />
                        Miami, FL 33187
                      </address>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-mainred" />
                      <a href="tel:+13057378355" className="hover:text-white">
                        (305) 737-8355
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="space-y-3">
                    <p className="font-bold text-mainred">Hours</p>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 h-5 w-5 text-mainred" />
                      <ul className="grid w-full grid-cols-2 gap-y-1 text-white/90">
                        <li>Mon–Fri</li>
                        <li className="text-right">7 AM–5 PM</li>
                        <li>Saturday</li>
                        <li className="text-right">7 AM–5 PM</li>
                        <li>Sunday</li>
                        <li className="text-right">Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mx-auto mt-6 w-full max-w-xl">
                <div className="rounded-none bg-black/40 ring-1 ring-white/10 p-0.5">
                  <iframe
                    title="Yoel Bobcat Services Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-80 w-full rounded-none shadow-lg"
                    src="https://www.google.com/maps?q=15083+SW+184th+Ave,+Miami,+FL+33187&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            id="contact"
            className="bg-darkgray p-10 px-8 md:px-16 text-white"
          >
            <div className="mb-6 text-center">
              <h2 className="font-title text-2xl md:text-3xl uppercase font-bold">
                Request A Quote
              </h2>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="FULL NAME"
                className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm placeholder-white/70 outline-none focus:border-mainred focus:ring-1 focus:ring-mainred"
              />

              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="MOBILE"
                className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm placeholder-white/70 outline-none focus:border-mainred focus:ring-1 focus:ring-mainred"
              />

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="EMAIL"
                className="w-full rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm placeholder-white/70 outline-none focus:border-mainred focus:ring-1 focus:ring-mainred"
              />

              {/* Service Dropdown */}
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full appearance-none rounded-none border border-white/20 bg-darkgray px-4 py-3 pr-10 text-sm outline-none focus:border-mainred focus:ring-1 focus:ring-mainred"
                >
                  <option value="" disabled>
                    SERVICE
                  </option>
                  <option>Driveway Leveling</option>
                  <option>Construction Services</option>
                  <option>Fence Hole Drilling</option>
                  <option>Infrastructure Construction</option>
                  <option>Material Delivery</option>
                  <option>Site Management</option>
                  <option>Special Projects</option>
                  <option>Sidewalk Demolition</option>
                  <option>Other</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="MESSAGE"
                className="w-full resize-y rounded-none border border-white/20 bg-transparent px-4 py-3 text-sm placeholder-white/70 outline-none focus:border-mainred focus:ring-1 focus:ring-mainred"
              />

              <div className="pt-2 text-center">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-w-[140px] items-center justify-center bg-black border-2 border-mainred px-5 py-2 font-title text-sm font-semibold uppercase tracking-wide text-mainred transition-colors hover:bg-mainred hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
