"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "918090316099";
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'd like to book an appointment for a custom outfit. Can you help me?"
);

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip / Quick message */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl rounded-br-sm shadow-[0_8px_30px_rgba(0,0,0,0.12)] p-4 max-w-[240px] border border-[#e8d5c4]"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 right-2 text-[#7a7370] hover:text-[#2c2c2c] transition-colors"
            >
              <X size={14} />
            </button>
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/pds-logo.png"
                alt="Pragya Designer Studio"
                width={32}
                height={32}
                className="h-8 w-8 object-contain rounded-md shrink-0"
              />
              <div>
                <p className="font-[var(--font-playfair)] text-xs font-semibold text-[#2c2c2c]">
                  Pragya Designer Studio
                </p>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span className="text-[10px] text-[#7a7370] font-[var(--font-lato)]">Online</span>
                </div>
              </div>
            </div>
            <p className="text-[#2c2c2c] text-xs font-[var(--font-lato)] leading-relaxed mb-3">
              Hi! 👋 Need help with a custom outfit? We&apos;re here to help you look stunning. Chat with us!
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-center bg-[#25D366] text-white text-xs font-[var(--font-lato)] tracking-wider uppercase py-2 rounded-lg hover:bg-[#20BA5A] transition-colors duration-200"
            >
              Start Chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setShowTooltip(!showTooltip)}
        className="whatsapp-pulse w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white fill-white" />

        {/* Notification dot */}
        {!showTooltip && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-[#c9a84c] rounded-full flex items-center justify-center"
          >
            <span className="text-white text-[9px] font-bold">1</span>
          </motion.span>
        )}
      </motion.button>
    </div>
  );
}
