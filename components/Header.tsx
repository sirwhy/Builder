'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/browse', label: 'Browse' },
    { href: '/latest', label: 'Latest' },
    { href: '/schedule', label: 'Schedule' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/95 backdrop-blur-lg border-b border-[var(--border-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-xl">⚡</span>
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami
              </span>
              <div className="text-xs text-[var(--text-muted)] font-medium">SCANSLATION</div>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive(link.href)
                    ? 'text-purple-400 bg-purple-500/10'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search & Auth */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="search"
                placeholder="Search..."
                className="w-64 px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-150"
              />
              <svg className="absolute right-3 top-2.5 w-4 h-4 text-[var(--text-muted)] group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Auth Buttons */}
            <button className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-150">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border-primary)]">
            {/* Mobile Search */}
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2.5 bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-lg text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive(link.href)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[var(--border-primary)]">
              <button className="w-full px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-left">
                Login
              </button>
              <button className="w-full px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
