import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ContactPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Contact Aadhya Earth Movers | Request a Quote in Hyderabad",
  description: "Contact Aadhya Earth Movers for excavation, earthmoving, rock breaking, and machinery rental services in Hyderabad, Telangana.",
  pathname: "/contact",
  keywords: "contact, aadhya earth movers, quote request, excavation service inquiry, Hyderabad"
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://www.aadhyaearthmovers.com/contact",
  "name": "Contact Aadhya Earth Movers",
  "description": "Get in touch with Aadhya Earth Movers for earthmoving and infrastructure services in Hyderabad.",
  "mainEntity": {
    "@type": "Organization",
    "name": "Aadhya Earth Movers",
    "telephone": "+91 8179675631",
    "email": "mailto:prashanthvk494@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shankar Nagar PLOT NO 95/P",
      "addressLocality": "Hayatnagar",
      "addressRegion": "Telangana",
      "postalCode": "501505",
      "addressCountry": "IN"
    }
  }
};

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <ContactPageClient />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
