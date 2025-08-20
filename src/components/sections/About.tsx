// components/About.tsx
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { images } from "../../../public"; // keep your current import if you’re using this pattern

export default function About() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Pan the background slightly as this section scrolls into view
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when top hits bottom → when bottom hits top
  });

  // Horizontal “panorama” and gentle zoom
  const x = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, 1.1]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full h-[500px] md:h-[600px] overflow-hidden"
    >
      {/* Background layer with panoramic scroll */}
      <motion.div className="absolute inset-0" style={{ x, scale }} aria-hidden>
        <Image
          src={images.aboutimg}
          alt="Yoel Bobcat Service crew and equipment"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto flex h-full max-w-content items-center justify-center px-6 text-center text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="max-w-3xl">
          <h2 className="font-title text-3xl md:text-5xl font-bold leading-tight">
            We&apos;ve Been Providing Services
            <br className="hidden sm:block" />
            For Over 23 Years
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed font-body">
            Yoel Bobcat Services Inc is a well-established company with a
            remarkable 23 year track record of excellence in Homestead, FL. We
            specialize in providing top-tier Bobcat services to residential and
            commercial clients. Our extensive experience in the industry has
            made us a trusted name, known for our professionalism and dedication
            to delivering quality results.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
