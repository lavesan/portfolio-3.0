import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TranslationsProvider } from "@/hooks/use-translations"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Desenvolvimento sob medida para negócios que não podem errar",
  description: "Sites, sistemas e apps pensados para escalar com eficiência — sem amadorismo, sem gambiarra.",
  openGraph: {
    title: "Desenvolvimento sob medida para negócios que não podem errar",
    description: "Sites, sistemas e apps pensados para escalar com eficiência — sem amadorismo, sem gambiarra.",
    url: "https://seudominio.com.br",
    siteName: "Desenvolvimento Web Premium",
    images: [
      {
        url: "https://seudominio.com.br/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Desenvolvimento sob medida para negócios que não podem errar",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  keywords:
    "desenvolvimento web, desenvolvimento sob medida, sistemas personalizados, aplicativos, desenvolvimento premium, desenvolvimento profissional",
  robots: "index, follow",
  authors: [{ name: "Valdery Alves" }],
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // IDs das ferramentas de analytics
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX"
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "XXXXXXXXXXXXXXXXX"

  return (
    <html lang="pt-BR" className={`${inter.className} ${playfair.variable}`} suppressHydrationWarning>
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

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TranslationsProvider>{children}</TranslationsProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'