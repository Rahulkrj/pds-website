"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, ArrowUp, Phone, MapPin, Link2 } from "lucide-react";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61581803115095";
const BIO_URL = "https://inapp.app/pds";
const WHATSAPP_NUMBER = "918090316099";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'd like to know more about your services."
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom Stitching",
  "Bridal Wear",
  "Alterations & Repairs",
  "Designer Consultation",
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#120c04] text-white overflow-hidden">
      {/* Top decorative line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />

      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            rgba(201,168,76,1) 20px,
            rgba(201,168,76,1) 21px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/pds-logo.png"
                alt="Pragya Designer Studio"
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-lg shadow-md"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-[var(--font-playfair)] font-bold text-base tracking-wide text-white">
                  Pragya
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase font-[var(--font-lato)] text-[#c9a84c]">
                  Designer Studio
                </span>
              </div>
            </div>

            <p className="text-white/55 font-[var(--font-lato)] text-sm leading-relaxed mb-6">
              Crafting custom outfits with love, precision, and passion. Every piece is uniquely
              yours.
            </p>

            {/* Social */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/pragyaa.designer_studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} className="text-white" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} className="text-white" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="WhatsApp"
              >
                <Phone size={18} className="text-white" />
              </a>
              <a
                href={BIO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#c9a84c] flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-md"
                aria-label="Link in Bio"
              >
                <Link2 size={18} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-[var(--font-playfair)] text-sm font-semibold text-[#c9a84c] tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/55 font-[var(--font-lato)] text-sm hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#c9a84c] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-[var(--font-playfair)] text-sm font-semibold text-[#c9a84c] tracking-wider uppercase mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); handleNavClick("#services"); }}
                    className="text-white/55 font-[var(--font-lato)] text-sm hover:text-[#c9a84c] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-[#c9a84c] transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[var(--font-playfair)] text-sm font-semibold text-[#c9a84c] tracking-wider uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918090316099"
                className="flex items-start gap-2.5 text-white/55 hover:text-[#c9a84c] transition-colors duration-200 group"
              >
                <Phone size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="font-[var(--font-lato)] text-sm">+91 80903 16099</span>
              </a>
              <a
                href="https://maps.app.goo.gl/LptbRN3h596Yzk5f6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/55 hover:text-[#c9a84c] transition-colors duration-200"
              >
                <MapPin size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                <span className="font-[var(--font-lato)] text-sm">Block A, 397, Street No 9, Near S N School, New Ashok Nagar, New Delhi – 110096</span>
              </a>
              <div className="flex items-start gap-2.5">
                <span className="text-[#c9a84c] text-xs mt-1">⏰</span>
                <div>
                  <p className="text-white/55 font-[var(--font-lato)] text-sm">Mon – Sun</p>
                  <p className="text-white/40 font-[var(--font-lato)] text-xs">10:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 font-[var(--font-lato)] text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Pragya Designer Studio. All rights reserved. Made with{" "}
            <Heart size={11} className="inline text-[#c9a84c] fill-[#c9a84c]" /> for fashion.
          </p>

          <p className="text-white/35 font-[var(--font-lato)] text-xs italic">
            &ldquo;Wear your confidence, stitch your story.&rdquo;
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-white hover:border-[#c9a84c] transition-all duration-300 flex-shrink-0"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
