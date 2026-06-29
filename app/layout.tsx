import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import CursorLight from "@/components/CursorLight/CursorLight";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anastasiia-totska-github-io.vercel.app/"),
  title: "Anastasiia Totska | Junior Frontend Developer",
  description:
    "Portfolio of Anastasiia Totska - frontend-focused junior developer with a full-stack development certificate, specializing in React and Next.js.",
  authors: [{ name: "Anastasiia Totska" }],
  icons: {
    icon: "/favicon.webp",
  },
  openGraph: {
    title: "Anastasiia Totska | Junior Frontend Developer",
    description:
      "Portfolio of Anastasiia Totska - frontend-focused junior developer with a full-stack development certificate, specializing in React and Next.js.",
    url: "https://anastasiia-totska-github-io.vercel.app/",
    siteName: "Anastasiia Totska Portfolio",
    images: [
      {
        url: "/favicon.webp",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anastasiia Totska | Junior Frontend Developer",
    description:
      "Portfolio of Anastasiia Totska - frontend-focused junior developer with a full-stack development certificate, specializing in React and Next.js.",
    images: ["/favicon.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="antialiased">
        <CursorLight /> {children}
      </body>
    </html>
  );
}
