import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Valdery Alves | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes. Transforme sua ideia em realidade com expertise em React, Node.js e tecnologias cloud.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Valdery Alves | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes. Transforme sua ideia em realidade com expertise em React, Node.js e tecnologias cloud.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Valdery Alves - Desenvolvedor Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdery Alves | Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em criar soluções web modernas e eficientes. Transforme sua ideia em realidade com expertise em React, Node.js e tecnologias cloud.",
    images: ["/logo.png"],
  },
  keywords:
    "desenvolvimento web, desenvolvimento sob medida, sistemas personalizados, aplicativos, desenvolvimento premium, desenvolvimento profissional",
  robots: "index, follow",
  authors: [{ name: "Valdery Alves" }],
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // IDs das ferramentas de analytics
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "XXXXXXXXXXXXXXXXX";

  return (
    <html
      lang="pt-BR"
      className={`${inter.className} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');`}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${fbPixelId}');
          fbq('track', 'PageView');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
          />
        </noscript>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
