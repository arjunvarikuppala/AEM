import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FaqSection from "@/components/ui/FaqSection";
import HomePageClient from "./page.client";

export const metadata = createMetadata({
  title: "Aadhya Earth Movers | Earth Moving & Construction Services in Hyderabad",
  description: "Aadhya Earth Movers offers professional excavation, earthwork, rock breaking, road construction, and heavy equipment rental services across Hyderabad and Telangana.",
  pathname: "/",
  keywords: "earth moving, excavation service, rock breaking, road construction, heavy equipment rental, Hyderabad"
});

const faqData = [
  {
    question: "Do you provide earth moving services across Hyderabad?",
    answer: "Yes — Aadhya Earth Movers delivers excavation, land leveling, rock breaking, and heavy equipment rental services across Hyderabad and nearby Telangana regions.",
  },
  {
    question: "Can I rent excavators and tippers with operators?",
    answer: "We offer a full fleet of excavators, tippers, rollers, and rock-breaking equipment with experienced operators for safe site execution.",
  },
  {
    question: "How do I request a quote for construction or excavation work?",
    answer: "Use our request quote page, call +91 8179675631, or WhatsApp +91 8499014721 to get a fast, site-specific estimate.",
  },
  {
    question: "Do you handle drainage, manholes, and road preparation?",
    answer: "Yes — we execute drainage trenches, HDPE pipeline installation, concrete manholes, road sub-base grading, and compaction for civil infrastructure projects.",
  },
  {
    question: "What areas does Aadhya Earth Movers serve?",
    answer: "Our services cover Hyderabad city, surrounding suburbs, and key Telangana development corridors for both commercial and residential construction projects.",
  },
];

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }]} />
      <HomePageClient />
      <FaqSection faqs={faqData} />
    </>
  );
}
