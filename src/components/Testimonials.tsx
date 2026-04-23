"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Bride",
    review:
      "My bridal lehenga was absolutely stunning! Pragya understood exactly what I wanted and the stitching was flawless. I received so many compliments on my wedding day. Truly a dream come true!",
    rating: 5,
    initials: "PS",
    outfit: "Bridal Lehenga",
  },
  {
    name: "Meera Patel",
    role: "Regular Customer",
    review:
      "I've been coming here for over 3 years now. The quality of stitching is always top-notch and the designer is so patient and understanding. My custom salwar suit fits like a dream!",
    rating: 5,
    initials: "MP",
    outfit: "Custom Salwar Suit",
  },
  {
    name: "Ananya Verma",
    role: "Party Wear",
    review:
      "Got my party wear outfit stitched here and I was blown away by the attention to detail. The embroidery work was beyond beautiful. Highly recommend for any occasion!",
    rating: 5,
    initials: "AV",
    outfit: "Designer Party Wear",
  },
  {
    name: "Sunita Joshi",
    role: "Mother of the Bride",
    review:
      "We had our entire family's wedding outfits done here. Pragya handled everything so professionally. The fabrics, the stitching, the delivery — everything was perfect.",
    rating: 5,
    initials: "SJ",
    outfit: "Family Wedding Collection",
  },
  {
    name: "Kavya Reddy",
    role: "Corporate Professional",
    review:
      "I needed a formal saree blouse altered and it came out better than the original! Such skilled hands. I'll definitely be back for more custom work.",
    rating: 5,
    initials: "KR",
    outfit: "Saree Blouse Alteration",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#e8d5c4]"}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section
      id="reviews"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-b from-[#fdf8f3] to-[#f5ede0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
              Customer Love
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight">
            What Our Clients <span className="text-[#c9a84c] italic">Say</span>
          </h2>
        </motion.div>

        {/* Google Rating Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-14 bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.06)] max-w-2xl mx-auto border border-[#f0e0d4]"
        >
          {/* Google Rating */}
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-xl bg-[#4285F4] flex items-center justify-center flex-shrink-0 shadow-md">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                <path d="M1 1h22v22H1z" fill="none"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                <span className="font-[var(--font-playfair)] text-3xl font-bold text-[#2c2c2c]">5.0</span>
                <div className="flex ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#c9a84c] fill-[#c9a84c]" />
                  ))}
                </div>
              </div>
              <p className="text-[#7a7370] text-sm font-[var(--font-lato)]">Google Rating</p>
            </div>
          </div>

          <div className="w-px h-12 bg-[#e8d5c4] hidden sm:block" />

          <div className="text-center sm:text-left">
            <p className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c]">100+</p>
            <p className="text-[#7a7370] text-sm font-[var(--font-lato)]">Happy Customers</p>
          </div>

          <div className="w-px h-12 bg-[#e8d5c4] hidden sm:block" />

          <div className="text-center sm:text-left">
            <p className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c]">10+</p>
            <p className="text-[#7a7370] text-sm font-[var(--font-lato)]">Years of Trust</p>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_10px_50px_rgba(0,0,0,0.07)] border border-[#f0e0d4] relative"
          >
            {/* Large quote mark */}
            <Quote
              size={48}
              className="absolute top-6 right-8 text-[#c9a84c]/10 fill-[#c9a84c]/10"
            />

            {/* Stars */}
            <StarRating rating={testimonials[activeIndex].rating} />

            {/* Review text */}
            <p className="mt-5 text-[#4a4a4a] font-[var(--font-lato)] text-base md:text-lg leading-relaxed italic">
              &ldquo;{testimonials[activeIndex].review}&rdquo;
            </p>

            {/* Reviewer info */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a07830] flex items-center justify-center flex-shrink-0 shadow-md">
                <span className="text-white font-[var(--font-playfair)] font-bold text-sm">
                  {testimonials[activeIndex].initials}
                </span>
              </div>
              <div>
                <p className="font-[var(--font-playfair)] font-semibold text-[#2c2c2c]">
                  {testimonials[activeIndex].name}
                </p>
                <p className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-wide">
                  {testimonials[activeIndex].outfit}
                </p>
              </div>
              <div className="ml-auto">
                <span className="text-[10px] font-[var(--font-lato)] tracking-widest uppercase text-[#7a7370] bg-[#f5ede0] px-3 py-1 rounded-full">
                  Verified Customer
                </span>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#e8d5c4] flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white hover:border-[#c9a84c] transition-all duration-300"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "bg-[#c9a84c] w-6 h-2"
                      : "bg-[#e8d5c4] w-2 h-2 hover:bg-[#c9a84c]/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#e8d5c4] flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white hover:border-[#c9a84c] transition-all duration-300"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Mini reviews grid for desktop */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 mt-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              onClick={() => setActiveIndex(i)}
              className={`cursor-pointer bg-white rounded-xl p-5 border transition-all duration-300 ${
                activeIndex === i
                  ? "border-[#c9a84c] shadow-[0_4px_20px_rgba(201,168,76,0.15)]"
                  : "border-[#f0e0d4] hover:border-[#c9a84c]/50"
              }`}
            >
              <StarRating rating={t.rating} />
              <p className="mt-2 text-[#7a7370] text-xs font-[var(--font-lato)] leading-relaxed line-clamp-2">
                &ldquo;{t.review}&rdquo;
              </p>
              <p className="mt-3 font-[var(--font-playfair)] text-sm font-semibold text-[#2c2c2c]">
                — {t.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
