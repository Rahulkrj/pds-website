import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, Phone } from "lucide-react";

const SITE_URL = "https://pdstudio.veniyara.com";
const WHATSAPP = "918090316099";
const WA_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I read your blouse design guide and would like to book a consultation."
);

export const metadata: Metadata = {
  title: "How to Choose the Perfect Blouse Design for Your Saree | Pragya Designer Studio",
  description:
    "A complete guide to choosing the perfect blouse design — necklines, sleeve styles, back designs, and expert tips from Pragya Designer Studio, boutique in New Ashok Nagar, Delhi.",
  keywords: [
    "how to choose blouse design",
    "blouse design for saree",
    "blouse stitching New Delhi",
    "saree blouse design guide",
    "best blouse design boutique Delhi",
    "blouse stitching New Ashok Nagar",
  ],
  alternates: { canonical: "/blog/how-to-choose-perfect-blouse-design" },
  openGraph: {
    title: "How to Choose the Perfect Blouse Design for Your Saree | Pragya Designer Studio",
    description:
      "Complete guide: necklines, sleeves, back designs, and expert tips for finding the perfect saree blouse. From Pragya Designer Studio, New Ashok Nagar.",
    url: `${SITE_URL}/blog/how-to-choose-perfect-blouse-design`,
    locale: "en_IN",
    type: "article",
    siteName: "Pragya Designer Studio",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to Choose the Perfect Blouse Design",
      item: `${SITE_URL}/blog/how-to-choose-perfect-blouse-design`,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Choose the Perfect Blouse Design for Your Saree",
  description:
    "A complete guide to choosing the perfect blouse — necklines, sleeves, back designs, and how body type affects design choices.",
  author: { "@type": "Person", name: "Pragya" },
  publisher: {
    "@type": "Organization",
    name: "Pragya Designer Studio",
    url: SITE_URL,
  },
  url: `${SITE_URL}/blog/how-to-choose-perfect-blouse-design`,
  datePublished: "2024-11-15",
  dateModified: "2025-04-01",
  mainEntityOfPage: `${SITE_URL}/blog/how-to-choose-perfect-blouse-design`,
};

export default function BlouseDesignGuidePage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumb */}
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-2" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-[var(--font-lato)] text-[#7a7370]">
            <li><Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link></li>
            <li className="text-[#c9a84c]">/</li>
            <li><Link href="/blog" className="hover:text-[#c9a84c] transition-colors">Blog</Link></li>
            <li className="text-[#c9a84c]">/</li>
            <li className="text-[#2c2c2c]">How to Choose the Perfect Blouse Design</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-[var(--font-lato)] tracking-widest uppercase bg-[#f5ede0] text-[#c9a84c] px-3 py-1 rounded-full">
              Styling Guide
            </span>
            <span className="text-[#7a7370] text-xs font-[var(--font-lato)]">7 min read</span>
          </div>

          <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight mb-5">
            How to Choose the Perfect Blouse Design for Your Saree
          </h1>

          <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-8 pb-8 border-b border-[#e8d5c4]">
            By <strong className="text-[#2c2c2c]">Pragya</strong> · Pragya Designer Studio, New Ashok Nagar, New Delhi
          </p>

          <div className="space-y-6 text-[#4a4a4a] font-[var(--font-lato)] leading-relaxed text-base">
            <p>
              The saree gets all the attention. Five metres of fabric, woven with centuries of
              tradition — it&apos;s impossible not to notice. But ask any stylist, and they&apos;ll
              tell you: the blouse is the secret hero of any saree look. Get the blouse right, and
              the entire ensemble elevates. Get it wrong, and even the most stunning saree can
              fall flat.
            </p>

            <p>
              If you&apos;ve ever stood in front of a mirror unsure which blouse design to choose —
              or worse, picked one impulsively and regretted it — this guide is for you.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Start with Your Body Type
            </h2>

            <p>
              Before you open a catalogue or browse Instagram for inspiration, take an honest look
              at your proportions. A great blouse works <em>with</em> your body, not against it.
            </p>

            <ul className="space-y-3 list-none">
              {[
                {
                  type: "Petite frames",
                  tip: "Opt for shorter blouses (8–12 inches), V-necks, and minimal front embellishments. This creates the visual illusion of height.",
                },
                {
                  type: "Broad shoulders",
                  tip: "A deep V-neck or sweetheart neckline draws attention downward. Avoid boat necks or wide off-shoulder cuts that accentuate width.",
                },
                {
                  type: "Narrow shoulders",
                  tip: "Boat necks and off-shoulder styles add visual width. Cape sleeves are also wonderfully flattering.",
                },
                {
                  type: "Fuller bust",
                  tip: "Avoid heavily embellished fronts or padded blouses. A princess-cut blouse with structured support works beautifully.",
                },
              ].map((item) => (
                <li key={item.type} className="flex gap-2.5 bg-[#fdf8f3] rounded-xl p-4">
                  <span className="text-[#c9a84c] mt-0.5 flex-shrink-0 font-bold text-xs">→</span>
                  <div>
                    <span className="font-semibold text-[#2c2c2c]">{item.type}: </span>
                    {item.tip}
                  </div>
                </li>
              ))}
            </ul>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Neckline Options — Explained
            </h2>

            <p>
              The neckline sets the tone for the entire blouse. Here are the most popular styles
              and when they work best:
            </p>

            <div className="space-y-3">
              {[
                {
                  name: "Round neck",
                  desc: "The safest, most versatile choice. Works for all occasions, all body types, and all fabrics. Not the most exciting — but always elegant.",
                },
                {
                  name: "Sweetheart neck",
                  desc: "Romantic and feminine. Works beautifully for weddings and evening occasions. Shows off the collarbone and neckline gracefully.",
                },
                {
                  name: "Boat neck (bateau)",
                  desc: "Classic and sophisticated. Great for showcasing broad shoulders. Particularly stunning on plain or subtly textured fabrics.",
                },
                {
                  name: "V-neck",
                  desc: "Creates visual length. Universally flattering. Works especially well for wedding and formal wear, particularly on heavier fabrics.",
                },
                {
                  name: "Off-shoulder",
                  desc: "Glamorous and contemporary. Best suited for lightweight fabrics like organza or georgette. Not ideal for long ceremonies.",
                },
                {
                  name: "Keyhole neck",
                  desc: "Adds an interesting detail without revealing too much. Very popular for wedding guest outfits and sangeet functions.",
                },
              ].map((item) => (
                <div key={item.name} className="flex gap-3 p-4 bg-white border border-[#e8d5c4] rounded-xl">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#2c2c2c] text-sm">{item.name}: </span>
                    <span className="text-[#7a7370] text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Sleeve Styles — Choosing the Right Length
            </h2>

            <p>
              Sleeves can completely change the mood of a blouse — and they&apos;re the easiest
              element to customise.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { name: "Sleeveless", note: "Best for parties and weddings. Requires precise measurement — no margin for a poor fit." },
                { name: "Short (elbow length)", note: "The classic all-occasion choice. Works universally." },
                { name: "Full sleeves", note: "Elegant and formally appropriate. Great for winters." },
                { name: "Bell sleeves", note: "Fashion-forward and festive. Adds drama to any saree." },
                { name: "Puffed sleeves", note: "Fun and retro. Beautiful on cotton and printed sarees." },
                { name: "Cape sleeves", note: "Dramatic and stunning. Perfect for weddings." },
              ].map((s) => (
                <div key={s.name} className="bg-[#fdf8f3] rounded-xl p-4 border border-[#e8d5c4]">
                  <p className="font-semibold text-[#2c2c2c] text-sm mb-1">{s.name}</p>
                  <p className="text-[#7a7370] text-xs leading-relaxed">{s.note}</p>
                </div>
              ))}
            </div>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Back Designs — Your Canvas for Creativity
            </h2>

            <p>
              Most people see your blouse from the back, not the front. Yet, blouse backs are
              routinely underdesigned. This is where you can make a real statement — even with a
              relatively simple saree.
            </p>

            <ul className="space-y-2 list-none">
              {[
                "Deep V-back — timeless, classy, works for most body types",
                "Bow-back — playful and feminine, very popular at weddings",
                "Keyhole back — subtle and elegant",
                "Criss-cross strings (knotted back) — versatile and adjustable",
                "Open back with buttons — traditional and refined",
                "Embroidered back panel — for when you want the drama",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-sm">
                  <span className="text-[#c9a84c] flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Minimal vs. Ornate — When to Hold Back
            </h2>

            <p>
              A common mistake: putting heavy embellishments on both the saree and the blouse. The
              result is visual chaos — each piece competing for attention instead of complementing
              the other.
            </p>

            <p>
              The rule of thumb is simple: if your saree is heavily embellished — bridal work,
              kanjivaram, zari borders — keep the blouse clean. A contrasting colour and a simple
              cut is often the most powerful choice. Conversely, if your saree is a plain georgette
              or chiffon, let the blouse carry some weight — embroidery, sequins, or mirror work.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Matching vs. Contrasting Blouse
            </h2>

            <p>
              Matching blouses are safe. Contrasting blouses are memorable. If your saree has a
              border colour, try using that as your blouse colour. If you&apos;re wearing a plain
              or lightly printed saree, experiment — a deep plum blouse on a powder-blue saree, or
              a mustard blouse on ivory silk, can be transformative.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Why Working with a Designer Makes the Difference
            </h2>

            <p>
              While there&apos;s plenty you can decide independently, a skilled designer will take
              your blouse from &ldquo;nice&rdquo; to &ldquo;perfect.&rdquo; At{" "}
              <strong className="text-[#2c2c2c]">Pragya Designer Studio</strong>, we take detailed
              measurements, discuss your preferences, and often suggest small but significant
              adjustments — the exact curve of a neckline, the precise depth of a back cut, the
              right length of sleeve — that make an enormous difference in the final result.
            </p>

            <p>
              We&apos;ll also look at your specific fabric and suggest what designs will hold their
              shape, what cuts will flatter, and what embellishments will complement — rather than
              compete with — your saree. This is the kind of knowledge that only comes from years
              of stitching, not from a catalogue.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#1a1008] to-[#2d1f0e] rounded-2xl p-7 text-white mt-8">
              <h3 className="font-[var(--font-playfair)] text-xl font-bold mb-2">
                Book a Blouse Consultation
              </h3>
              <p className="text-white/65 font-[var(--font-lato)] text-sm leading-relaxed mb-5">
                Visit our studio in New Ashok Nagar, New Delhi. Bring your saree, tell us the
                occasion, and we&apos;ll design the perfect blouse together.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${WA_MSG}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-[var(--font-lato)] text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:bg-[#20BA5A] transition-all duration-300"
                >
                  WhatsApp for Consultation
                </a>
                <a
                  href="tel:+918090316099"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 font-[var(--font-lato)] text-xs tracking-wider uppercase px-6 py-3 rounded-xl hover:border-white/50 transition-all duration-300"
                >
                  <Phone size={13} />
                  +91 80903 16099
                </a>
              </div>
            </div>
          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-[#e8d5c4]">
            <p className="font-[var(--font-lato)] font-semibold text-[#2c2c2c] text-sm mb-4">
              You might also like:
            </p>
            <div className="space-y-3">
              <Link
                href="/blog/best-bridal-boutique-in-delhi"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                Best Bridal Boutique in Delhi — Your Complete Guide
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                Our Services — Custom Stitching & Blouse Work
              </Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                Book an Appointment at Our Studio
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}
