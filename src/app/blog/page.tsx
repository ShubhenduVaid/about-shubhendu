import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import data from '@/data';
import { config } from '@/lib/config';
import { getAllPosts } from '@/content/blog';

const title = 'Blog';
const description =
  'On-site articles by Shubhendu Vaid on engineering leadership, architecture, and building reliable platforms.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${config.app.url}/blog`,
  },
  openGraph: {
    title,
    description,
    url: `${config.app.url}/blog`,
  },
  twitter: {
    title,
    description,
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

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
                <a href="/rss.xml" className="inline-flex items-center gap-2">
                  <Rss className="h-4 w-4" />
                  RSS feed
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <time
                        className="font-medium"
                        itemProp="datePublished"
                        dateTime={post.dateIso}
                      >
                        {post.date}
                      </time>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    <span itemProp="headline">{post.title}</span>
                  </h2>
                  <p
                    className="text-gray-600 line-clamp-3 leading-relaxed"
                    itemProp="description"
                  >
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full group/btn border-2 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                    asChild
                  >
                    <Link
                      href={post.link}
                      className="flex items-center justify-center gap-2"
                      itemProp="url"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
