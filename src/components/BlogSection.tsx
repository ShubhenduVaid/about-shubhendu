import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "Leveraging AI for Enhanced Data Analytics",
    excerpt:
      "How artificial intelligence is transforming the way organizations extract insights from their data.",
    date: "April 18, 2025",
    readTime: "5 min read",
    category: "Data Science",
  },
  {
    title: "Building Data Products That Users Love",
    excerpt:
      "Key principles for designing data products with excellent user experience and meaningful insights.",
    date: "April 2, 2025",
    readTime: "8 min read",
    category: "Product Management",
  },
  {
    title: "The Future of Business Intelligence",
    excerpt:
      "Emerging trends in BI tools and how they're reshaping decision-making processes in modern businesses.",
    date: "March 15, 2025",
    readTime: "6 min read",
    category: "Analytics",
  },
];

const BlogSection = () => {
  return (
    <section className="section bg-gray-50">
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
          <Button className="mt-4 md:mt-0" variant="outline">
            View all articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-hover animate-fade-in">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-r from-navy-700 to-teal-700 relative">
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 bg-white text-navy-800 text-xs font-medium rounded">
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
                <Button
                  variant="link"
                  className="p-0 h-auto flex items-center gap-1 text-primary font-medium"
                >
                  Read more <ArrowRight size={16} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
