import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Clock, ArrowRight, Star, CheckCircle } from "lucide-react";

const SITE_URL = "https://pdstudio.veniyara.com";
const WHATSAPP = "918090316099";
const WA_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'd like to book an appointment for a custom outfit."
);

export const metadata: Metadata = {
  title: "Best Boutique in East Delhi — Designer Dresses & Bridal Wear | Pragya Designer Studio",
  description:
    "Pragya Designer Studio is the best boutique in East Delhi — located in New Ashok Nagar, serving Patparganj, Mayur Vihar, Laxmi Nagar & nearby areas. Custom stitching & bridal wear.",
  keywords: [
    "boutique in East Delhi",
    "best boutique East Delhi",
    "designer boutique East Delhi",
    "bridal wear East Delhi",
    "custom stitching East Delhi",
    "ladies tailor East Delhi",
    "boutique Patparganj",
    "boutique Mayur Vihar",
    "boutique Laxmi Nagar",
    "Pragya Designer Studio East Delhi",
  ],
  alternates: {
    canonical: "/boutique-in-east-delhi",
  },
  openGraph: {
    title: "Best Boutique in East Delhi — Pragya Designer Studio | Bridal Wear & Custom Stitching",
    description:
      "The best boutique in East Delhi, located in New Ashok Nagar. Serving Patparganj, Mayur Vihar, Laxmi Nagar and all of East Delhi with custom stitching and bridal wear.",
    url: `${SITE_URL}/boutique-in-east-delhi`,
    locale: "en_IN",
    type: "website",
    siteName: "Pragya Designer Studio",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Boutique in East Delhi",
      item: `${SITE_URL}/boutique-in-east-delhi`,
    },
  ],
};

const localities = [
  "Patparganj",
  "Mayur Vihar Phase 1, 2 & 3",
  "Laxmi Nagar",
  "Preet Vihar",
  "Geeta Colony",
  "Pandav Nagar",
  "Mandawali",
  "Gandhi Nagar",
  "New Ashok Nagar",
  "Kondli",
];

const reviews = [
  {
    name: "Sunita Arora",
    location: "Laxmi Nagar, East Delhi",
    review:
      "I've been coming here for my entire wardrobe for years. The quality of stitching, the attention to detail, the personal service — there's no other boutique in East Delhi that comes close.",
  },
  {
    name: "Pooja Yadav",
    location: "Mayur Vihar Phase 2",
    review:
      "Got my daughter's wedding lehenga made here. Pragya was patient, creative, and delivered it perfectly on time. The entire family was amazed. Highly, highly recommend.",
  },
  {
    name: "Anita Sharma",
    location: "Patparganj, East Delhi",
    review:
      "Quick turnaround, honest pricing, and beautiful stitching. I've sent at least 10 friends here and they've all become regulars.",
  },
];

export default function BoutiqueInEastDelhiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4"
          aria-label="Breadcrumb"
        >
          <ol className="flex items-center gap-2 text-xs font-[var(--font-lato)] text-[#7a7370]">
            <li>
              <Link href="/" className="hover:text-[#c9a84c] transition-colors">
                Home
              </Link>
            </li>
            <li className="text-[#c9a84c]">/</li>
            <li className="text-[#2c2c2c]">Boutique in East Delhi</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1008] via-[#2d1f0e] to-[#1a1008]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(201,168,76,0.22)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={14} className="text-[#e8c97a]" />
              <span className="text-[#e8c97a] text-xs font-[var(--font-lato)] tracking-widest uppercase">
                New Ashok Nagar, East Delhi
              </span>
            </div>
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Best Boutique in East Delhi —{" "}
              <span className="text-[#e8c97a] italic">Custom Stitching & Bridal Wear</span>
            </h1>
            <p className="text-white/70 font-[var(--font-lato)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Located in the heart of East Delhi at New Ashok Nagar, Pragya Designer Studio has
              been crafting beautiful outfits for East Delhi families for over a decade. Custom
              stitching, bridal wear, and designer consultation — all under one roof.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-[#20BA5A] hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Appointment via WhatsApp
              </a>
              <a
                href="tel:+918090316099"
                className="inline-flex items-center justify-center gap-2 border border-[#c9a84c]/60 text-[#e8c97a] font-[var(--font-lato)] text-sm tracking-wider uppercase px-7 py-3.5 rounded-full hover:bg-[#c9a84c]/15 transition-all duration-300"
              >
                <Phone size={14} />
                Call Now
              </a>
            </div>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16 md:py-20 bg-[#fdf8f3]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Article */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl sm:text-3xl font-bold text-[#2c2c2c] mb-5">
                    East Delhi&apos;s Most Trusted Boutique
                  </h2>
                  <div className="space-y-4 text-[#7a7370] font-[var(--font-lato)] leading-relaxed text-base">
                    <p>
                      For over ten years,{" "}
                      <strong className="text-[#2c2c2c]">Pragya Designer Studio</strong> has been
                      a beloved name in East Delhi. Located at New Ashok Nagar — right in the heart
                      of the neighbourhood — we&apos;ve dressed brides, mothers, professionals, and
                      students from every corner of East Delhi.
                    </p>
                    <p>
                      What sets us apart isn&apos;t just the quality of stitching — though that
                      speaks for itself. It&apos;s the personal attention each client receives.
                      Every appointment begins with a genuine conversation about your style, your
                      occasion, and what you want to feel like when you wear the outfit.
                    </p>
                    <p>
                      We serve the entire East Delhi area including Patparganj, Mayur Vihar, Laxmi
                      Nagar, Preet Vihar, Geeta Colony, and beyond. If you can reach New Ashok
                      Nagar — by metro, auto, or car — we can create something beautiful for you.
                    </p>
                  </div>
                </div>

                {/* Areas served grid */}
                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    East Delhi Areas We Serve
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {localities.map((loc) => (
                      <div
                        key={loc}
                        className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 border border-[#e8d5c4]"
                      >
                        <CheckCircle size={13} className="text-[#c9a84c] flex-shrink-0" />
                        <span className="text-[#7a7370] font-[var(--font-lato)] text-xs">
                          {loc}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    What We Create
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Bridal Wear",
                        desc: "Lehengas, bridal sarees, sharara sets — crafted for your most important day with multiple fittings and personal attention.",
                      },
                      {
                        title: "Custom Stitching",
                        desc: "Salwar suits, anarkalis, kurtis, co-ords — stitched to your exact measurements using your fabric or ours.",
                      },
                      {
                        title: "Blouse Stitching",
                        desc: "From simple cotton blouses to heavily embroidered silk ones — our blouse stitching is some of the best in East Delhi.",
                      },
                      {
                        title: "Alterations",
                        desc: "Resizing, reshaping, hemming — we handle all types of alterations with a quick turnaround.",
                      },
                    ].map((s) => (
                      <div
                        key={s.title}
                        className="flex gap-3 p-4 bg-white rounded-xl border border-[#e8d5c4]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                        <div>
                          <p className="font-[var(--font-lato)] font-semibold text-[#2c2c2c] text-sm">
                            {s.title}
                          </p>
                          <p className="text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed mt-0.5">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[#7a7370] font-[var(--font-lato)]">
                    <Link href="/#portfolio" className="text-[#c9a84c] hover:underline font-semibold">
                      See our work in the portfolio →
                    </Link>
                  </p>
                </div>

                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    What East Delhi Customers Say
                  </h2>
                  <div className="space-y-4">
                    {reviews.map((r) => (
                      <div key={r.name} className="bg-white rounded-xl p-5 border border-[#e8d5c4]">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className="text-[#c9a84c] fill-[#c9a84c]" />
                          ))}
                        </div>
                        <p className="text-[#4a4a4a] font-[var(--font-lato)] text-sm leading-relaxed italic mb-3">
                          &ldquo;{r.review}&rdquo;
                        </p>
                        <p className="font-[var(--font-playfair)] font-semibold text-[#2c2c2c] text-sm">
                          {r.name}
                        </p>
                        <p className="text-[#c9a84c] text-xs font-[var(--font-lato)]">
                          {r.location}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-5">
                <div className="bg-white rounded-2xl p-6 border border-[#e8d5c4] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <h3 className="font-[var(--font-playfair)] font-bold text-[#2c2c2c] text-lg mb-4">
                    Visit Us
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      <address className="not-italic text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed">
                        Block A, 397, Street No 9, Near S N School,
                        <br />
                        New Ashok Nagar, New Delhi – 110096
                      </address>
                    </div>
                    <div className="flex gap-3">
                      <Phone size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      <a
                        href="tel:+918090316099"
                        className="text-[#7a7370] font-[var(--font-lato)] text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        +91 80903 16099
                      </a>
                    </div>
                    <div className="flex gap-3">
                      <Clock size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                      <p className="text-[#7a7370] font-[var(--font-lato)] text-sm">
                        Mon–Sun, 10 AM – 10 PM
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/LptbRN3h596Yzk5f6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white font-[var(--font-lato)] text-xs tracking-wider uppercase py-3 rounded-xl hover:shadow-[0_6px_20px_rgba(201,168,76,0.3)] transition-all duration-300"
                  >
                    <MapPin size={12} />
                    Get Directions
                  </a>
                </div>

                <div className="bg-gradient-to-br from-[#1a1008] to-[#2d1f0e] rounded-2xl p-6 text-white">
                  <p className="font-[var(--font-playfair)] font-bold text-lg mb-1">
                    Book your appointment
                  </p>
                  <p className="text-white/60 font-[var(--font-lato)] text-xs leading-relaxed mb-4">
                    Limited slots available. Book today to avoid waiting.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-[var(--font-lato)] text-xs tracking-wider uppercase py-3 rounded-xl hover:bg-[#20BA5A] transition-all duration-300"
                  >
                    WhatsApp Us Now
                  </a>
                  <a
                    href="tel:+918090316099"
                    className="mt-3 w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-[var(--font-lato)] text-xs tracking-wider uppercase py-3 rounded-xl hover:border-white/40 transition-all duration-300"
                  >
                    <Phone size={12} />
                    Call +91 80903 16099
                  </a>
                </div>

                <div className="bg-[#fdf8f3] rounded-2xl p-5 border border-[#e8d5c4]">
                  <p className="font-[var(--font-lato)] font-semibold text-[#2c2c2c] text-sm mb-3">
                    Explore more:
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { label: "Boutique near Noida", href: "/boutique-in-noida" },
                      { label: "Boutique near Indirapuram", href: "/boutique-in-indirapuram" },
                      { label: "Bridal Boutique Guide", href: "/blog/best-bridal-boutique-in-delhi" },
                      { label: "Contact Us", href: "/#contact" },
                    ].map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
                      >
                        <ArrowRight size={12} />
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-12 bg-[#f5ede0]">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-3">
              East Delhi&apos;s Favourite Boutique — Just Around the Corner
            </h2>
            <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-6 leading-relaxed">
              Walk in or book an appointment. Our designer is ready to help you look and feel
              extraordinary. Open every day, 10 AM to 10 PM.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#c9a84c] to-[#a07830] text-white font-[var(--font-lato)] text-sm tracking-wider uppercase px-8 py-3.5 rounded-full hover:shadow-[0_8px_30px_rgba(201,168,76,0.4)] hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
