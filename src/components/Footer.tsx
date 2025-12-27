import { Linkedin, Github, Mail } from 'lucide-react';
import Link from 'next/link';
import data, { footerLinks } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { contact, name, about } = data;

  const resolveHref = (href: string) => {
    if (href.startsWith('#')) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container text-center md:text-left justify-center md:justify-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left justify-center md:justify-left">
            <h3 className="text-lg font-bold mb-4">{name}</h3>
            <p className="text-gray-300 mb-4">
              {about.headline}
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href={contact.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                aria-label="GitHub"
                className="hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={`mailto:${contact.email}`}
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
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={resolveHref(link.href)}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">
              Interested in working together? Feel free to reach out.
            </p>
            <p className="text-gray-300 mb-2">
              <a
                title="Email Shubhendu Vaid"
                href={`mailto:${contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {contact.email}
              </a>
            </p>
            {contact.phone ? (
              <p className="text-gray-300">
                <a
                  title="Call Shubhendu Vaid"
                  href={`tel:${contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {contact.phone}
                </a>
              </p>
            ) : null}
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
