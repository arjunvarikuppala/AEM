import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import AboutPageClient from "./page.client";

export const metadata = createMetadata({
  title: "About Aadhya Earth Movers | Hyderabad Earth Moving Experts",
  description: "Learn about Aadhya Earth Movers' experienced civil engineering team, safety-first culture, and professional earthmoving services in Hyderabad.",
  pathname: "/about",
  keywords: "about aadhya earth movers, earthmoving experts, Hyderabad heavy equipment, construction contractors"
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "url": "https://www.aadhyaearthmovers.com/about",
  "name": "About Aadhya Earth Movers",
  "description": "Learn about Aadhya Earth Movers' experienced civil engineering team, safety-first culture, and professional earthmoving services in Hyderabad.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Aadhya Earth Movers",
    "url": "https://www.aadhyaearthmovers.com"
  }
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      <AboutPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
