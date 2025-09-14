import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Database, ArrowRight } from 'lucide-react';
import data from '../data';

const AboutSection = () => {
  const { about } = data;
  return (
    <div title="About Me" id="section-about">
      <section className="py-5 md:py-10 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-6 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-600">{about?.headline}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 hidden lg:block">
              {about?.contents.map((item, index) => (
                <div key={index} className="text-left">
                  <p className="text-gray-600">{item}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <Code className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-2">Frontend Engineering</h3>
                  <p className="text-sm text-gray-500">
                    Next.js, React, TypeScript for creating exceptional user
                    experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    <Server className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-2">Backend Engineering</h3>
                  <p className="text-sm text-gray-500">
                    Node.js, Java, Microservices, Event-Driven Architecture,
                    Kafka
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <Database className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-2">Database Systems</h3>
                  <p className="text-sm text-gray-500">
                    MongoDB, PostgreSQL, Cassandra for scalable data solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4">
                    <ArrowRight className="text-amber-600" size={24} />
                  </div>
                  <h3 className="font-medium mb-2">Leadership</h3>
                  <p className="text-sm text-gray-500">
                    Team management, technical mentoring, and technical strategy
                    development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
