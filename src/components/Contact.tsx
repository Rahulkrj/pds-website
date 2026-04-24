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
      aria-label="Contact Pragya Designer Studio in New Ashok Nagar"
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

            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Design Your Dream Outfit{" "}
              <span className="gold-shimmer italic">with Experts</span>
            </h2>

            <p className="text-white/70 font-[var(--font-lato)] text-base leading-relaxed mb-4">
              Trusted by 100+ happy customers in <strong className="text-white/90">New Ashok Nagar &amp; nearby areas</strong> — Noida, Indirapuram, and East Delhi.
            </p>

            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[#e8c97a] text-sm">⭐⭐⭐⭐⭐</span>
              <span className="text-[#e8c97a] text-xs font-[var(--font-lato)] tracking-wide">5.0 Google Rating · 100+ Reviews</span>
            </div>

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
            {/* Testimonial near form */}
            <div className="bg-white/8 border border-white/10 rounded-xl p-4 mb-4">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#c9a84c] text-xs">★</span>
                ))}
              </div>
              <p className="text-white/80 font-[var(--font-lato)] text-sm leading-relaxed italic">
                &ldquo;Pragya stitched my bridal lehenga and I got so many compliments. The fitting was absolutely perfect — better than any boutique in Noida.&rdquo;
              </p>
              <p className="text-[#e8c97a] text-xs font-[var(--font-lato)] mt-2">— Priya S., Noida Sector 18</p>
            </div>

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
                  <p className="flex items-center gap-1.5 text-xs font-[var(--font-lato)] text-[#c9a84c] mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] animate-pulse flex-shrink-0" />
                    Limited appointment slots available — book your slot today
                  </p>
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

        {/* Call Now + Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="mt-16 grid md:grid-cols-2 gap-8 items-start"
        >
          {/* Call Now CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="font-[var(--font-playfair)] text-xl font-bold text-white">
              Prefer to call us directly?
            </h3>
            <p className="text-white/60 font-[var(--font-lato)] text-sm leading-relaxed">
              We&apos;re available Monday to Sunday, 10 AM – 10 PM at our studio
              in <strong className="text-white/80">New Ashok Nagar, New Delhi</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+918090316099"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1008] font-[var(--font-lato)] font-bold text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-[#f5ede0] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(255,255,255,0.2)] transition-all duration-300"
                aria-label="Call Pragya Designer Studio"
              >
                <Phone size={15} />
                Call Now: +91 80903 16099
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-[#20BA5A] hover:-translate-y-0.5 transition-all duration-300"
                aria-label="WhatsApp Pragya Designer Studio"
              >
                <MessageCircle size={15} />
                WhatsApp Us
              </a>
            </div>

            {/* NAP block for local SEO */}
            <address className="not-italic mt-2 text-white/50 font-[var(--font-lato)] text-xs leading-relaxed">
              <strong className="text-white/70 block mb-1">Pragya Designer Studio</strong>
              Block A, 397, Street No 9, Near S N School,<br />
              New Ashok Nagar, New Delhi – 110096<br />
              <a href="tel:+918090316099" className="hover:text-[#e8c97a] transition-colors">
                +91 80903 16099
              </a>
            </address>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
            <iframe
              title="Pragya Designer Studio location on Google Maps — New Ashok Nagar, New Delhi"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d258.9896234317759!2d77.30841660883257!3d28.590992716861614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce595766dd609%3A0x96182be5cd9f638a!2sPragya%20Designer%20Studio!5e0!3m2!1sen!2sus!4v1777041999874!5m2!1sen!2sus"
              width="100%"
              height="280"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              aria-label="Map showing Pragya Designer Studio in New Ashok Nagar, New Delhi"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
