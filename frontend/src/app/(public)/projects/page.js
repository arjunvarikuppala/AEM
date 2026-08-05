import { createMetadata } from "@/lib/seo";
import ProjectsPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Projects | Aadhya Earth Movers Completed Infrastructure Work",
  description: "Explore Aadhya Earth Movers' completed projects including drainage, trenching, roadways, and site leveling across Hyderabad and Telangana.",
  pathname: "/projects",
  keywords: "projects, aadhya earth movers, earthmoving projects, infrastructure, drainage, roadworks"
});

export default function Page() {
  return <ProjectsPageClient />;
}
