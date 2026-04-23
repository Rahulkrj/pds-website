"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";

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

const posts = [
  { id: 1, src: "/images/portfolio/square/Bridal/bridal-1.png",  likes: 142, comments: 18, caption: "Bridal lehenga ✨",         postUrl: "https://www.instagram.com/p/DXeD55YEuz0/" },
  { id: 2, src: "/images/portfolio/square/Ethnic/ethnic-1.png",  likes: 98,  comments: 12, caption: "Custom anarkali 💕",       postUrl: "https://www.instagram.com/p/DXOd6iikly2/" },
  { id: 3, src: "/images/portfolio/square/Modern/modern-1.png",  likes: 215, comments: 31, caption: "New collection 🌸",        postUrl: "https://www.instagram.com/p/DXJXaokksL4/" },
  { id: 4, src: "/images/portfolio/square/Custom/custom-1.png",  likes: 167, comments: 22, caption: "Wedding season ready! 👰", postUrl: "https://www.instagram.com/p/DW59PWMkrFF/" },
  { id: 5, src: "/images/portfolio/square/Bridal/bridal-2.png",  likes: 189, comments: 27, caption: "Embroidery love 🧵",       postUrl: "https://www.instagram.com/p/DXG1G3kEv5O/" },
  { id: 6, src: "/images/portfolio/square/Ethnic/ethnic-2.png",  likes: 134, comments: 15, caption: "Custom stitching ✂️",     postUrl: "https://www.instagram.com/pragyaa.designer_studio/" },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="instagram"
      ref={ref}
      className="py-20 md:py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Follow Our Journey
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] flex items-center justify-center shadow-md">
              <InstagramIcon size={20} className="text-white" />
            </div>
            <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c]">
              Instagram
            </h2>
          </div>
          <a
            href="https://www.instagram.com/pragyaa.designer_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#c9a84c] hover:text-[#a07830] font-[var(--font-lato)] text-sm transition-colors duration-200"
          >
            @pragyaa.designer_studio
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {posts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative group aspect-square rounded-xl overflow-hidden block"
            >
              {/* Real image */}
              <Image
                src={post.src}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex items-center gap-1 text-sm font-[var(--font-lato)]">
                    <Heart size={14} className="fill-white" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-sm font-[var(--font-lato)]">
                    <MessageCircle size={14} className="fill-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-white/80 text-[10px] font-[var(--font-lato)] text-center px-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/pragyaa.designer_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[#e8d5c4] text-[#2c2c2c] font-[var(--font-lato)] text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300 group"
          >
            <InstagramIcon size={16} className="group-hover:text-[#c9a84c]" />
            Follow us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
