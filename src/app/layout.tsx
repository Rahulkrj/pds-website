import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
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

export const metadata: Metadata = {
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
  title: "Pragya Designer Studio | Custom Boutique Outfits & Bridal Wear",
  description:
    "Pragya Designer Studio crafts custom-stitched outfits, bridal wear, and designer ethnic wear with precision and passion. Book your appointment today.",
  keywords:
    "boutique, custom stitching, bridal wear, designer outfits, ethnic wear, fashion boutique, tailored outfits, Pragya Designer Studio",
  openGraph: {
    title: "Pragya Designer Studio | Custom Boutique Outfits & Bridal Wear",
    description:
      "Pragya Designer Studio crafts custom-stitched outfits, bridal wear, and designer ethnic wear with precision and passion.",
    type: "website",
    locale: "en_IN",
  },
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
      </body>
    </html>
  );
}
