import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dzindeck — Discover Design Events Across India",
  description:
    "The centralized discovery platform for designathons, meetups, workshops, and conferences. Find, filter, and never miss a design event again.",
  keywords: [
    "design events",
    "designathon",
    "UX meetups",
    "design workshops",
    "India",
    "UI design",
    "product design",
    "design community",
    "Dzindeck",
  ],
  authors: [{ name: "Dzindeck" }],
  openGraph: {
    title: "Dzindeck — Discover Design Events Across India",
    description:
      "The centralized discovery platform for designathons, meetups, workshops, and conferences.",
    type: "website",
    locale: "en_IN",
    siteName: "Dzindeck",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzindeck — Discover Design Events Across India",
    description:
      "The centralized discovery platform for designathons, meetups, workshops, and conferences.",
  },
  icons: {
    icon: "/assets/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable}>
      <body className="font-figtree bg-page text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
