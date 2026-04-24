import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, Phone } from "lucide-react";

const SITE_URL = "https://pdstudio.veniyara.com";
const WHATSAPP = "918090316099";
const WA_MSG = encodeURIComponent(
  "Hi Pragya Designer Studio! I read your bridal boutique guide and would like to book a consultation."
);

export const metadata: Metadata = {
  title: "Best Bridal Boutique in Delhi — Your Complete Guide | Pragya Designer Studio",
  description:
    "Discover what makes a great bridal boutique in Delhi. A complete guide to finding the right one — plus why hundreds of brides choose Pragya Designer Studio in New Ashok Nagar.",
  keywords: [
    "best bridal boutique in Delhi",
    "bridal boutique New Delhi",
    "bridal lehenga boutique Delhi",
    "bridal wear New Ashok Nagar",
    "best boutique for wedding dress Delhi",
  ],
  alternates: { canonical: "/blog/best-bridal-boutique-in-delhi" },
  openGraph: {
    title: "Best Bridal Boutique in Delhi — Your Complete Guide | Pragya Designer Studio",
    description:
      "A complete guide to finding the best bridal boutique in Delhi — what to look for, questions to ask, and why brides across NCR choose Pragya Designer Studio.",
    url: `${SITE_URL}/blog/best-bridal-boutique-in-delhi`,
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
      name: "Best Bridal Boutique in Delhi",
      item: `${SITE_URL}/blog/best-bridal-boutique-in-delhi`,
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Best Bridal Boutique in Delhi — Your Complete Guide",
  description:
    "What separates a great bridal boutique from an average one — and why hundreds of brides across Delhi NCR choose Pragya Designer Studio in New Ashok Nagar.",
  author: { "@type": "Person", name: "Pragya" },
  publisher: {
    "@type": "Organization",
    name: "Pragya Designer Studio",
    url: SITE_URL,
  },
  url: `${SITE_URL}/blog/best-bridal-boutique-in-delhi`,
  datePublished: "2024-10-01",
  dateModified: "2025-04-01",
  mainEntityOfPage: `${SITE_URL}/blog/best-bridal-boutique-in-delhi`,
};

export default function BridalBoutiqueGuidePage() {
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
            <li className="text-[#2c2c2c]">Best Bridal Boutique in Delhi</li>
          </ol>
        </nav>

        {/* Article */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] font-[var(--font-lato)] tracking-widest uppercase bg-[#f5ede0] text-[#c9a84c] px-3 py-1 rounded-full">
              Bridal Wear
            </span>
            <span className="text-[#7a7370] text-xs font-[var(--font-lato)]">6 min read</span>
          </div>

          <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl font-bold text-[#2c2c2c] leading-tight mb-5">
            Best Bridal Boutique in Delhi — Your Complete Guide
          </h1>

          <p className="text-[#7a7370] font-[var(--font-lato)] text-sm mb-8 pb-8 border-b border-[#e8d5c4]">
            By <strong className="text-[#2c2c2c]">Pragya</strong> · Pragya Designer Studio, New Ashok Nagar, New Delhi
          </p>

          <div className="prose-custom space-y-6 text-[#4a4a4a] font-[var(--font-lato)] leading-relaxed text-base">
            <p>
              Delhi has thousands of boutiques — from upscale South Delhi studios to neighbourhood
              tailors in every colony. When you&apos;re shopping for your bridal outfit, however, the
              stakes are too high to take chances. Your wedding outfit will be photographed a
              thousand times, worn for hours, and remembered forever. Getting it right matters.
            </p>

            <p>
              In this guide, we walk you through what separates an exceptional bridal boutique from
              an average one — and why so many brides from across Delhi NCR choose{" "}
              <strong className="text-[#2c2c2c]">Pragya Designer Studio</strong> for their most
              important day.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              What to Look for in a Bridal Boutique
            </h2>

            <p>
              <strong className="text-[#2c2c2c]">1. Consultation first, stitching second.</strong>{" "}
              A great boutique doesn&apos;t just take your measurements and start stitching. It
              listens. The consultation is where a skilled designer understands your vision, your
              body shape, the venue, the season, and your budget. Only then does the design process
              begin.
            </p>

            <p>
              <strong className="text-[#2c2c2c]">2. Experience with Indian bridal wear.</strong>{" "}
              Bridal wear in India spans an enormous range — from heavy banarasi silk sarees to
              lightweight georgette lehengas, from intricate zardozi embroidery to clean minimalist
              cuts. Look for a boutique with clear experience across styles, not just one
              specialisation.
            </p>

            <p>
              <strong className="text-[#2c2c2c]">3. Multiple fittings are non-negotiable.</strong>{" "}
              Good stitching is not a one-visit affair. At least two to three fitting sessions are
              standard for bridal wear. If a boutique offers only one fitting, that&apos;s a red
              flag — no matter how confident they sound.
            </p>

            <p>
              <strong className="text-[#2c2c2c]">4. Fabric knowledge matters.</strong> The wrong
              fabric for the season, venue, or design can ruin an outfit that looks perfect on
              paper. Your boutique should guide you on fabric choices — what holds embroidery well,
              what drapes beautifully, what will keep you comfortable through a long ceremony.
            </p>

            <p>
              <strong className="text-[#2c2c2c]">5. Transparent timelines.</strong> Bridal work
              takes time. Be wary of boutiques that promise quick delivery on complex outfits. Good
              craftsmanship is unhurried. A trustworthy boutique will give you a realistic timeline
              and stick to it.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Questions to Ask Before Booking
            </h2>

            <ul className="space-y-2 list-none">
              {[
                "Can I see samples of your previous bridal work?",
                "How many fittings are included in the price?",
                "What is the realistic delivery timeline for my outfit?",
                "Do you source fabric or should I bring my own?",
                "What is your alteration policy if adjustments are needed after delivery?",
              ].map((q) => (
                <li key={q} className="flex gap-2.5">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">→</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              The Pragya Designer Studio Approach
            </h2>

            <p>
              At Pragya Designer Studio in New Ashok Nagar, New Delhi, every bridal project begins
              with a detailed one-on-one consultation. Our head designer — Pragya — personally works
              with every bride. There are no junior staff handling your outfit while you&apos;re not
              looking.
            </p>

            <p>
              We begin with your vision: mood boards, inspiration images, preferences in colour and
              fabric. Then we examine your measurements, discuss the silhouette that works best for
              your body, and walk you through fabric options that match your desired look and budget.
            </p>

            <p>
              We typically schedule three fitting sessions for bridal wear — an initial drape, a
              detailed fitting once the outfit is partially assembled, and a final trial. By the time
              you take your outfit home, it fits you perfectly and you&apos;ve already worn it
              multiple times in the studio.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Our Bridal Specialisations
            </h2>

            <ul className="space-y-1.5 list-none">
              {[
                "Bridal lehengas (heavy and lightweight)",
                "Bridal sarees with custom blouses",
                "Sharara and palazzo bridal suits",
                "Pre-wedding and engagement outfits",
                "Family coordination — mother of the bride, sisters, bridesmaids",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="text-[#c9a84c] mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p>
              We work with pure silk, organza, georgette, velvet, and raw silk, and offer in-house
              embroidery including zardozi, gota patti, and thread work.
            </p>

            <h2 className="font-[var(--font-playfair)] text-2xl font-bold text-[#2c2c2c] pt-4">
              Serving Brides Across Delhi NCR
            </h2>

            <p>
              Brides visit us from across Delhi NCR — from{" "}
              <Link href="/boutique-in-noida" className="text-[#c9a84c] hover:underline font-medium">
                Noida
              </Link>{" "}
              and{" "}
              <Link
                href="/boutique-in-indirapuram"
                className="text-[#c9a84c] hover:underline font-medium"
              >
                Indirapuram
              </Link>{" "}
              in the east, to Laxmi Nagar and Patparganj right nearby. We are located in{" "}
              <Link
                href="/boutique-in-east-delhi"
                className="text-[#c9a84c] hover:underline font-medium"
              >
                New Ashok Nagar, East Delhi
              </Link>
              , accessible via the Blue Line metro and just 15 minutes from Noida via DND.
            </p>

            {/* CTA block */}
            <div className="bg-gradient-to-br from-[#1a1008] to-[#2d1f0e] rounded-2xl p-7 text-white mt-8">
              <h3 className="font-[var(--font-playfair)] text-xl font-bold mb-2">
                Book a Bridal Consultation
              </h3>
              <p className="text-white/65 font-[var(--font-lato)] text-sm leading-relaxed mb-5">
                Your bridal outfit deserves nothing less than the best. Call us or message us on
                WhatsApp to book your free consultation. Bridal slots fill up fast — especially in
                wedding season.
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
                href="/blog/how-to-choose-perfect-blouse-design"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                How to Choose the Perfect Blouse Design for Your Saree
              </Link>
              <Link
                href="/#services"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                Our Services — Custom Stitching & Bridal Wear
              </Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 text-[#c9a84c] font-[var(--font-lato)] text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowRight size={13} />
                Book an Appointment
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
