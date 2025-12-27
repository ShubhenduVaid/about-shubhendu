import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import data, { caseStudies } from '@/data';
import { config } from '@/lib/config';

const title = 'Case Studies';
const description =
  'Selected product and platform initiatives led by Shubhendu Vaid, focused on scalable architecture, performance, and team delivery.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${config.app.url}/case-studies`,
  },
  openGraph: {
    title,
    description,
    url: `${config.app.url}/case-studies`,
  },
  twitter: {
    title,
    description,
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="flex-grow">
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container text-center md:text-left">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
              {data.name}
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-3">{title}</h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button asChild className="bg-teal-900 hover:bg-teal-600 text-white">
                <Link href="/#section-contact">Start a conversation</Link>
              </Button>
              <Button variant="outline" asChild className="border-gray-800">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Download resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.slug}
                id={study.slug}
                className="h-full"
                itemScope
                itemType="https://schema.org/CaseStudy"
              >
                <Card className="h-full card-hover">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{study.client}</span>
                      <span>{study.period}</span>
                    </div>
                    <h2 className="text-2xl font-semibold" itemProp="name">
                      {study.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed" itemProp="description">
                      {study.summary}
                    </p>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="link"
              className="text-primary inline-flex items-center gap-2"
              asChild
            >
              <Link href="/leadership-philosophy">
                Learn about my leadership philosophy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
