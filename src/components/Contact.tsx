"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Calendar } from "lucide-react";

const PHONE = "+91 80903 16099";
const WHATSAPP_NUMBER = "918090316099";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'd like to book an appointment for a custom outfit."
);

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: PHONE,
    sub: "Mon–Sun, 10 AM – 10 PM",
    href: `tel:${PHONE}`,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    sub: "Quick replies guaranteed",
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Block A, 397, Street No 9, Near S N School",
    sub: "New Ashok Nagar, New Delhi – 110096",
    href: "https://maps.app.goo.gl/LptbRN3h596Yzk5f6",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sun",
    sub: "10:00 AM – 10:00 PM",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = [
      "Hi Pragya Designer Studio! 🙏 I'd like to book an appointment.",
      "",
      `👤 Name: ${name || "—"}`,
      `📞 Phone: ${phone || "—"}`,
      `✂️ Service: ${service || "—"}`,
      `💬 Message: ${message || "—"}`,
    ].join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1008] via-[#2d1f0e] to-[#1a1008]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.10)_0%,transparent_55%)]" />

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 15px,
            rgba(201,168,76,1) 15px,
            rgba(201,168,76,1) 16px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#e8c97a] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>

            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Ready to Create Your{" "}
              <span className="gold-shimmer italic">Dream Outfit?</span>
            </h2>

            <p className="text-white/70 font-[var(--font-lato)] text-base leading-relaxed mb-10">
              We&apos;d love to hear from you. Book a consultation, ask about our services, or
              simply say hello — we&apos;re always happy to help you look and feel your best.
            </p>

            {/* Contact info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#c9a84c]/40 rounded-xl p-4 transition-all duration-300 group h-full"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/30 transition-colors duration-300">
                        <item.icon size={18} className="text-[#e8c97a]" />
                      </div>
                      <div>
                        <p className="text-[#e8c97a] text-[10px] font-[var(--font-lato)] tracking-widest uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-[var(--font-lato)] font-medium">
                          {item.value}
                        </p>
                        <p className="text-white/50 text-xs font-[var(--font-lato)] mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4 h-full">
                      <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon size={18} className="text-[#e8c97a]" />
                      </div>
                      <div>
                        <p className="text-[#e8c97a] text-[10px] font-[var(--font-lato)] tracking-widest uppercase mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-[var(--font-lato)] font-medium">
                          {item.value}
                        </p>
                        <p className="text-white/50 text-xs font-[var(--font-lato)] mt-0.5">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-[#fdf8f3] rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={20} className="text-[#c9a84c]" />
                <h3 className="font-[var(--font-playfair)] text-xl font-bold text-[#2c2c2c]">
                  Book an Appointment
                </h3>
              </div>
              <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-8 leading-relaxed">
                Tell us about your dream outfit and we&apos;ll get back to you within 24 hours to
                confirm your booking.
              </p>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleWhatsApp(); }}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-wider uppercase block mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-[#e8d5c4] rounded-xl px-4 py-3 text-sm font-[var(--font-lato)] text-[#2c2c2c] placeholder:text-[#c4b8a8] focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-200 bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-wider uppercase block mb-1.5">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-[#e8d5c4] rounded-xl px-4 py-3 text-sm font-[var(--font-lato)] text-[#2c2c2c] placeholder:text-[#c4b8a8] focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-200 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-wider uppercase block mb-1.5">
                    Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full border border-[#e8d5c4] rounded-xl px-4 py-3 text-sm font-[var(--font-lato)] text-[#2c2c2c] focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-200 bg-white appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option>Custom Stitching</option>
                    <option>Bridal Wear</option>
                    <option>Alterations & Repairs</option>
                    <option>Designer Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="text-[#7a7370] text-xs font-[var(--font-lato)] tracking-wider uppercase block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your outfit requirements, occasion, and preferred date..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full border border-[#e8d5c4] rounded-xl px-4 py-3 text-sm font-[var(--font-lato)] text-[#2c2c2c] placeholder:text-[#c4b8a8] focus:outline-none focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition-all duration-200 bg-white resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition-all duration-300"
                  >
                    <MessageCircle size={15} />
                    Book via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
