import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/utils/provider/Providers"
import { poppins } from "@/utils/font";
import FooterComp from "@/components/footerComp";
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

export const metadata: Metadata = {
  title: "Vitality.ai",
  description: "Vitality.ai is a one stop solution for chronic pain management.",
  openGraph: {
    title: "Vitality.ai",
    description: "Vitality.ai is a one stop solution for chronic pain management.",
    url: "https://vitality-landing-new.vercel.app/",
    images: [
      {
        url: "/public/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Vitality.ai",
      },
    ],
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
      <body className={poppins.className}>
        <Providers>
          <head>
            <GoogleAnalytics measurementId=""/>
            <meta property="og:title" content="Vitality.ai" />
            <meta property="og:description" content="Vitality.ai is a one stop solution for chronic pain management." />
            <meta property="og:url" content="https://vitality-landing-new.vercel.app/" />
            <meta property="og:image" content="public/opengraph-image.png" />
          </head>
          {children}
          <FooterComp/>
        </Providers>
        </body>
    </html>
  );
}
