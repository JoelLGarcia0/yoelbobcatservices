"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { logos } from "../../../public";

const links = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isSolid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300
      ${isSolid ? "bg-black/80" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logos.logo}
            alt="Yoel Bobcat Services"
            width={80}
            height={80}
            priority
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white hover:text-mainred transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#estimate"
            className="inline-flex items-center  bg-black border-mainred border-2 px-5 py-2 font-title text-sm font-semibold uppercase tracking-wide text-mainred hover:bg-mainred hover:text-white transition-colors"
          >
            Get A Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-2 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-colors ${
          open ? "bg-black/60" : "pointer-events-none bg-transparent"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-60 transform bg-darkgray shadow-xl transition-transform
          ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-4 py-3 mt-2">
            <span className="sr-only">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <div className="px-4 py-4">
            <ul className="space-y-1 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2 text-white hover:text-mainred"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4 text-sm">
              <Link
                href="#estimate"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center bg-black border-mainred border-2 px-5 py-2 font-title text-sm font-semibold uppercase tracking-wide text-mainred hover:bg-mainred hover:text-white transition-colors"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </header>
  );
}
