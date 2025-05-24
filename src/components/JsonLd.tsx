import data from "@/data";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    url: "https://www.shubhenduvaid.com",
    sameAs: [data.contact.linkedin, data.contact.github],
    worksFor: {
      "@type": "Organization",
      name: "BT Group",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: data.location,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
