'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Who is Shubhendu Vaid?',
    answer:
      'Shubhendu Vaid is a Senior Software Engineering Manager at BT Group based in London, UK, with 14+ years of experience building scalable software solutions. He specializes in Next.js, React, Node.js, AWS, and event-driven architecture.',
  },
  {
    question:
      'What is Shubhendu Vaid\'s current role and responsibilities?',
    answer:
      'Shubhendu currently serves as Senior Software Engineering Manager at BT Group, overseeing the Sales Convergence Tribe. He defines technical strategy, rebuilds B2B sales experiences, and leads teams in developing convergent platforms for seamless product integration.',
  },
  {
    question: 'What technologies does Shubhendu Vaid specialize in?',
    answer:
      'Shubhendu specializes in JavaScript, TypeScript, React, Next.js, Node.js, AWS, event-driven architecture, microservices, Java, and cloud-native applications. He has extensive experience with CI/CD, TDD, observability, and agile methodologies.',
  },
  {
    question: 'What are Shubhendu Vaid\'s key achievements at BT Group?',
    answer:
      'At BT Group, Shubhendu rebuilt sales/renew experiences achieving increased conversion and zero order loss, improved page load times by 5x using Next.js, led AWS migration for enhanced scalability, and developed LLM-based help bots and product recommendation systems.',
  },
  {
    question: 'Where is Shubhendu Vaid located and available for work?',
    answer:
      'Shubhendu Vaid is based in London, UK, and is available for engineering leadership roles across the United Kingdom and Europe. He has experience working in London, Birmingham, Glasgow, and internationally in Poland and India.',
  },
  {
    question: 'What is Shubhendu Vaid\'s educational background?',
    answer:
      'Shubhendu holds a Bachelor of Technology in Computer Science (2009) and has 14+ years of progressive experience in software engineering, from individual contributor to senior leadership roles.',
  },
  {
    question: 'How can I contact Shubhendu Vaid for opportunities?',
    answer:
      'You can contact Shubhendu Vaid via email at vaidshubhendu@gmail.com, connect on LinkedIn at linkedin.com/in/shubhendu-vaid, or view his work on GitHub at github.com/ShubhenduVaid. He\'s open to discussing engineering leadership, architecture, and new opportunities.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 bg-white"
      aria-label="Frequently Asked Questions"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about Shubhendu Vaid{`'`}s experience, skills, and
            availability
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className="text-lg font-semibold text-gray-900"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDown
                      className="h-5 w-5 text-gray-500"
                      aria-hidden="true"
                    />
                  )}
                </button>
                {openIndex === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-6 py-4 bg-gray-50 border-t border-gray-200"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p
                      className="text-gray-700 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
