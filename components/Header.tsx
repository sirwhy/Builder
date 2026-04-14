'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/browse', label: 'Browse' },
    { href: '/latest', label: 'Latest' },
    { href: '/popular', label: 'Popular' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami
              </span>
              <span className="text-xs text-purple-400 font-semibold tracking-[0.2em]">READER</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-xl ${
                  isActive(link.href)
                    ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white border border-transparent hover:border-purple-500/30 hover:bg-purple-500/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search manga, manhwa, manhua..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
              />
              <svg className="absolute right-4 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="px-6 py-2.5 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300">
              Login
            </button>
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-purple-400 transition-colors p-2"
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
          <div className="lg:hidden py-4 border-t border-purple-500/20 animate-fade-in">
            {/* Mobile Search */}
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Mobile Navigation */}
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive(link.href)
                      ? 'bg-purple-600/20 text-purple-400'
                      : 'text-gray-400 hover:text-white hover:bg-purple-500/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Auth */}
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-purple-500/20">
              <button className="w-full px-4 py-3 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 transition-all duration-300">
                Login
              </button>
              <button className="w-full px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </nav>
  );
}
