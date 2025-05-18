import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-10 md:py-10 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="gradient-text">Shubhendu Vaid</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-800">
                Principal Engineer
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                Engineering Leader with 14+ years of experience delivering
                scalable, high-quality software. Specializing in Next.js, React,
                Node.js, and event-driven architecture.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#007bff] hover:bg-[#0056b3]/90 text-white rounded-md">
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
                  Latest Updates
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="bg-teal-100 p-1 rounded mt-1">
                      <ArrowRight size={14} className="text-teal-700" />
                    </div>
                    <p className="text-sm">
                      Leading the Convergence Platform at BT Group to enable
                      seamless integration of products and services
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-blue-100 p-1 rounded mt-1">
                      <ArrowRight size={14} className="text-blue-700" />
                    </div>
                    <p className="text-sm">
                      Developing Multibrand Framework for creating multiple
                      brands from a single codebase
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-purple-100 p-1 rounded mt-1">
                      <ArrowRight size={14} className="text-purple-700" />
                    </div>
                    <p className="text-sm">
                      Overseeing 8 engineering squads and shaping technical
                      roadmaps at BT Group
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="link"
                className="text-primary flex items-center gap-1 p-0 h-auto font-medium"
              >
                Connect with me <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
