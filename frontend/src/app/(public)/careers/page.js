import { createMetadata } from "@/lib/seo";
import CareersPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Careers | Join Aadhya Earth Movers in Hyderabad",
  description: "View current job openings at Aadhya Earth Movers, including excavator operators, site supervisors, and heavy equipment mechanics in Hyderabad.",
  pathname: "/careers",
  keywords: "careers, jobs, aadhya earth movers, excavator operator, site supervisor, heavy equipment mechanic"
});

export default function Page() {
  return <CareersPageClient />;
}
