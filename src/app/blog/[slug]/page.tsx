import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import data from '@/data';
import { config } from '@/lib/config';
import {
  getAllPosts,
  getPostBySlug,
  getPostMetaBySlug,
} from '@/content/blog';

type BlogPostPageProps = {
  params: { slug: string };
};

export const generateStaticParams = async () =>
  getAllPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({
  params,
}: BlogPostPageProps): Promise<Metadata> => {
  const post = getPostMetaBySlug(params.slug);

  if (!post) {
    return {};
  }

  const canonical = `${config.app.url}${post.link}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      images: [{ url: post.image }],
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const canonical = `${config.app.url}${post.link}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.dateIso,
    author: {
      '@type': 'Person',
      name: data.name,
      url: config.app.url,
    },
    image: post.image,
    url: canonical,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    keywords: post.tags.join(', '),
  };

  const { Component } = post;

  return (
    <main className="flex-grow">
      <section className="pt-8 pb-16 md:pt-12 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-wide text-blue-600 font-semibold">
                {post.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mt-3">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 mt-4">{post.excerpt}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500 mt-4">
                <span>By {data.name}</span>
                <span>•</span>
                <time dateTime={post.dateIso}>{post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <Image
                src={post.image}
                alt={post.title}
                width={1200}
                height={630}
                sizes="(min-width: 1024px) 768px, 100vw"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <article
              className="mdx"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <Component />
            </article>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
