import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "../styles/globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Yoel Bobcat Services | Construction & Excavation Experts",
  description:
    "Yoel Bobcat Services delivers top-quality construction, excavation, and site management for residential and commercial projects. Built right. On time. Every time.",
  keywords: [
    "Yoel Bobcat Services",
    "construction",
    "excavation",
    "driveway leveling",
    "site management",
    "demolition",
    "material delivery",
    "infrastructure construction",
    "fence hole drilling",
    "South Florida construction",
  ],
  icons: {
    icon: "/icons/icon1.png",
  },
  authors: [{ name: "Yoel Bobcat Services" }],
  openGraph: {
    title: "Yoel Bobcat Services | Construction & Excavation Experts",
    description:
      "Over 10 years of experience delivering reliable construction and excavation solutions in South Florida.",
    url: "https://yoelbobcat.com",
    siteName: "Yoel Bobcat Services",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yoel Bobcat Services heavy machinery on site",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoel Bobcat Services | Construction & Excavation Experts",
    description:
      "Residential & commercial construction done right — on time, every time.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
