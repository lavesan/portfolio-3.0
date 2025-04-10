import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const isEnglish = params.lang === "en";

  return {
    title: isEnglish
      ? "Valdery Alves | Senior Full Stack Developer"
      : "Valdery Alves | Desenvolvedor Full Stack Sênior",
    description: isEnglish
      ? "Senior Full Stack Developer with 10+ years of experience. Specialized in React, Node.js, and scalable solutions."
      : "Desenvolvedor Full Stack Sênior com 10+ anos de experiência. Especializado em React, Node.js e soluções escaláveis.",
    icons: {
      icon: "/icon.png",
    },
    openGraph: {
      title: isEnglish
        ? "Valdery Alves | Senior Full Stack Developer"
        : "Valdery Alves | Desenvolvedor Full Stack Sênior",
      description: isEnglish
        ? "Senior Full Stack Developer with 10+ years of experience. Specialized in React, Node.js, and scalable solutions."
        : "Desenvolvedor Full Stack Sênior com 10+ anos de experiência. Especializado em React, Node.js e soluções escaláveis.",
      url: "https://valderyalves.com.br",
      siteName: isEnglish
        ? "Valdery Alves | Senior Full Stack Developer"
        : "Valdery Alves | Desenvolvedor Full Stack Sênior",
      images: [
        {
          url: "/opengraph.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: isEnglish ? "en_US" : "pt_BR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isEnglish
        ? "Valdery Alves | Senior Full Stack Developer"
        : "Valdery Alves | Desenvolvedor Full Stack Sênior",
      description: isEnglish
        ? "Senior Full Stack Developer with 10+ years of experience. Specialized in React, Node.js, and scalable solutions."
        : "Desenvolvedor Full Stack Sênior com 10+ anos de experiência. Especializado em React, Node.js e soluções escaláveis.",
      images: ["/opengraph.png"],
    },
    keywords: isEnglish
      ? "Full Stack Developer, React, Node.js, JavaScript, TypeScript, Web Development, Software Engineer, Senior Developer"
      : "Desenvolvedor Full Stack, React, Node.js, JavaScript, TypeScript, Desenvolvimento Web, Engenheiro de Software, Desenvolvedor Sênior",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    authors: [{ name: "Valdery Alves" }],
    generator: "v0.dev",
    verification: {
      google: "google-site-verification-code",
    },
  };
}

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
      className={`${inter.variable} ${playfair.variable} dark`}
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
      <body className={`${inter.variable} ${playfair.variable} dark`}>
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
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
