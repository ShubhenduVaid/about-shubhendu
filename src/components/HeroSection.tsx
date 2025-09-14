import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import data from '../data';

/**
 * HeroSection component displays the main landing section with personal information,
 * including name, title, description, and call-to-action buttons.
 *
 * @returns {JSX.Element} The hero section component
 */
const HeroSection = () => {
  const { name, title, description, projects, contact } = data;
  return (
    <section id="hero" aria-label="Introduction" className="py-5 md:py-10 overflow-hidden">
      <div className="container text-center md:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          <header className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                <span className="gradient-text" itemProp="name">{name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-navy-800" itemProp="jobTitle">
                {title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl" itemProp="description">
                {description}
              </p>
            </div>

            <nav className="flex flex-wrap gap-4 justify-center md:justify-start" aria-label="Main actions">
              <a
                href={contact?.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="View my work on GitHub"
              >
                <Button className="bg-teal-900 hover:bg-teal-600 text-white rounded-md">
                  View my work
                </Button>
              </a>
              <a
                href={'#articles'}
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Read my blog articles"
              >
                <Button
                  variant="outline"
                  className="border-1 border-gray-800 hover:bg-gray-200"
                >
                  Read my blog
                </Button>
              </a>
            </nav>
          </header>

          <aside className="relative hidden lg:block" aria-label="Latest projects showcase">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-teal-200 rounded-full filter blur-3xl opacity-30" aria-hidden="true"></div>
            <div className="relative z-10 bg-gradient-to-br from-white to-gray-100 p-6 rounded-2xl shadow-lg border border-gray-200 card-hover">
              <div className="text-navy-800 mb-4">
                <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-3">
                  Latest Projects
                </h3>
                <div className="space-y-4">
                  {projects?.map((project, index) => (
                    <article key={index} className="flex items-start gap-2">
                      <div className="bg-blue-100 p-1 rounded mt-1" aria-hidden="true">
                        <ArrowRight size={14} className="text-blue-700" />
                      </div>
                      <p className="flex items-end text-sm">
                        {project.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
              <a
                href={contact?.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Connect with me on LinkedIn"
              >
                <Button
                  variant="link"
                  className="text-primary flex items-center gap-1 p-0 h-auto font-medium"
                >
                  Connect with me <ArrowRight size={14} aria-hidden="true" />
                </Button>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
