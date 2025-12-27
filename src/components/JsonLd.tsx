import data, { articles, caseStudies } from '@/data';
import { faqs } from '@/data/faqs';
import { config } from '@/lib/config';

export default function JsonLd() {
  const baseUrl = config.app.url;
  const personId = `${baseUrl}/#person`;
  const websiteId = `${baseUrl}/#website`;
  const serviceId = `${baseUrl}/#service`;
  const primaryEducation = data.education[0];
  const sameAs = data.socials.map((social) => social.url);

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    url: baseUrl,
    image: `${baseUrl}/opengraph-image.jpg`,
    email: data.contact.email,
    ...(data.contact.phone ? { telephone: data.contact.phone } : {}),
    sameAs,
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.bt.com/#organization',
      name: 'BT Group',
      url: 'https://www.bt.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'London',
        addressRegion: 'England',
        addressCountry: 'GB',
      },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressRegion: 'England',
      addressCountry: 'GB',
    },
    alumniOf: primaryEducation
      ? {
          '@type': 'CollegeOrUniversity',
          name: primaryEducation.institution ?? primaryEducation.degree,
          address: {
            '@type': 'PostalAddress',
            addressCountry: primaryEducation.location,
          },
        }
      : undefined,
    knowsAbout: data.skills,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Software Engineering Manager',
      occupationLocation: {
        '@type': 'City',
        name: 'London',
        containedInPlace: {
          '@type': 'Country',
          name: 'United Kingdom',
        },
      },
      estimatedSalary: {
        '@type': 'MonetaryAmountDistribution',
        name: 'Senior Engineering Manager Salary',
        currency: 'GBP',
      },
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    url: baseUrl,
    name: 'Shubhendu Vaid - Engineering Leader',
    description:
      'Professional portfolio of Shubhendu Vaid, Senior Engineering Leader in London, UK',
    author: {
      '@id': personId,
    },
    inLanguage: 'en-GB',
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@id': personId,
    },
  };

  const profilePageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${baseUrl}/#profile`,
    name: `${data.name} - ${data.title}`,
    description: data.description,
    mainEntity: {
      '@id': personId,
    },
    inLanguage: 'en-GB',
  };

  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': serviceId,
    name: 'Software Engineering Leadership Services',
    description:
      'Expert software engineering leadership, architecture consulting, and technical mentoring services',
    provider: {
      '@id': personId,
    },
    areaServed: [
      {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      {
        '@type': 'Country',
        name: 'Europe',
      },
    ],
    serviceType: [
      'Software Engineering Leadership',
      'Technical Architecture Consulting',
      'Team Mentoring and Development',
      'Scalable Software Solutions',
      'Generative AI Advisory',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: data.contact.email,
      ...(data.contact.phone ? { telephone: data.contact.phone } : {}),
      contactType: 'inquiries',
      areaServed: 'GB',
      availableLanguage: ['en'],
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const articleListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: article.link,
      name: article.title,
    })),
  };

  const caseStudyListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Case Studies',
    itemListElement: caseStudies.map((study, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${baseUrl}/case-studies#${study.slug}`,
      name: study.title,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyListJsonLd) }}
      />
    </>
  );
}
