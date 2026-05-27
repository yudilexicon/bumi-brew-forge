import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bumi Kopi — Indonesian Green Coffee Export",
  description:
    "Indonesian green beans. Processed in-house. Ready to ship. B2B wholesale from our West Java washing station. 6 origins. 6 processing methods. FCL + LCL.",
  keywords:
    "Indonesian green coffee wholesale, Toraja green beans, Ijen Arabica export, West Java coffee supplier, Indonesian coffee processing house",
  openGraph: {
    title: "Bumi Kopi — Indonesian Green Coffee Export",
    description:
      "Indonesian green beans. Processed in-house. Ready to ship.",
    url: "https://bumi-kopi.com",
    siteName: "Bumi Kopi",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
