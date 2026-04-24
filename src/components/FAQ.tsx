"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you provide bridal stitching at Pragya Designer Studio?",
    answer:
      "Yes, we specialize in bridal stitching including lehengas, bridal sarees, and suits with custom embroidery and embellishments. We offer full bridal consultation and trial fittings at our studio in New Ashok Nagar, New Delhi.",
  },
  {
    question: "What is the price range for custom outfits?",
    answer:
      "Our pricing varies based on design complexity and fabric. Custom stitching starts from ₹500, while bridal outfits range from ₹5,000 to ₹50,000+. Contact us on WhatsApp at +91 80903 16099 for a personalized quote.",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling us at +91 80903 16099, messaging us on WhatsApp, or filling out the contact form on our website. We are available Monday to Sunday, 10 AM to 10 PM.",
  },
  {
    question: "Where is Pragya Designer Studio located?",
    answer:
      "We are located at Block A, 397, Street No 9, Near S N School, New Ashok Nagar, New Delhi – 110096. You can easily find us on Google Maps.",
  },
  {
    question: "How long does it take to stitch a custom outfit?",
    answer:
      "Standard custom outfits typically take 7–14 days. Bridal wear may take 3–6 weeks depending on the embroidery and complexity. We always confirm the delivery timeline during your consultation.",
  },
  {
    question: "Do you do alterations and repairs?",
    answer:
      "Yes, we handle all types of alterations — resizing, reshaping, hemming, and repairs — for all kinds of outfits. Turnaround time for simple alterations is usually 2–3 days.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      ref={ref}
      aria-label="Frequently Asked Questions — Pragya Designer Studio New Ashok Nagar"
      className="py-20 md:py-28 bg-[#fdf8f3] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
              FAQs
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight">
            Frequently Asked{" "}
            <span className="text-[#c9a84c] italic">Questions</span>
          </h2>
          <p className="mt-4 text-[#7a7370] font-[var(--font-lato)] text-base leading-relaxed">
            Everything you need to know about our boutique in New Ashok Nagar,
            New Delhi.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="border border-[#e8d5c4] rounded-2xl overflow-hidden bg-white"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
              >
                <h3 className="font-[var(--font-lato)] font-semibold text-[#2c2c2c] text-sm leading-relaxed group-hover:text-[#a07830] transition-colors duration-200">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={18}
                  className={`text-[#c9a84c] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed border-t border-[#f5ede0] pt-4">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-10 text-[#7a7370] font-[var(--font-lato)] text-sm"
        >
          Still have questions?{" "}
          <a
            href="https://wa.me/918090316099"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9a84c] hover:text-[#a07830] font-semibold transition-colors duration-200"
          >
            Chat with us on WhatsApp
          </a>
        </motion.p>
      </div>
    </section>
  );
}
