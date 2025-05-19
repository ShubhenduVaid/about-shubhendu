import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Leveraging Adapter Design Pattern for Seamless CMS Integrations",
    excerpt:
      "In the ever-evolving landscape of content management systems (CMS), creating robust integrations with various platforms can be a challenging yet crucial task. I am excited to share our successful journey in implementing the Adapter Design Pattern to streamline and enhance our CMS integrations.",
    date: "Feb 20, 2024",
    readTime: "2 min read",
    category: "Architecture",
    link: "https://medium.com/@vaidshubhendu/leveraging-adapter-design-pattern-for-seamless-cms-integrations-15b8544f4bed",
    image:
      "https://miro.medium.com/v2/resize:fit:1280/format:webp/1*uMLUCtCQRW6gADkOEGgDzA.png",
  },
  {
    title: "From Engineer to Engineering Manager",
    excerpt:
      "As we navigate the journey from an engineer to engineering manager, it's essential to recognise that there are distinct styles or approaches that engineers often fall into when making this transition, and by understanding these one can decide on where they need to improve on.",
    date: "April 21, 2024",
    readTime: "5 min read",
    category: "Engineering Management",
    link: "https://www.linkedin.com/pulse/from-engineer-engineering-manager-shubhendu-vaid-cvk9e/?trackingId=1YUcV2vHey4HItOIn47WQw%3D%3D",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQGSmSJDDWIbMA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1713726280779?e=1753315200&v=beta&t=K3oBfkTVOm_TafJiRfHA7Nm8Yh2lzgQZWgT2b-R8rZ8",
  },
  {
    title: "Efficiently retrieving data from 1 billion records.",
    excerpt:
      "Retrieving large-scale datasets efficiently is key to maintaining competitive, high-performing applications. For many developers and engineers, the challenge isn’t just in storing massive amounts of data but in ensuring that data retrieval remains quick and reliable, even as datasets grow to millions or billions of records.",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    category: "Backend Engineering",
    link: "https://www.linkedin.com/pulse/efficiently-retrieving-data-from-1-billion-records-shubhendu-vaid-bo7we/?trackingId=tsR%2FejSlrwXo1B8Q1B4dYw%3D%3D",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQHKTfr0nBfbiQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731010828278?e=1753315200&v=beta&t=FarMT9LpgYCQyxEZOJc1YrKuD-Q0Dip6DYFoqrgKeZc",
  },
];

const BlogSection = () => {
  return (
    <div id="section-articles">
      <section className="py-10 md:py-10 bg-gray-50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Thoughts and insights on data products, analytics, and industry
                trends.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-1 border-gray-800 hover:bg-gray-200"
            >
              View all articles
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="card-hover animate-fade-in">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-r from-navy-700 to-teal-700 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-2 py-1 border-1 border-black shadow-2xl bg-white text-navy-800 text-xs  font-medium rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <a
                    href={post?.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="link"
                      className="p-0 h-auto flex items-center gap-1 text-primary font-medium"
                    >
                      Read more <ArrowRight size={16} />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
