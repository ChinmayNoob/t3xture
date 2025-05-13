import type { Metadata, Viewport } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/navbar-component";
import ScrollToTop from "@/components/scroll-to-top";
import WhatsAppButton from "@/components/whatsapp";

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-dmsans',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
export const viewport: Viewport = {
  themeColor: "#4F46E5",
}

export const metadata: Metadata = {
  title: "T3xture - Your Trusted Partner in Construction",
  description: "We turn bold ideas into digital realities powered by innovation and cutting-edge tech.",
  openGraph: {
    title: "T3xture — Your Trusted Partner in Construction",
    siteName: "T3xture | Your Trusted Partner in Construction",
    url: "https://t3xture.vercel.app/",
    locale: "en_IN",
    description:
      "We turn bold ideas into digital realities powered by innovation and cutting-edge tech.",
    images: [{
      url: 'https://t3xture.vercel.app/logos/website-banner.png',
      width: 1200,
      height: 630,
      alt: 'T3xture - Your Trusted Partner in Construction',
      type: 'image/png',
      secureUrl: 'https://t3xture.vercel.app/logos/website-banner.png',
    }],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image:secure_url" content="https://t3xture.vercel.app/logos/website-banner.png" />

      </head>
      <body
        className={`${poppins.variable} ${dmsans.variable} antialiased`}
      >
        <NavbarComponent />
        {children}
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
