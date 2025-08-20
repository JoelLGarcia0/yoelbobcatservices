"use client";

import { useMemo, useState } from "react";
import {
  motion,
  AnimatePresence,
  type Variants,
  useReducedMotion,
} from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { googleReviews } from "@/data/google-reviews";

const card: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.25, ease: [0.2, 0.7, 0.2, 1] },
  }),
};

const VISIBLE = 3;

export default function Testimonials() {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const total = googleReviews.length;
  const doubled = useMemo(() => [...googleReviews, ...googleReviews], []);

  const visibleItems = useMemo(() => {
    const start = index % total;
    return doubled.slice(start, start + VISIBLE).map((r, i) => ({
      ...r,
      _key: `${start}-${i}-${r.author}`,
    }));
  }, [index, doubled, total]);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % total);
  };

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="mx-auto max-w-content px-6">
        {/* Heading with corner brackets */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative inline-block">
            <span
              aria-hidden
              className="absolute -left-7 -top-6 block h-8 w-8 border-t-8 border-l-8 border-mainred"
            />
            <span
              aria-hidden
              className="absolute -right-7 -bottom-6 block h-8 w-8 border-b-8 border-r-8 border-mainred"
            />
            <h2 className="font-title uppercase text-2xl md:text-3xl font-bold text-darktext">
              Reviews by Our Clients
            </h2>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <button
            aria-label="Previous"
            onClick={handlePrev}
            className=" bg-white p-2 ring-1 ring-black/5 hover:bg-gray-100"
          >
            <ChevronLeft className=" h-5 w-5" />
          </button>
          <button
            aria-label="Next"
            onClick={handleNext}
            className=" bg-white p-2 ring-1 ring-black/5 hover:bg-gray-100"
          >
            <ChevronRight className="  h-5 w-5" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" custom={direction}>
            {visibleItems.map((review) => (
              <motion.article
                key={review._key}
                variants={card}
                initial={shouldReduceMotion ? false : "enter"}
                animate={shouldReduceMotion ? false : "center"}
                exit={shouldReduceMotion ? { opacity: 0 } : "exit"}
                custom={direction}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18, ease: [0.2, 0.7, 0.2, 1] }}
                className=" bg-white p-6 shadow-sm "
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-darktext">{review.author}</p>
                  <Stars rating={review.rating} />
                </div>
                <p className="mt-3 text-graytext leading-relaxed line-clamp-6">
                  “{review.text}”
                </p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i < (rating ?? 5) ? "text-yellow-400" : "text-gray-300"
          }`}
          strokeWidth={2.5}
          fill={i < (rating ?? 5) ? "currentColor" : "none"}
        />
      ))}
    </div>
  );
}
