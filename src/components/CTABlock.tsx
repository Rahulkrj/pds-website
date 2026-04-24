"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "918090316099";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'd like to book an appointment for a custom outfit."
);

interface CTABlockProps {
  heading?: string;
  subtext?: string;
  dark?: boolean;
}

export default function CTABlock({
  heading = "Ready to design your dream outfit?",
  subtext = "Book a free consultation with our designer — instant reply on WhatsApp.",
  dark = false,
}: CTABlockProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className={`py-14 md:py-16 ${dark ? "bg-gradient-to-r from-[#1a1008] to-[#2d1f0e]" : "bg-[#fdf8f3]"}`}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className={`font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold mb-3 leading-snug ${
              dark ? "text-white" : "text-[#2c2c2c]"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`font-[var(--font-lato)] text-sm leading-relaxed mb-7 ${
              dark ? "text-white/60" : "text-[#7a7370]"
            }`}
          >
            {subtext}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-7 py-3.5 rounded-full hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageCircle size={16} />
              WhatsApp Now
            </a>
            <a
              href="tel:+918090316099"
              className={`inline-flex items-center justify-center gap-2 font-[var(--font-lato)] text-sm tracking-wider uppercase px-7 py-3.5 rounded-full hover:-translate-y-0.5 transition-all duration-300 ${
                dark
                  ? "border border-[#c9a84c]/50 text-[#e8c97a] hover:bg-[#c9a84c]/15 hover:border-[#c9a84c]"
                  : "border border-[#c9a84c] text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white"
              }`}
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
