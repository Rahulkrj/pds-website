import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { MapPin, Phone, Clock, ArrowRight, Star } from "lucide-react";

const SITE_URL = "https://pdstudio.veniyara.com";
const WHATSAPP = "918090316099";
const WA_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I'm visiting from Indirapuram and would like to book an appointment."
);

export const metadata: Metadata = {
  title: "Boutique Near Indirapuram — Custom Stitching & Bridal Wear | Pragya Designer Studio",
  description:
    "Searching for a designer boutique near Indirapuram? Pragya Designer Studio in New Ashok Nagar, Delhi is just 20 minutes away. Custom stitching, bridal wear & designer consultation.",
  keywords: [
    "boutique near Indirapuram",
    "designer boutique Indirapuram",
    "bridal wear Indirapuram",
    "custom stitching near Indirapuram",
    "ladies tailor Indirapuram Ghaziabad",
    "boutique near Vaibhav Khand",
    "Pragya Designer Studio Indirapuram",
  ],
  alternates: {
    canonical: "/boutique-in-indirapuram",
  },
  openGraph: {
    title: "Boutique Near Indirapuram — Pragya Designer Studio | Custom Stitching & Bridal Wear",
    description:
      "Serving Indirapuram customers from New Ashok Nagar, Delhi. Just 20 min away. Custom stitching, bridal wear, designer consultation.",
    url: `${SITE_URL}/boutique-in-indirapuram`,
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
      name: "Boutique Near Indirapuram",
      item: `${SITE_URL}/boutique-in-indirapuram`,
    },
  ],
};

const reviews = [
  {
    name: "Neha Gupta",
    location: "Vaibhav Khand, Indirapuram",
    review:
      "We've been customers for three years. Pragya stitched our entire family's outfits for a wedding — lehengas, suits, saree blouses. Every single piece was flawless.",
  },
  {
    name: "Shweta Mehta",
    location: "Ahinsa Khand, Indirapuram",
    review:
      "I was skeptical about travelling to New Ashok Nagar but my friend insisted. Now I won't go anywhere else. The fit and finish is exceptional.",
  },
];

export default function BoutiqueInIndirapuramPage() {
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
            <li className="text-[#2c2c2c]">Boutique Near Indirapuram</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1008] via-[#2d1f0e] to-[#1a1008]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(201,168,76,0.2)_0%,transparent_60%)]" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-6">
              <MapPin size={14} className="text-[#e8c97a]" />
              <span className="text-[#e8c97a] text-xs font-[var(--font-lato)] tracking-widest uppercase">
                Serving Indirapuram Customers
              </span>
            </div>
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Designer Boutique Near Indirapuram —{" "}
              <span className="text-[#e8c97a] italic">Premium Stitching, 20 Min Away</span>
            </h1>
            <p className="text-white/70 font-[var(--font-lato)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              Families from Vaibhav Khand, Ahinsa Khand, and all of Indirapuram visit Pragya
              Designer Studio in New Ashok Nagar, New Delhi for custom stitching and bridal wear
              that meets their high expectations.
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
                    The Boutique Indirapuram Families Trust
                  </h2>
                  <div className="space-y-4 text-[#7a7370] font-[var(--font-lato)] leading-relaxed text-base">
                    <p>
                      Indirapuram residents know quality. The area is home to thousands of families
                      who appreciate well-crafted clothing — and who won&apos;t settle for
                      anything less. That&apos;s why so many of them make the 20-minute trip to{" "}
                      <strong className="text-[#2c2c2c]">Pragya Designer Studio</strong> in
                      New Ashok Nagar, New Delhi.
                    </p>
                    <p>
                      Whether it&apos;s a bridal lehenga for a daughter&apos;s wedding, a custom
                      salwar suit for a family function, or just a beautifully stitched blouse for
                      a silk saree — we bring the same level of care and craftsmanship to every
                      single piece.
                    </p>
                    <p>
                      Our studio is accessible from Vaibhav Khand and Ahinsa Khand in approximately
                      20–25 minutes via NH9 through Anand Vihar. It&apos;s a comfortable drive, and
                      many of our Indirapuram clients tell us they enjoy making a day of it.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    Our Services for Indirapuram Customers
                  </h2>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Bridal Lehenga & Sarees",
                        desc: "Complete bridal wear with consultation, embroidery, multiple fittings, and delivery within committed timelines.",
                      },
                      {
                        title: "Custom Salwar Suits & Kurtis",
                        desc: "Bring your fabric or choose from our selection. We'll stitch it to your exact measurements and design preferences.",
                      },
                      {
                        title: "Blouse Stitching & Alterations",
                        desc: "From simple blouses to heavily embroidered ones — precise stitching that transforms how your saree looks.",
                      },
                      {
                        title: "Party & Occasion Wear",
                        desc: "One-of-a-kind outfits for weddings, receptions, sangeets, and festive occasions.",
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
                </div>

                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    How to Reach Us from Indirapuram
                  </h2>
                  <div className="bg-[#f5ede0] rounded-2xl p-6 text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed">
                    <p className="font-semibold text-[#2c2c2c] mb-3">Directions:</p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>From Indirapuram, take NH9 towards Delhi (Anand Vihar direction).</li>
                      <li>Cross the Anand Vihar ISBT area and head towards New Ashok Nagar.</li>
                      <li>Take the exit towards New Ashok Nagar Metro Station.</li>
                      <li>We&apos;re at Block A, 397, Street No 9, Near S N School.</li>
                    </ol>
                    <p className="mt-4">
                      <strong className="text-[#2c2c2c]">By Metro:</strong> Board the Blue Line to
                      New Ashok Nagar Station, 5 min walk to the studio.
                    </p>
                    <a
                      href="https://maps.app.goo.gl/LptbRN3h596Yzk5f6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-[#c9a84c] font-semibold hover:underline"
                    >
                      <MapPin size={13} />
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div>
                  <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] mb-5">
                    What Indirapuram Customers Say
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
                    Book your slot
                  </p>
                  <p className="text-white/60 font-[var(--font-lato)] text-xs leading-relaxed mb-4">
                    Appointment slots are limited. Secure yours today.
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
                    Also serving nearby areas:
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { label: "Boutique near Noida", href: "/boutique-in-noida" },
                      { label: "Boutique in East Delhi", href: "/boutique-in-east-delhi" },
                      { label: "All Our Services", href: "/#services" },
                      { label: "Read Our Blog", href: "/blog" },
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
              Ready to Visit from Indirapuram?
            </h2>
            <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-6 leading-relaxed">
              Call us or send a WhatsApp message to confirm your consultation slot. We&apos;re open
              every day from 10 AM to 10 PM.
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
