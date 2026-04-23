"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, duration: 0.8, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background: layered gradients for a rich fabric texture feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1008] via-[#2d1f0e] to-[#1a1008]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,168,76,0.18)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(201,168,76,0.12)_0%,transparent_55%)]" />

      {/* Decorative fabric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(201,168,76,0.5) 10px,
            rgba(201,168,76,0.5) 11px
          ), repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(201,168,76,0.5) 10px,
            rgba(201,168,76,0.5) 11px
          )`,
        }}
      />

      {/* Floating decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#c9a84c]/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#c9a84c]/5 blur-3xl animate-pulse [animation-delay:1.5s]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-8"
        >
          <Sparkles size={14} className="text-[#e8c97a]" />
          <span className="text-[#e8c97a] text-xs font-[var(--font-lato)] tracking-[0.25em] uppercase">
            Premium Boutique Experience
          </span>
          <Sparkles size={14} className="text-[#e8c97a]" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-6"
        >
          Custom Designs That{" "}
          <span className="gold-shimmer italic">Reflect</span>
          <br />
          <span className="text-white">Your Style</span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="w-24 h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent mb-6"
        />

        {/* Subtext */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-[var(--font-lato)] text-white/75 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-10"
        >
          Tailored outfits crafted with precision and passion — from bridal
          lehengas to elegant everyday wear, every piece tells your story.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <button
            onClick={() => scrollToSection("#portfolio")}
            className="group bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white font-[var(--font-lato)] font-700 tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:shadow-[0_8px_30px_rgba(201,168,76,0.5)] hover:-translate-y-1 transition-all duration-300 min-w-[180px]"
          >
            <span className="flex items-center justify-center gap-2">
              View Collection
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="group border border-[#c9a84c]/60 text-[#e8c97a] font-[var(--font-lato)] tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-[#c9a84c]/15 hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300 min-w-[180px]"
          >
            Book Appointment
          </button>
        </motion.div>

        {/* Trust badge row */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-6 mt-12 text-white/50 text-xs font-[var(--font-lato)] tracking-widest uppercase"
        >
          {["Custom Stitching", "Bridal Wear", "100+ Happy Clients", "Designer Consultation"].map(
            (item, i) => (
              <span key={item} className="flex items-center gap-2">
                {i > 0 && <span className="text-[#c9a84c]/40">·</span>}
                <span className="hover:text-[#e8c97a] transition-colors duration-200 cursor-default">
                  {item}
                </span>
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#c9a84c]/60 hover:text-[#c9a84c] transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
}
