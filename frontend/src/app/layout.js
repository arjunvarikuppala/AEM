import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aadhya Earth Movers | Professional Earth Moving & Construction",
  description: "Premium earth moving, excavation, rock breaking, road construction, and heavy equipment rental services in Hyderabad, India.",
  keywords: "earth moving, excavation, rock breaking, road construction, heavy equipment rental, Hyderabad",
  openGraph: {
    title: "Aadhya Earth Movers",
    description: "Premium earth moving and construction services.",
    url: "https://www.aadhyaearthmovers.com",
    siteName: "Aadhya Earth Movers",
    locale: "en_IN",
    type: "website",
  },
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
      </head>
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
