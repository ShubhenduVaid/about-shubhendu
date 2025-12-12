'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import data from '../data';

/**
 * ContactSection component displays contact information and form
 */
const ContactSection = () => {
  const { contact } = data;

  const handleFormSubmit = (formData: {
    name: string;
    email: string;
    message: string;
  }) => {
    console.log('Form submitted:', formData);
  };

  return (
    <section
      id="section-contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Interested in working together or have questions? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I&apos;m always open to discuss engineering, leadership,
                architecture, or new opportunities. Whether you have a question
                or just want to say hi, I&apos;ll try my best to get back to
                you!
              </p>
              <SocialLinks
                email={contact.email}
                github={contact.github}
                linkedin={contact.linkedin}
              />
            </div>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <ContactForm onSubmit={handleFormSubmit} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
