import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MarketingTracking } from "@/components/MarketingTracking";
import "./globals.css";

const EDUKACUCA_META_PIXEL_ID = "2180875479476314";
const EDUKACUCA_GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_EDUKACUCA_GOOGLE_ADS_ID?.trim() || "AW-18387265025";
const EDUKACUCA_GOOGLE_WHATSAPP_CONVERSION_LABEL = process.env.NEXT_PUBLIC_EDUKACUCA_GOOGLE_WHATSAPP_CONVERSION_LABEL?.trim() || "W63kCJrQm48dEIHM3b9E";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
        default: "EdukaCuca",
        template: "%s | EdukaCuca",
  },
  description:
    "Aprender a aprender com ciência, prática e criatividade.",
  icons: {
    icon: "/images/eduka3.jpeg",
    shortcut: "/images/eduka3.jpeg",
    apple: "/images/eduka3.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-cream text-accent antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MarketingTracking
          pixelId={EDUKACUCA_META_PIXEL_ID}
          googleAdsId={EDUKACUCA_GOOGLE_ADS_ID}
          googleConversionLabel={EDUKACUCA_GOOGLE_WHATSAPP_CONVERSION_LABEL}
        />
      </body>
    </html>
  );
}
