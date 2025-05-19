import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container text-center md:text-left justify-center md:justify-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left justify-center md:justify-left">
            <h3 className="text-lg font-bold mb-4">Shubhendu Vaid</h3>
            <p className="text-gray-300 mb-4">
              Engineering Leader specializing in event-driven architecture and
              distributed systems
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/shubhendu-vaid/"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/ShubhenduVaid"
                target="_blank"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:vaidshubhendu@gmail.com"
                target="_blank"
                aria-label="Email"
                className="hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#section-about"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/#section-experience"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/#section-articles"
                  className="text-gray-300 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">
              Interested in working together? Feel free to reach out.
            </p>
            <p className="text-gray-300 mb-2">
              <a
                href="mailto:vaidshubhendu@gmail.com"
                className="hover:text-primary transition-colors"
              >
                vaidshubhendu@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              <a
                href="tel:+447835735172"
                className="hover:text-primary transition-colors"
              >
                +44 7835 735172
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
          <p>© {currentYear} Shubhendu Vaid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
