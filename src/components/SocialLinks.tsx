import React from 'react';
import { siGithub } from 'simple-icons';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';

const GitHubIcon = ({ size = 20, className = '' }) => (
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

interface SocialLinksProps {
  email: string;
  github: string;
  linkedin: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  email,
  github,
  linkedin,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <Button 
        variant="outline" 
        size="lg" 
        asChild
        className="group hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
      >
        <a href={`mailto:${email}`}>
          <Mail className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
          Email
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        asChild
        className="group hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md"
      >
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-5 w-5 group-hover:text-blue-600 transition-colors" />
          LinkedIn
        </a>
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        asChild
        className="group hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:shadow-md"
      >
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon size={20} className="mr-2 group-hover:text-gray-700 transition-colors" />
          GitHub
        </a>
      </Button>
    </div>
  );
};

export default SocialLinks;
