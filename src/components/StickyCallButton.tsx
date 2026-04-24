"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <motion.a
      href="tel:+918090316099"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 left-6 z-50 md:hidden flex items-center gap-2 bg-white text-[#1a1008] font-[var(--font-lato)] text-xs font-bold tracking-wider uppercase px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300 border border-[#e8d5c4]"
      aria-label="Call Pragya Designer Studio"
    >
      <Phone size={15} className="text-[#c9a84c]" />
      Call Now
    </motion.a>
  );
}
