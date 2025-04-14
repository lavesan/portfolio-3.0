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
  title: "Valdery Alves | Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience. Specialized in React, Node.js, and scalable solutions.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Valdery Alves | Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience. Specialized in React, Node.js, and scalable solutions.",
    url: "https://valderyalves.com.br",
    siteName: "Valdery Alves | Senior Software Engineer",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valdery Alves | Senior Software Engineer",
    description:
      "Senior Software Engineer with 6+ years of experience. Specialized in React, Node.js, and scalable solutions.",
    images: ["/opengraph.png"],
  },
  keywords:
    "Software Engineer, React, Node.js, JavaScript, TypeScript, Web Development, Senior Software Engineer, Senior Developer",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
  const fbPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "XXXXXXXXXXXXXXXXX";

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${playfair.variable} dark`}
      suppressHydrationWarning
    >
      <head>
        const gtmId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gtmId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmId}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Route change tracking for Google Analytics */}
        <Script id="ga-route-tracking" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              window.previousPath = window.location.pathname;
              const handleRouteChange = () => {
                const newPath = window.location.pathname;
                if (newPath !== window.previousPath) {
                  gtag('config', '${gtmId}', {
                    page_path: newPath,
                  });
                  window.previousPath = newPath;
                }
              };

              window.addEventListener('popstate', handleRouteChange);
              const pushState = history.pushState;
              history.pushState = function() {
                pushState.apply(history, arguments);
                handleRouteChange();
              };
            }
          `}
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
