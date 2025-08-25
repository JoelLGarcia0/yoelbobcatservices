"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Expertise() {
  return (
    <section className="w-full">
      <div className="mx-auto grid max-w-content grid-cols-1 md:grid-cols-3">
        {/* Left Column */}
        <div className="bg-mainred text-white p-8 md:py-12 md:px-10">
          <Highlight
            title="Precision Demolition & Removal"
            text="From sheds and garages to full concrete tear-outs, we perform controlled demolition that protects surrounding structures and utilities."
          />
          <div className="my-8 h-px w-full bg-white/15 md:my-10" />
          <Highlight
            title="Modern Equipment, Trained Operators"
            text="Excavators, breakers, and haul-offs, our fleet and operators handle tight access, hard surfaces, and Miami's unique site conditions."
          />
          <div className="my-8 h-px w-full bg-white/15 md:my-10" />
          <Highlight
            title="On-Time, On-Budget Delivery"
            text="Permits, scheduling, and safety first. We keep your project moving and your costs predictable from estimate to clean finish."
          />
        </div>

        {/* Right Column */}
        <div className="md:col-span-2 bg-gray-50 flex flex-col justify-between">
          {/* Main text content */}
          <div id="services" className="p-10 md:py-12 md:px-12 flex-1">
            <div className="relative mb-6 md:mb-8">
              <span
                aria-hidden
                className="absolute -left-4 -top-4 block h-8 w-8 border-t-8 border-l-8 border-mainred"
              />
              <span
                aria-hidden
                className="absolute -right-4 -bottom-4 block h-8 w-8 border-b-8 border-r-8 border-mainred"
              />
              <h2 className="font-title text-2xl md:text-3xl text-center uppercase font-bold text-darktext">
                Your Project, Our Expertise
              </h2>
            </div>

            <div className="grid gap-6 text-graytext md:grid-cols-2">
              <p className="leading-relaxed">
                Based in Homestead, FL, Yoel Bobcat Service Inc. specializes in
                demolition and site preparation. This includes pool removals
                (above-ground and inground), concrete driveways, patios,
                sidewalks, foundations, parking lots, barns, and more. We
                complete each phase safely, accurately, and in compliance with
                local requirements.
              </p>
              <p className="leading-relaxed">
                Our experienced team and modern equipment allow us to mobilize
                quickly, work efficiently, and keep your project on schedule and
                within budget. From selective tear-outs to full-scale demo and
                haul-off, we deliver a clean, build-ready site. Done right the
                first time.
              </p>
            </div>

            <ul className="mt-6 grid gap-2 text-sm text-gray-600 md:grid-cols-2">
              <li>• Concrete & Asphalt Removal</li>
              <li>• Sidewalks, Patios, & Driveways</li>
              <li>• Garage & Shed Demolition</li>
              <li>• Above-Ground & Inground Pool Removal</li>
              <li>• Foundations & Slab Break-Up</li>
              <li>• Deck, Fence, & Misc. Structures</li>
            </ul>
          </div>

          <div className="bg-darkgray px-8 py-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-title text-white text-xl md:text-2xl font-bold">
                Get Your Free Consultation
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Ready to start your next project? Let&apos;s review your scope
                and timeline and build a plan that works for you.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-mainred px-5 py-2 font-title text-sm font-semibold uppercase tracking-wide text-mainred hover:bg-mainred hover:text-white transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlight({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      className="group flex items-start gap-4"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      whileHover={{ x: 4 }} // desktops
      whileTap={{ x: 2, scale: 0.99 }} // mobile press
    >
      <motion.span
        className="mt-1"
        whileHover={{ x: 6 }}
        whileTap={{ x: 3 }}
        transition={{ duration: 0.18 }}
      >
        <ChevronRight
          className="w-6 h-6 flex-shrink-0 text-white"
          strokeWidth={3}
        />
      </motion.span>

      <div>
        <h3 className="font-title text-white text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-white/90 leading-6">{text}</p>
      </div>
    </motion.div>
  );
}
