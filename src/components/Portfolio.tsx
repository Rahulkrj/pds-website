"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, ZoomIn } from "lucide-react";

const categories = ["All", "Bridal", "Ethnic Wear", "Modern", "Custom Stitching"];

const portfolioItems = [
  { id: 1,  category: "Bridal",           label: "Bridal Lehenga",     alt: "Custom bridal lehenga stitched at Pragya Designer Studio boutique, New Ashok Nagar, New Delhi",            tall: true,  src: "/images/portfolio/potrate/Bridal/bridal-1.jpg"  },
  { id: 2,  category: "Ethnic Wear",      label: "Designer Anarkali",  alt: "Handcrafted designer anarkali suit stitched at ladies boutique in New Ashok Nagar, Delhi",                tall: false, src: "/images/portfolio/square/Ethnic/ethnic-1.png"   },
  { id: 3,  category: "Modern",           label: "Indo-Western Gown",  alt: "Indo-western fusion gown custom stitched at Pragya Designer Studio, New Delhi",                          tall: false, src: "/images/portfolio/square/Modern/modern-1.png"   },
  { id: 4,  category: "Custom Stitching", label: "Custom Suit",        alt: "Custom stitched salwar suit crafted at ladies boutique in New Ashok Nagar, New Delhi",                    tall: true,  src: "/images/portfolio/potrate/Custom/custom-1.jpg"  },
  { id: 5,  category: "Bridal",           label: "Bridal Saree",       alt: "Bridal saree with custom blouse stitched at Pragya Designer Studio boutique, New Delhi",                  tall: false, src: "/images/portfolio/square/Bridal/bridal-1.png"   },
  { id: 6,  category: "Ethnic Wear",      label: "Embroidered Kurti",  alt: "Embroidered designer kurti custom stitched at boutique in New Ashok Nagar, Delhi",                        tall: true,  src: "/images/portfolio/potrate/Ethnic/ethnic-1.jpg"  },
  { id: 7,  category: "Modern",           label: "Fusion Dress",       alt: "Designer fusion dress stitched at Pragya Designer Studio, ladies tailor New Ashok Nagar",                 tall: false, src: "/images/portfolio/square/Modern/modern-2.png"   },
  { id: 8,  category: "Custom Stitching", label: "Party Wear",         alt: "Designer party wear outfit custom stitched at boutique in New Ashok Nagar, New Delhi",                    tall: false, src: "/images/portfolio/square/Custom/custom-1.png"   },
  { id: 9,  category: "Bridal",           label: "Bridal Lehenga",     alt: "Heavy embroidered bridal lehenga stitched at Pragya Designer Studio, New Ashok Nagar",                   tall: true,  src: "/images/portfolio/potrate/Bridal/bridal-2.jpg"  },
  { id: 10, category: "Ethnic Wear",      label: "Ghagra Choli",       alt: "Traditional ghagra choli custom stitched at ladies boutique, New Ashok Nagar, New Delhi",                 tall: false, src: "/images/portfolio/square/Ethnic/ethnic-2.png"   },
  { id: 11, category: "Modern",           label: "Designer Coord Set", alt: "Trendy designer coord set crafted at Pragya Designer Studio boutique, New Ashok Nagar",                   tall: true,  src: "/images/portfolio/potrate/Modern/modern-1.jpg"  },
  { id: 12, category: "Custom Stitching", label: "Formal Wear",        alt: "Custom formal wear outfit stitched at ladies tailor boutique, New Ashok Nagar, New Delhi",                tall: false, src: "/images/portfolio/square/Custom/custom-2.png"   },
];

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-20 md:py-28 bg-[#fdf8f3] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
              Our Work
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight">
            Our <span className="text-[#c9a84c] italic">Portfolio</span>
          </h2>
          <p className="mt-4 text-[#7a7370] font-[var(--font-lato)] max-w-xl mx-auto text-base leading-relaxed">
            Each piece in our collection is a labor of love — meticulously crafted to make every
            woman feel extraordinary.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-[var(--font-lato)] tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#c9a84c] text-white border-[#c9a84c] shadow-[0_4px_15px_rgba(201,168,76,0.3)]"
                  : "bg-white text-[#7a7370] border-[#e8d5c4] hover:border-[#c9a84c] hover:text-[#c9a84c]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="masonry-grid"
        >
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="masonry-item"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative rounded-xl overflow-hidden group cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_rgba(201,168,76,0.2)] transition-shadow duration-400 ${
                  item.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                {/* Portfolio image */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-[#1a1008]/80 via-[#1a1008]/30 to-transparent transition-opacity duration-400 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Hover content */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-end p-4 transition-all duration-400 ${
                    hoveredId === item.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <ZoomIn size={28} className="text-[#e8c97a] mb-2" />
                  <p className="text-white font-[var(--font-playfair)] font-semibold text-sm text-center">
                    {item.label}
                  </p>
                  <span className="text-[#e8c97a] text-[10px] font-[var(--font-lato)] tracking-widest uppercase mt-1">
                    {item.category}
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`text-[10px] font-[var(--font-lato)] tracking-wider uppercase bg-white/90 text-[#c9a84c] px-2 py-0.5 rounded-full transition-opacity duration-300 ${
                      hoveredId === item.id ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View more on Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/pragyaa.designer_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:-translate-y-1 transition-all duration-300"
          >
            <ExternalLink size={16} />
            See More on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
