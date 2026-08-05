import Link from "next/link";

export default function Breadcrumbs({ items }) {
  const breadcrumbItems = items.map((item, index) => ({
    ...item,
    position: index + 1,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.href,
    })),
  };

  return (
    <nav className="mb-6 rounded-3xl bg-[#111111]/80 border border-white/10 p-4 text-sm text-gray-300" aria-label="Breadcrumb">
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <span key={item.href} className="inline-flex items-center gap-2">
            <Link href={item.href} className="text-[#F4B400] hover:text-white transition-colors">
              {item.name}
            </Link>
            {index < items.length - 1 && <span className="text-gray-500">/</span>}
          </span>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </nav>
  );
}
