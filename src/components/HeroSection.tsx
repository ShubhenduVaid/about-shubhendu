import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import data from "../data";

const HeroSection = () => {
  const { name, title, description, projects, contact } = data;
  return (
    <div id="section-hero">
      <section className="py-10 md:py-10 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="gradient-text">{name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-800">
                  {title}
                </h2>
                <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-teal-900 hover:bg-teal-600 text-white rounded-md">
                  View my work
                </Button>
                <Button
                  variant="outline"
                  className="border-1 border-gray-800 hover:bg-gray-200"
                >
                  Read my blog
                </Button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-teal-200 rounded-full filter blur-3xl opacity-30"></div>
              <div className="relative z-10 bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 card-hover">
                <div className="text-navy-800 mb-4">
                  <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-3">
                    Latest Projects
                  </h3>
                  <div className="space-y-4">
                    {projects?.map((project, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="bg-blue-100 p-1 rounded mt-1">
                          <ArrowRight size={14} className="text-blue-700" />
                        </div>
                        <p className="flex items-end text-sm">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <a
                  href={contact?.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="link"
                    className="text-primary flex items-center gap-1 p-0 h-auto font-medium"
                  >
                    Connect with me <ArrowRight size={14} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
