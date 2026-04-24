"use client";

import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";
import { Heart, Award, Users, Scissors } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Award, value: "5★", label: "Google Rating" },
  { icon: Scissors, value: "500+", label: "Outfits Created" },
  { icon: Heart, value: "10+", label: "Years of Passion" },
];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-[#fdf8f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Visual */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            {/* Main image frame */}
            <div className="relative">
              {/* Decorative border frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#c9a84c]/30 rounded-2xl" />

              {/* Image placeholder with gradient */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#f5ede0] via-[#e8d5c4] to-[#d4b896] shadow-[0_20px_60px_rgba(201,168,76,0.2)]">
                {/* Placeholder visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
                  <div className="w-20 h-20 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
                    <Scissors size={36} className="text-[#c9a84c]" />
                  </div>
                  <p className="text-[#a07830] font-[var(--font-playfair)] italic text-center text-lg leading-relaxed">
                    &ldquo;Your photo will shine beautifully here&rdquo;
                  </p>
                  <span className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-widest uppercase">
                    Add boutique image
                  </span>
                </div>

                {/* Decorative pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(201,168,76,0.3) 20px, rgba(201,168,76,0.3) 21px)`,
                  }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#a07830] flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-white fill-white" />
                </div>
                <div>
                  <p className="font-[var(--font-playfair)] font-bold text-[#2c2c2c] text-sm">Crafted with Love</p>
                  <p className="text-[#7a7370] text-xs font-[var(--font-lato)]">Every stitch matters</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>

            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight mb-6">
              Where Fashion Meets{" "}
              <span className="text-[#c9a84c] italic">Artistry</span>
            </h2>

            <div className="space-y-4 text-[#7a7370] font-[var(--font-lato)] leading-relaxed text-base">
              <p>
                Welcome to <strong className="text-[#2c2c2c]">Pragya Designer Studio</strong> — a
                boutique in <strong className="text-[#2c2c2c]">New Ashok Nagar, New Delhi</strong>{" "}
                born from a passion for fashion and a deep respect for craftsmanship. We believe
                that every woman deserves to wear something that feels uniquely hers.
              </p>
              <p>
                From the very first consultation to the final fitting, we pour our heart into
                every creation. Whether it&apos;s a stunning bridal lehenga, an elegant anarkali,
                or a contemporary fusion outfit — we tailor it to celebrate <em>you</em>.
              </p>
              <p>
                With over a decade of experience, our designer personally attends to every client
                near New Ashok Nagar, ensuring the highest quality fabrics, impeccable stitching,
                and a fit that makes you feel confident and beautiful.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-[#e8d5c4] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f5ede0] to-[#e8d5c4] flex items-center justify-center">
                <span className="font-[var(--font-playfair)] font-bold text-[#c9a84c] text-xl">P</span>
              </div>
              <div>
                <p className="font-[var(--font-playfair)] font-semibold text-[#2c2c2c] italic text-lg">Pragya</p>
                <p className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-wider">
                  Founder & Head Designer
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#f5ede0] group-hover:bg-[#c9a84c]/15 transition-colors duration-300 mb-3">
                <stat.icon size={24} className="text-[#c9a84c]" />
              </div>
              <p className="font-[var(--font-playfair)] text-3xl font-bold text-[#2c2c2c]">{stat.value}</p>
              <p className="text-[#7a7370] text-sm font-[var(--font-lato)] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
