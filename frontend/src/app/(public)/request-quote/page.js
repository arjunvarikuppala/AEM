import { createMetadata } from "@/lib/seo";
import RequestQuotePageClient from "./page.client";

export const metadata = createMetadata({
  title: "Request Quote | Aadhya Earth Movers Heavy Equipment Rental",
  description: "Request a quote from Aadhya Earth Movers for earthmoving, excavation, road construction, and machinery rental services in Hyderabad.",
  pathname: "/request-quote",
  keywords: "request quote, aadhya earth movers, earthmoving quote, equipment rental quote, excavation quote"
});

export default function Page() {
  return <RequestQuotePageClient />;
}
