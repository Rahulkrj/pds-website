"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Perfect Fitting Guarantee",
    desc: "We take precise measurements and offer multiple fittings until your outfit fits flawlessly — every single time.",
  },
  {
    title: "100+ Happy Customers",
    desc: "Trusted by over 100 satisfied clients from New Ashok Nagar, Noida, Indirapuram, and across Delhi NCR.",
  },
  {
    title: "Bridal Wear Specialist",
    desc: "From lehengas to sarees to bridal suits — we craft dream wedding outfits with expert embroidery and embellishment work.",
  },
  {
    title: "Personalized Design Consultation",
    desc: "Our designer sits with you to understand your vision, suggest styles, and help you choose the perfect fabric and design.",
  },
  {
    title: "Quick Turnaround Time",
    desc: "We respect your schedule. Committed delivery timelines with regular updates — no delays, no surprises.",
  },
  {
    title: "5.0 Google Rating",
    desc: "Our work speaks for itself — every client leaves happy, which is why we've maintained a perfect 5-star rating.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      ref={ref}
      className="py-20 md:py-28 bg-gradient-to-b from-[#fdf8f3] to-[#f5ede0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
              Our Promise
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight">
            Why Choose{" "}
            <span className="text-[#c9a84c] italic">Pragya Designer Studio?</span>
          </h2>
          <p className="mt-4 text-[#7a7370] font-[var(--font-lato)] max-w-xl mx-auto text-base leading-relaxed">
            We don&apos;t just stitch clothes — we craft outfits that fit you perfectly and make you feel extraordinary.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group flex gap-4 bg-white rounded-2xl p-6 border border-[#e8d5c4] hover:border-[#c9a84c]/50 hover:shadow-[0_8px_30px_rgba(201,168,76,0.12)] transition-all duration-300"
            >
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={22} className="text-[#c9a84c] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <h3 className="font-[var(--font-playfair)] font-bold text-[#2c2c2c] text-base mb-1.5 group-hover:text-[#a07830] transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
