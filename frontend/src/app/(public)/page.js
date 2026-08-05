import { createMetadata } from "@/lib/seo";
import HomePageClient from "./page.client";

export const metadata = createMetadata({
  title: "Aadhya Earth Movers | Earth Moving & Construction Services in Hyderabad",
  description: "Aadhya Earth Movers offers professional excavation, earthwork, rock breaking, road construction, and heavy equipment rental services across Hyderabad and Telangana.",
  pathname: "/",
  keywords: "earth moving, excavation service, rock breaking, road construction, heavy equipment rental, Hyderabad"
});

export default function Page() {
  return <HomePageClient />;
}
