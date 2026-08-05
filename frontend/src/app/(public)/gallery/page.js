import { createMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import GalleryPageClient from "./page.client";

export const metadata = createMetadata({
  title: "Gallery | Aadhya Earth Movers Projects & Equipment",
  description: "Browse the Aadhya Earth Movers gallery showcasing heavy machinery operations, excavation sites, roadworks, and infrastructure projects in Hyderabad.",
  pathname: "/gallery",
  keywords: "gallery, aadhya earth movers, earthmoving projects, construction images, heavy equipment"
});

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }]} />
      <GalleryPageClient />
    </>
  );
}
