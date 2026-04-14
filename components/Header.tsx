'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/browse', label: 'BROWSE' },
    { href: '/latest', label: 'LATEST' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-white text-lg font-bold">SHINIGAMI</span>
          </Link>
          
          {/* Navigation - Center */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search & Auth - Right */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-40 px-3 py-1.5 bg-gray-900 border border-gray-800 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gray-600"
              />
            </div>
            
            {/* Auth Buttons */}
            <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Login
            </button>
            <button className="text-sm font-semibold bg-gray-800 text-white px-3 py-1.5 rounded hover:bg-gray-700 transition-colors">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1.5"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-800">
            <div className="mb-3">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-3 py-2 bg-gray-900 border border-gray-800 rounded text-sm text-white"
              />
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded ${
                    isActive(link.href)
                      ? 'text-white bg-gray-800'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-800">
              <button className="w-full px-3 py-2 text-sm font-medium text-gray-400 text-left">
                Login
              </button>
              <button className="w-full px-3 py-2 text-sm font-semibold bg-gray-800 text-white rounded">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
