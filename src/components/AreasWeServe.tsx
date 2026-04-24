import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  {
    city: "Noida",
    href: "/boutique-in-noida",
    tagline: "~15 min via DND Flyover",
    description:
      "Customers from Noida Sector 12, 18, 62, and beyond regularly visit our studio. The DND Flyover makes it a quick, easy trip.",
  },
  {
    city: "Indirapuram",
    href: "/boutique-in-indirapuram",
    tagline: "~20 min from Vaibhav Khand",
    description:
      "Families from Ahinsa Khand, Vaibhav Khand, and Shipra Sun City visit us for custom stitching and bridal wear they can trust.",
  },
  {
    city: "East Delhi",
    href: "/boutique-in-east-delhi",
    tagline: "Right in the heart of East Delhi",
    description:
      "Located in New Ashok Nagar, we're moments away from Patparganj, Mayur Vihar, Laxmi Nagar, and Preet Vihar.",
  },
];

export default function AreasWeServe() {
  return (
    <section id="areas-we-serve" className="py-16 md:py-20 bg-[#f5ede0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
              Across Delhi NCR
            </span>
            <div className="w-8 h-px bg-[#c9a84c]" />
          </div>
          <h2 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight">
            We Serve Customers From{" "}
            <span className="text-[#c9a84c] italic">All Over NCR</span>
          </h2>
          <p className="mt-3 text-[#7a7370] font-[var(--font-lato)] text-sm max-w-lg mx-auto leading-relaxed">
            Our boutique in New Ashok Nagar, New Delhi is easily accessible from Noida, Indirapuram,
            and all parts of East Delhi.
          </p>
        </div>

        {/* Location cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {areas.map((area) => (
            <Link
              key={area.city}
              href={area.href}
              className="group bg-white rounded-2xl p-6 border border-[#e8d5c4] hover:border-[#c9a84c] hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] transition-all duration-300 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#fdf8f3] flex items-center justify-center flex-shrink-0 group-hover:bg-[#c9a84c]/10 transition-colors duration-300 mt-0.5">
                <MapPin size={22} className="text-[#c9a84c]" />
              </div>
              <div>
                <h3 className="font-[var(--font-playfair)] font-bold text-[#2c2c2c] text-xl group-hover:text-[#a07830] transition-colors duration-200">
                  {area.city}
                </h3>
                <p className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-wide mb-2">
                  {area.tagline}
                </p>
                <p className="text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed">
                  {area.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[#c9a84c] text-xs font-[var(--font-lato)] font-semibold tracking-wide uppercase group-hover:gap-2.5 transition-all duration-200">
                  Learn more
                  <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
