'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { navLinks } from '@/data';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const resolveHref = (href: string) => {
    if (href.startsWith('#')) {
      return `/${href}`;
    }

    return href;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-background/90 border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link
            href="/"
            className="font-display text-xl font-bold text-navy-900"
          >
            SV
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-6 space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={resolveHref(link.href)}
                className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-[220px] mt-2 bg-white/95 backdrop-blur-sm"
              >
                {navLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.id}
                    asChild
                    className="focus:bg-gray-100"
                  >
                    <Link
                      href={resolveHref(link.href)}
                      className="w-full text-sm py-2 px-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="focus:bg-gray-100">
                  <a
                    href="/resume.pdf"
                    className="w-full text-sm py-2 px-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resume
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-teal-900 hover:bg-teal-600 text-white rounded-md">
                Get Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
