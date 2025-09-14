import data from '@/data';

export default function JsonLd() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.shubhenduvaid.com/#person',
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    url: 'https://www.shubhenduvaid.com',
    image: 'https://www.shubhenduvaid.com/opengraph-image.jpg',
    sameAs: [
      data.contact.linkedin,
      data.contact.github,
      'https://medium.com/@vaidshubhendu'
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.bt.com/#organization',
      name: 'BT Group',
      url: 'https://www.bt.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressRegion: 'England',
        addressCountry: 'GB'
      }
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'England',
      addressCountry: 'GB'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Bachelor of Technology in Computer Science'
    },
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'AWS',
      'Event-Driven Architecture',
      'Microservices',
      'Software Engineering Leadership'
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Software Engineering Manager',
      occupationLocation: {
        '@type': 'City',
        name: 'London',
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom'
        }
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Senior Engineering Manager Salary',
        currency: 'GBP'
      }
    }
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.shubhenduvaid.com/#website',
    url: 'https://www.shubhenduvaid.com',
    name: 'Shubhendu Vaid - Engineering Leader',
    description: 'Professional portfolio of Shubhendu Vaid, Senior Engineering Leader in London, UK',
    author: {
      '@id': 'https://www.shubhenduvaid.com/#person'
    },
    inLanguage: 'en-GB',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@id': 'https://www.shubhenduvaid.com/#person'
    }
  };

  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.shubhenduvaid.com/#service',
    name: 'Software Engineering Leadership Services',
    description: 'Expert software engineering leadership, architecture consulting, and technical mentoring services',
    provider: {
      '@id': 'https://www.shubhenduvaid.com/#person'
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom'
      },
      {
        '@type': 'Country', 
        name: 'Europe'
      }
    ],
    serviceType: [
      'Software Engineering Leadership',
      'Technical Architecture Consulting',
      'Team Mentoring and Development',
      'Scalable Software Solutions'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
      />
    </>
  );
}
