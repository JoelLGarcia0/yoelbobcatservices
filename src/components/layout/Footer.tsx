"use client";

import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { logos } from "../../../public";

export default function Footer() {
  return (
    <footer className="bg-footerbg  text-gray-300">
      {/* Top */}
      <div className="mx-auto max-w-5xl px-6 py-4">
        {/* Logo */}
        <div className="flex justify-center">
          <Link href="/" aria-label="Yoel Bobcat Services">
            <img
              src="/logos/logored.svg"
              alt="Yoel Bobcat Services"
              className="h-22 w-auto"
            />
          </Link>
        </div>

        {/* Contact row */}
        <ul className="mt-6 flex flex-col items-center gap-3 text-sm md:flex-row md:flex-wrap md:justify-center md:gap-x-8 md:gap-y-2">
          <li className="flex items-center gap-2">
            <FiMapPin className="h-4 w-4 text-mainred" />
            <address className="not-italic">
              15083 SW 184th Ave, Miami, FL 33187
            </address>
          </li>

          <li className="hidden md:block h-4 w-px bg-white/15" aria-hidden />

          <li className="flex items-center gap-2">
            <FiPhone className="h-4 w-4 text-mainred" />
            <a href="tel:+13057378355" className="hover:text-mainred">
              +1 (305) 737-8355
            </a>
          </li>

          <li className="hidden md:block h-4 w-px bg-white/15" aria-hidden />

          <li className="flex items-center gap-2">
            <FiMail className="h-4 w-4 text-mainred" />
            <a
              href="mailto:yoelbobcatservices@gmail.com"
              className="hover:text-mainred"
            >
              yoelbobcatservices@gmail.com
            </a>
          </li>
        </ul>

        {/* Social + top button */}
        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@yoel.bobcat.servi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="group"
            >
              <FaTiktok className="h-5 w-5 text-gray-300 group-hover:text-mainred transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/yoelbobcat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group"
            >
              <FaInstagram className="h-5 w-5 text-gray-300 group-hover:text-mainred transition-colors" />
            </a>
            <a
              href="https://www.pinterest.com/yoelbobcat/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="group"
            >
              <FaPinterest className="h-5 w-5 text-gray-300 group-hover:text-mainred transition-colors" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-white p-2.5 text-darkgray shadow hover:scale-105 transition"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-6 py-4 text-center text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Yoel Bobcat Services. All rights
            reserved.
          </p>
          <p className="mt-1">
            Created by{" "}
            <Link
              href="https://restweb.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-mainred hover:underline"
            >
              RESTWeb.dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
