"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(201,168,76,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-3 group"
          >
            <Image
              src="/images/pds-logo.png"
              alt="Pragya Designer Studio"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className={`font-[var(--font-playfair)] font-bold text-base tracking-wide transition-colors duration-300 ${scrolled ? "text-[#2c2c2c]" : "text-white"}`}>
                Pragya
              </span>
              <span className={`text-[10px] tracking-[0.2em] uppercase font-[var(--font-lato)] transition-colors duration-300 ${scrolled ? "text-[#c9a84c]" : "text-[#e8c97a]"}`}>
                Designer Studio
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`text-sm font-[var(--font-lato)] tracking-wider uppercase transition-colors duration-300 relative group ${
                  scrolled ? "text-[#2c2c2c] hover:text-[#c9a84c]" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#c9a84c] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white text-sm font-[var(--font-lato)] tracking-wider uppercase px-5 py-2.5 rounded-full hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${scrolled ? "text-[#2c2c2c]" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-[#e8d5c4] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-[#2c2c2c] font-[var(--font-lato)] text-sm tracking-wider uppercase py-2 border-b border-[#f5ede0] hover:text-[#c9a84c] transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
                className="mt-2 bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white text-sm font-[var(--font-lato)] tracking-wider uppercase px-5 py-3 rounded-full text-center hover:shadow-[0_4px_20px_rgba(201,168,76,0.4)] transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
