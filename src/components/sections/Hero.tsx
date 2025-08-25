"use client";

import Image from "next/image";
import Link from "next/link";
import { images } from "../../../public";

export default function Hero() {
  return (
    <section className="relative isolate h-[100dvh] w-full overflow-hidden">
      {/* Mobile image (shown < md) */}
      <Image
        src={images.hero2Mobile}
        alt="Yoel Bobcat Services heavy machinery on site"
        fill
        priority
        quality={90}
        sizes="(max-width: 767px) 100vw, 100vw"
        className="absolute inset-0 object-cover object-center
             opacity-100 md:opacity-0 pointer-events-none"
      />

      {/* Desktop image always mounted */}
      <Image
        src={images.hero2}
        alt="Yoel Bobcat Services heavy machinery on site"
        fill
        priority
        quality={90}
        sizes="(min-width: 768px) 100vw, 100vw"
        className="absolute inset-0 object-cover object-top
             opacity-0 md:opacity-100 pointer-events-none"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl items-center px-14">
        <div className="max-w-3xl">
          <div className="relative mt-8 inline-block">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-6 -top-6 block h-10 w-10 border-l-8 border-t-8 border-mainred"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-6 -bottom-6 block h-10 w-10 border-b-8 border-r-8 border-mainred"
            />
            <h1 className="font-title uppercase tracking-tight text-white font-extrabold leading-tight text-4xl sm:text-5xl md:text-6xl">
              Groundwork. <br /> Precision. <br /> Results.
            </h1>
          </div>

          <p className="mt-8 max-w-xl text-sm sm:text-base text-gray-200 font-body">
            With over 23 years of experience in construction and excavation, we
            deliver reliable results for residential and commercial projects.
          </p>

          <div className="mt-12">
            <Link
              href="tel:7862475383"
              className="inline-flex items-centerborder-2 bg-black border-mainred border-2 px-5 py-2 font-title text-sm font-semibold uppercase tracking-wide text-mainred hover:bg-mainred hover:text-white transition-colors"
            >
              CALL NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
