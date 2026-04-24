import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const SITE_URL = "https://pdstudio.veniyara.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Pragya Designer Studio",
  },
  icons: {
    icon: [
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/icon1.png", type: "image/png", sizes: "32x32" },
    ],
  },
  title: "Pragya Designer Studio | Best Boutique in New Ashok Nagar for Designer Dresses",
  description:
    "Looking for custom designer outfits in New Ashok Nagar? Pragya Designer Studio offers bridal wear, stitching, and designer consultation. Visit us at New Ashok Nagar, New Delhi or call +91 80903 16099.",
  keywords: [
    "boutique in New Ashok Nagar",
    "designer boutique New Ashok Nagar",
    "bridal wear New Ashok Nagar",
    "ladies tailor New Ashok Nagar",
    "custom stitching New Delhi",
    "designer outfits New Ashok Nagar",
    "bridal lehenga New Delhi",
    "best boutique near me New Ashok Nagar",
    "Pragya Designer Studio",
    "ladies boutique New Delhi",
    "ethnic wear New Ashok Nagar",
    "wedding outfit New Ashok Nagar",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pragya Designer Studio | Best Boutique in New Ashok Nagar for Designer Dresses",
    description:
      "Custom designer outfits, bridal wear & stitching in New Ashok Nagar, New Delhi. Visit Pragya Designer Studio — Block A, 397, Street No 9, Near S N School.",
    type: "website",
    url: SITE_URL,
    locale: "en_IN",
    siteName: "Pragya Designer Studio",
    images: [
      {
        url: "/images/pds-logo.png",
        width: 800,
        height: 600,
        alt: "Pragya Designer Studio — Best Boutique in New Ashok Nagar, New Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pragya Designer Studio | Best Boutique in New Ashok Nagar",
    description:
      "Custom designer outfits, bridal wear & stitching in New Ashok Nagar, New Delhi. Book your appointment today.",
    images: ["/images/pds-logo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ClothingStore"],
  name: "Pragya Designer Studio",
  url: SITE_URL,
  telephone: "+918090316099",
  priceRange: "₹₹",
  image: `${SITE_URL}/images/pds-logo.png`,
  description:
    "Pragya Designer Studio is a premier boutique in New Ashok Nagar, New Delhi, offering custom stitching, bridal wear, designer outfits, and fashion consultation.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Block A, 397, Street No 9, Near S N School",
    addressLocality: "New Ashok Nagar",
    addressRegion: "New Delhi",
    postalCode: "110096",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6089,
    longitude: 77.3125,
  },
  hasMap: "https://maps.app.goo.gl/LptbRN3h596Yzk5f6",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "50",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://www.instagram.com/pragyaa.designer_studio/",
    "https://www.facebook.com/profile.php?id=61581803115095",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide bridal stitching at Pragya Designer Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we specialize in bridal stitching including lehengas, bridal sarees, and suits with custom embroidery and embellishments. We offer full bridal consultation and trial fittings at our studio in New Ashok Nagar, New Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "What is the price range for custom outfits at Pragya Designer Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our pricing varies based on design complexity and fabric. Custom stitching starts from ₹500, while bridal outfits range from ₹5,000 to ₹50,000+. Contact us on WhatsApp at +91 80903 16099 for a personalized quote.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book an appointment at Pragya Designer Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book an appointment by calling us at +91 80903 16099, messaging us on WhatsApp, or filling out the contact form on our website. We are available Monday to Sunday, 10 AM to 10 PM at New Ashok Nagar, New Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Pragya Designer Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located at Block A, 397, Street No 9, Near S N School, New Ashok Nagar, New Delhi – 110096. You can find us on Google Maps.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Pragya Designer Studio offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer custom stitching, bridal wear design, alterations and repairs, and designer fashion consultation in New Ashok Nagar, New Delhi.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[#fdf8f3] text-[#2c2c2c] antialiased">
        {children}
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
