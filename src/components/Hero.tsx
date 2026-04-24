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
          Best Boutique in{" "}
          <span className="gold-shimmer italic">New Ashok Nagar</span>
          <br />
          <span className="text-white">for Designer Dresses</span>
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
          Custom stitching, bridal wear &amp; designer outfits for{" "}
          <span className="text-[#e8c97a]">Delhi &amp; Noida customers</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={`https://wa.me/918090316099?text=${encodeURIComponent("Hi Pragya Designer Studio! I'd like to book an appointment for a custom outfit.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366] hover:bg-[#20BA5A] text-white font-[var(--font-lato)] font-bold tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 min-w-[240px] text-center"
          >
            <span className="flex items-center justify-center gap-2">
              💬 Book on WhatsApp
              <span className="text-[10px] normal-case tracking-normal font-normal opacity-90">(Instant Reply)</span>
            </span>
          </a>

          <a
            href="tel:+918090316099"
            className="group border border-[#c9a84c]/60 text-[#e8c97a] font-[var(--font-lato)] tracking-wider uppercase text-sm px-8 py-4 rounded-full hover:bg-[#c9a84c]/15 hover:border-[#c9a84c] hover:-translate-y-1 transition-all duration-300 min-w-[180px] text-center"
          >
            📞 Call Now
          </a>
        </motion.div>

        {/* Urgency text */}
        <motion.p
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-4 text-[#e8c97a]/80 text-xs font-[var(--font-lato)] tracking-wide"
        >
          ⚡ Limited appointments today — book your slot now
        </motion.p>

        {/* Trust badges */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3 mt-10"
        >
          {[
            { icon: "⭐", text: "5.0 Google Rating" },
            { icon: "👗", text: "100+ Happy Clients" },
            { icon: "📍", text: "Serving Delhi NCR" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white/80 text-xs font-[var(--font-lato)] px-3 py-1.5 rounded-full"
            >
              <span>{badge.icon}</span>
              {badge.text}
            </span>
          ))}
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
