export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

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
      item: `https://www.aadhyaearthmovers.com${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  );
}
