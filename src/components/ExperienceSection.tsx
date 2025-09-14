'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

import data from '../data';

const ExperienceSection = () => {
  const isMobile = useIsMobile();

  const { experiences } = data;
  return (
    <div title="Experience" id="section-experience">
      <section className="py-5 md:py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600">
              Over 14 years of experience building and scaling enterprise
              software solutions.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -ml-0.5"></div>

            <div className="space-y-12">
              {!isMobile &&
                experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={`my-0 md:my-0 relative md:flex ${
                      index % 2 === 0 ? 'md:flex-row' : ''
                    }`}
                  >
                    <div className="hidden md:block absolute left-1/2 top-5 -ml-2.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-white shadow"></div>

                    <div className="md:w-1/2 pb-8 md:pb-0 md:pr-8 md:text-right">
                      {index % 2 === 0 ? (
                        <Card className="md:mr-8 card-hover animate-fade-in">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <h4 className="text-primary font-medium mb-2">
                              {exp.company}
                            </h4>
                            <h4 className="text-primary font-medium mb-2">
                              {exp.location}
                            </h4>
                            <div className="flex items-center text-gray-500 mb-4 md:justify-end">
                              <CalendarIcon className="mr-1" size={16} />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <p className="text-gray-600">{exp.description}</p>
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    <div className="md:w-1/2 md:pl-8">
                      {index % 2 !== 0 ? (
                        <Card className="md:ml-8 card-hover animate-fade-in">
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold">{exp.title}</h3>
                            <h4 className="text-primary font-medium mb-2">
                              {exp.company}
                            </h4>
                            <h4 className="text-primary font-medium mb-2">
                              {exp.location}
                            </h4>
                            <div className="flex items-center text-gray-500 mb-4">
                              <CalendarIcon className="mr-1" size={16} />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <p className="text-gray-600">{exp.description}</p>
                          </CardContent>
                        </Card>
                      ) : (
                        <div className="hidden md:block" />
                      )}
                    </div>

                    <div className="block md:hidden">
                      <Card className="card-hover animate-fade-in">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <h4 className="text-primary font-medium mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex items-center text-gray-500 mb-4">
                            <CalendarIcon className="mr-1" size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <p className="text-gray-600">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              {isMobile &&
                experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="my-4 md:my-6 relative flex flex-col"
                  >
                    <div className="block md:hidden">
                      <Card className="card-hover animate-fade-in">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <h4 className="text-primary font-medium mb-2">
                            {exp.company}
                          </h4>
                          <div className="flex items-center text-gray-500 mb-4">
                            <CalendarIcon className="mr-1" size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <p className="text-gray-600">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;
