import { createMetadata } from "@/lib/seo";
import ContactPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Contact Aadhya Earth Movers | Request a Quote in Hyderabad",
  description: "Contact Aadhya Earth Movers for excavation, earthmoving, rock breaking, and machinery rental services in Hyderabad, Telangana.",
  pathname: "/contact",
  keywords: "contact, aadhya earth movers, quote request, excavation service inquiry, Hyderabad"
});

export default function Page() {
  return <ContactPageClient />;
}
