import { createMetadata } from "@/lib/seo";
import AboutPageClient from "./page.client";

export const metadata = createMetadata({
  title: "About Aadhya Earth Movers | Hyderabad Earth Moving Experts",
  description: "Learn about Aadhya Earth Movers' experienced civil engineering team, safety-first culture, and professional earthmoving services in Hyderabad.",
  pathname: "/about",
  keywords: "about aadhya earth movers, earthmoving experts, Hyderabad heavy equipment, construction contractors"
});

export default function Page() {
  return <AboutPageClient />;
}
