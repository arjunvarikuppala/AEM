import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServicesPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Services | Excavation, Road Construction, & Equipment Rental",
  description: "Aadhya Earth Movers provides excavation, road construction, trenching, rock breaking, and heavy machinery rental services in Hyderabad.",
  pathname: "/services",
  keywords: "services, excavation, road construction, equipment rental, rock breaking, trenching"
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Earth Moving and Heavy Equipment Rental",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Aadhya Earth Movers",
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
  "areaServed": "Hyderabad, Telangana",
  "audience": {
    "@type": "Audience",
    "audienceType": "Construction Companies, Contractors, Property Developers"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <ServicesPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
