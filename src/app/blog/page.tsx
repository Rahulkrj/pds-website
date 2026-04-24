import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowRight, BookOpen } from "lucide-react";

const SITE_URL = "https://pdstudio.veniyara.com";

export const metadata: Metadata = {
  title: "Blog — Fashion Tips & Bridal Guides | Pragya Designer Studio",
  description:
    "Expert fashion tips, bridal wear guides, and styling advice from Pragya Designer Studio, boutique in New Ashok Nagar, New Delhi.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Pragya Designer Studio | Fashion & Bridal Wear Guides",
    description:
      "Read fashion tips, bridal guides, and styling advice from Pragya Designer Studio, New Ashok Nagar.",
    url: `${SITE_URL}/blog`,
    locale: "en_IN",
    type: "website",
    siteName: "Pragya Designer Studio",
  },
};

const posts = [
  {
    slug: "best-bridal-boutique-in-delhi",
    title: "Best Bridal Boutique in Delhi — Your Complete Guide",
    excerpt:
      "Finding the right bridal boutique in Delhi can feel overwhelming. Here's exactly what to look for — and why brides across NCR trust Pragya Designer Studio.",
    category: "Bridal Wear",
    readTime: "6 min read",
  },
  {
    slug: "how-to-choose-perfect-blouse-design",
    title: "How to Choose the Perfect Blouse Design for Your Saree",
    excerpt:
      "The blouse makes or breaks a saree look. A complete guide to necklines, sleeves, back designs, and how to match your blouse to your saree perfectly.",
    category: "Styling Guide",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="py-14 md:py-20 bg-[#fdf8f3] border-b border-[#e8d5c4]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs font-[var(--font-lato)] tracking-[0.3em] uppercase">
                From Our Studio
              </span>
            </div>
            <h1 className="font-[var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold text-[#2c2c2c] leading-tight">
              Fashion Tips &{" "}
              <span className="text-[#c9a84c] italic">Style Guides</span>
            </h1>
            <p className="mt-4 text-[#7a7370] font-[var(--font-lato)] text-base leading-relaxed max-w-xl">
              Expert advice on bridal wear, outfit styling, and fashion — from the designers at
              Pragya Designer Studio, New Ashok Nagar, New Delhi.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 md:py-16 bg-[#fdf8f3]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl p-7 border border-[#e8d5c4] hover:border-[#c9a84c] hover:shadow-[0_8px_30px_rgba(201,168,76,0.12)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-[var(--font-lato)] tracking-widest uppercase bg-[#f5ede0] text-[#c9a84c] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[#7a7370] text-xs font-[var(--font-lato)]">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-[var(--font-playfair)] text-xl sm:text-2xl font-bold text-[#2c2c2c] leading-tight mb-3 group-hover:text-[#a07830] transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="text-[#7a7370] font-[var(--font-lato)] text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[#c9a84c] font-[var(--font-lato)] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                    Read article
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Back to home */}
            <div className="mt-10 flex items-center gap-3">
              <BookOpen size={16} className="text-[#c9a84c]" />
              <Link href="/" className="text-[#c9a84c] font-[var(--font-lato)] text-sm hover:underline">
                Back to Pragya Designer Studio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
