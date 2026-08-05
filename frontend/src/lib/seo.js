export const siteUrl = "https://www.aadhyaearthmovers.com";
export const siteName = "Aadhya Earth Movers";
export const defaultDescription = "Premium earth moving, excavation, rock breaking, road construction, and heavy equipment rental services in Hyderabad, India.";
export const defaultKeywords = "earth moving, excavation, rock breaking, road construction, heavy equipment rental, Hyderabad, civil construction";
export const defaultImage = "/images/aem-logo.jpeg";

export function createMetadata({ title, description, pathname, keywords }) {
  const url = `${siteUrl}${pathname}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: `${siteUrl}${defaultImage}`,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}${defaultImage}`],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
