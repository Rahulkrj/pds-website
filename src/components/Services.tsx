"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Scissors, Crown, RefreshCw, Palette } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Custom Stitching",
    description:
      "We take your fabric and your vision to craft outfits that fit perfectly. Every stitch is done with care and attention to your unique measurements.",
    features: ["Personalized measurements", "Fabric of your choice", "Multiple fittings"],
    accent: "from-[#c9a84c]/20 to-[#f5ede0]",
    iconBg: "bg-[#c9a84c]/15",
  },
  {
    icon: Crown,
    title: "Bridal Wear",
    description:
      "Your wedding day deserves the most beautiful outfit. We design dream lehengas, sarees, and bridal suits that make you the star of your special day.",
    features: ["Bridal consultation", "Embroidery & embellishments", "Trial fittings included"],
    accent: "from-[#e8d5c4] to-[#f5ede0]",
    iconBg: "bg-[#c9a84c]/15",
    featured: true,
  },
  {
    icon: RefreshCw,
    title: "Alterations & Repairs",
    description:
      "Give your favorite outfits a new life. Our skilled tailors handle all types of alterations — from resizing to reshaping — with expert precision.",
    features: ["Quick turnaround", "All outfit types", "Quality guaranteed"],
    accent: "from-[#c9a84c]/20 to-[#f5ede0]",
    iconBg: "bg-[#c9a84c]/15",
  },
  {
    icon: Palette,
    title: "Designer Consultation",
    description:
      "Not sure what to wear? Our designer helps you choose the right style, fabric, and color for any occasion — from weddings to daily wear.",
    features: ["Style guidance", "Trend advice", "Fabric selection"],
    accent: "from-[#e8d5c4] to-[#f5ede0]",
    iconBg: "bg-[#c9a84c]/15",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-b from-[#f5ede0] to-[#fdf8f3] overflow-hidden"
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
              What We Offer
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight">
            Our <span className="text-[#c9a84c] italic">Services</span>
          </h2>
          <p className="mt-4 text-[#7a7370] font-[var(--font-lato)] max-w-xl mx-auto text-base leading-relaxed">
            From bridal masterpieces to everyday elegance, we bring your fashion dreams to life
            with skill and passion — right here in New Ashok Nagar, New Delhi.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: "easeOut" }}
              className={`relative group rounded-2xl p-6 bg-gradient-to-b ${service.accent} border border-white hover:border-[#c9a84c]/30 hover:shadow-[0_10px_40px_rgba(201,168,76,0.15)] transition-all duration-400 cursor-default ${
                service.featured ? "ring-2 ring-[#c9a84c]/30 shadow-[0_8px_30px_rgba(201,168,76,0.15)]" : ""
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white text-[10px] font-[var(--font-lato)] tracking-widest uppercase px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg} group-hover:scale-110 transition-transform duration-300 mb-5`}
              >
                <service.icon size={26} className="text-[#c9a84c]" />
              </div>

              {/* Title */}
              <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#2c2c2c] mb-3 group-hover:text-[#a07830] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-[#7a7370] font-[var(--font-lato)]"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#c9a84c] text-[8px]">✓</span>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover bottom line */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-12"
        >
          <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-4">
            Not sure which service you need?
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 text-[#c9a84c] border border-[#c9a84c] font-[var(--font-lato)] text-sm tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
          >
            Talk to Our Designer
          </button>
        </motion.div>
      </div>
    </section>
  );
}
