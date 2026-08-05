import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { siteUrl, siteName, defaultDescription, defaultKeywords, defaultImage } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aadhya Earth Movers | Earth Moving & Construction Services in Hyderabad",
  description: defaultDescription,
  keywords: defaultKeywords,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Aadhya Earth Movers | Earth Moving & Construction Services in Hyderabad",
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}${defaultImage}`,
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadhya Earth Movers | Earth Moving & Construction Services in Hyderabad",
    description: defaultDescription,
    images: [`${siteUrl}${defaultImage}`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/images/aem-logo.jpeg", type: "image/jpeg" }],
    apple: "/images/aem-logo-white-transparent.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": siteName,
      "url": siteUrl,
      "description": defaultDescription,
      "sameAs": []
    },
    {
      "@type": "Organization",
      "name": siteName,
      "url": siteUrl,
      "logo": `${siteUrl}${defaultImage}`,
      "sameAs": [],
      "email": "mailto:prashanthvk494@gmail.com",
      "telephone": "+91 8179675631",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shankar Nagar PLOT NO 95/P",
        "addressLocality": "Hayatnagar",
        "addressRegion": "Telangana",
        "postalCode": "501505",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "LocalBusiness",
      "name": siteName,
      "image": [`${siteUrl}${defaultImage}`],
      "@id": siteUrl,
      "url": siteUrl,
      "telephone": "+91 8179675631",
      "email": "mailto:prashanthvk494@gmail.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shankar Nagar PLOT NO 95/P",
        "addressLocality": "Hayatnagar",
        "addressRegion": "Telangana",
        "postalCode": "501505",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.333122,
        "longitude": 78.616183
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "06:00",
          "closes": "22:00"
        }
      ],
      "sameAs": [],
      "areaServed": "Hyderabad, Telangana"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="icon" href="/images/aem-logo.jpeg" sizes="32x32" type="image/jpeg" />
        <link rel="shortcut icon" href="/images/aem-logo.jpeg" />
        <link rel="apple-touch-icon" href="/images/aem-logo-white-transparent.png" />
        <meta name="theme-color" content="#0A0A0A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
