"use client";

import React, { useState } from "react";
import { siGithub } from "simple-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight, Linkedin } from "lucide-react";

const GitHubIcon = ({ size = 20, className = "" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
  >
    <path d={siGithub.path} />
  </svg>
);

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMail(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    event.preventDefault();
    const mailto = `mailto:vaidshubhendu@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;
    window.location.href = mailto;
  }

  return (
    <div id="section-contact">
      <section className="py-10 md:py-10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Interested in working together or have questions? Feel free to
              reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Let's Connect</h3>
              <p className="text-gray-600">
                I'm always open to discuss on engineering, leadership,
                architecture, or new opportunities. Whether you have a question
                or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 mt-8">
                <Card className="card-hover">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email Me</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        For general inquiries and opportunities
                      </p>
                      <a
                        href="mailto:vaidshubhendu@gmail.com"
                        className="text-primary font-medium hover:underline"
                      >
                        vaidshubhendu@gmail.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-green-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Connect with me professionally
                      </p>
                      <a
                        href="https://www.linkedin.com/in/shubhendu-vaid-ba74a997/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                      >
                        Visit my profile <ArrowRight size={14} />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-hover">
                  <CardContent className="p-6 flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                      <GitHubIcon className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">GitHub</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Check out my code and projects
                      </p>
                      <a
                        href="https://github.com/ShubhenduVaid"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                      >
                        See my repositories <ArrowRight size={14} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          id="name"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          id="email"
                          type="email"
                          placeholder="Your email"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        id="subject"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        id="message"
                        placeholder="Your message"
                        rows={4}
                      />
                    </div>

                    <Button
                      onClick={handleSendMail}
                      className="w-full bg-[#007bff] hover:bg-[#0056b3]/90 text-white rounded-md"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
