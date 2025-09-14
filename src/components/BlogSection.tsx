import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Orchestrating Multiple AI Tools: Building Consensus CLI',
    excerpt:
      'Exploring how to orchestrate multiple AI tools effectively and building consensus-driven command line interfaces. A deep dive into practical AI implementation strategies for modern development workflows.',
    date: 'Sep 13, 2025',
    readTime: '3 min read',
    category: 'AI & Innovation',
    link: 'https://www.linkedin.com/pulse/orchestrating-multiple-ai-tools-building-consensus-cli-shubhendu-vaid-5m9te/',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Efficiently retrieving data from 1 billion records',
    excerpt:
      'Retrieving large-scale datasets efficiently is key to maintaining competitive, high-performing applications. For many developers and engineers, the challenge isn&apos;t just in storing massive amounts of data but in ensuring that data retrieval remains quick and reliable, even as datasets grow to millions or billions of records.',
    date: 'Nov 10, 2024',
    readTime: '10 min read',
    category: 'Backend Engineering',
    link: 'https://www.linkedin.com/pulse/efficiently-retrieving-data-from-1-billion-records-shubhendu-vaid-bo7we/',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Innovation with Practicality in Engineering Leadership',
    excerpt:
      'Balancing innovation with practical implementation is crucial for engineering leaders. Learn how to foster creativity while maintaining delivery excellence and team productivity.',
    date: 'Jul 6, 2024',
    readTime: '4 min read',
    category: 'Engineering Leadership',
    link: 'https://www.linkedin.com/pulse/innovation-practicality-why-engineering-leads-need-minded-vaid-qleze/',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Engineering Management and Leadership Styles',
    excerpt:
      'Understanding different leadership styles in engineering management and how to adapt your approach based on team dynamics, project requirements, and organizational culture.',
    date: 'Apr 21, 2024',
    readTime: '5 min read',
    category: 'Engineering Management',
    link: 'https://www.linkedin.com/pulse/from-engineer-engineering-manager-shubhendu-vaid-cvk9e/',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Node.js Microservices with DynamoDB',
    excerpt:
      'Building scalable microservices using Node.js and DynamoDB. Explore patterns for data modeling, performance optimization, and maintaining consistency in distributed systems.',
    date: 'Apr 3, 2024',
    readTime: '6 min read',
    category: 'Microservices',
    link: 'https://www.linkedin.com/pulse/how-create-nodejs-microservice-persisting-data-dynamodb-vaid-dscke/',
    image:
      'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
  {
    title: 'Leveraging Adapter Design Pattern for Seamless CMS Integrations',
    excerpt:
      'In the ever-evolving landscape of content management systems (CMS), creating robust integrations with various platforms can be a challenging yet crucial task. I am excited to share our successful journey in implementing the Adapter Design Pattern to streamline and enhance our CMS integrations.',
    date: 'Feb 20, 2024',
    readTime: '2 min read',
    category: 'Architecture',
    link: 'https://medium.com/@vaidshubhendu/leveraging-adapter-design-pattern-for-seamless-cms-integrations-15b8544f4bed',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1280&q=80',
  },
];

const BlogSection = () => {
  return (
    <div title="Latest Articles" id="section-articles">
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Insights on engineering leadership, architecture, and building
              scalable systems that drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                      <ArrowRight className="h-4 w-4 text-gray-700" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span className="font-medium">{post.date}</span>
                    </div>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full group/btn border-2 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Read Article
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/shubhendu-vaid/recent-activity/all/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View All Articles
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
