import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://maximillianlabs.com"),
  title: {
    default: "Maximillian Labs | Award-Winning Web Design Agency",
    template: "%s | Maximillian Labs",
  },
  description:
    "London-based award-winning web design agency creating bespoke, high-performance, and interactive digital experiences for ambitious brands.",
  keywords: [
    "web design agency",
    "London web design",
    "UI UX design",
    "SEO services",
    "branding agency",
    "digital agency",
  ],
  authors: [{ name: "Maximillian Labs" }],
  creator: "Maximillian Labs",
  publisher: "Maximillian Labs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "/",
    title: "Maximillian Labs | Award-Winning Web Design Agency",
    description:
      "Bespoke web design, branding, and digital experiences built by a London team focused on measurable growth.",
    siteName: "Maximillian Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximillian Labs | Award-Winning Web Design Agency",
    description:
      "Bespoke web design, branding, and digital experiences built for growth-focused brands.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
      className={`${geistSans.variable} ${geistMono.variable} bg-[#f4f4f5]`}
    >
      <body className="font-sans antialiased bg-[#f4f4f5] text-foreground">
        {children}
      </body>
    </html>
  );
}
