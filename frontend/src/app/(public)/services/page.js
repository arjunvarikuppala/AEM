import { createMetadata } from "@/lib/seo";
import ServicesPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Services | Excavation, Road Construction, & Equipment Rental",
  description: "Aadhya Earth Movers provides excavation, road construction, trenching, rock breaking, and heavy machinery rental services in Hyderabad.",
  pathname: "/services",
  keywords: "services, excavation, road construction, equipment rental, rock breaking, trenching"
});

export default function Page() {
  return <ServicesPageClient />;
}
