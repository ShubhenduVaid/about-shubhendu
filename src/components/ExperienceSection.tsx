import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

const experiences = [
  {
    title: "Principal Engineer",
    company: "BT Group",
    period: "08/2023 - Present",
    description:
      "Leading the rebuild of B2B Sales and Renewal experience. Architected the Convergence Platform for seamless product integration. Developing Multibrand Framework for multiple brands from a single codebase. Overseeing 8 engineering squads.",
  },
  {
    title: "Software Engineering Manager",
    company: "BT Group",
    period: "04/2022 - 07/2023",
    description:
      "Developed e-commerce transaction journeys for Business Broadband. Architected migration to in-house AWS-based solutions. Led a team of 7 engineers implementing automated testing and CI/CD pipelines.",
  },
  {
    title: "Lead Software Engineer",
    company: "JPMorgan Chase & Co",
    period: "03/2021 - 03/2022",
    description:
      "Engineered a digital platform for investment banking. Streamlined integration among apps for trading applications. Automated onboarding of apps onto our platform. Mentored junior engineers.",
  },
  {
    title: "Lead Software Engineer",
    company: "PwC",
    period: "03/2020 - 02/2021",
    description:
      "Designed a KYC solution from scratch, scaling APIs to handle 6,000 requests per minute using Java and MongoDB. Led a team of 4 developers, implementing TDD and observability for robust performance.",
  },
];

const ExperienceSection = () => {
  return (
    <div id="section-experience">
      <section className="py-10 md:py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
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
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`my-0 md:my-0 relative md:flex ${
                    index % 2 === 0 ? "md:flex-row" : ""
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
