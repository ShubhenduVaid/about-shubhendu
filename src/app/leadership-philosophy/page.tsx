import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import data, { achievements, advisoryServices, stats } from '@/data';
import { config } from '@/lib/config';

const title = 'Leadership Philosophy';
const description =
  'How Shubhendu Vaid leads engineering teams, sets technical strategy, and delivers reliable outcomes at scale.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${config.app.url}/leadership-philosophy`,
  },
  openGraph: {
    title,
    description,
    url: `${config.app.url}/leadership-philosophy`,
  },
  twitter: {
    title,
    description,
  },
};

export default function LeadershipPhilosophyPage() {
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
              {data.about.headline}
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
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">How I lead</h2>
            <div className="space-y-4 text-gray-700">
              {data.about.contents.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Focus areas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The leadership and architecture priorities I bring to teams and
              stakeholders.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryServices.map((service) => (
              <Card key={service.title} className="card-hover">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence of delivery outcomes, scale, and leadership impact.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-white p-5 text-center shadow-sm"
              >
                <div className="text-3xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div
                key={achievement}
                className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
                <p className="text-gray-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
