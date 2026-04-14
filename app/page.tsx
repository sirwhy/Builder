'use client';

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const featuredSeries = [
    { id: 1, title: "Solo Leveling", rating: 4.9, chapters: 179, genre: "Action" },
    { id: 2, title: "Tower of God", rating: 4.8, chapters: 590, genre: "Fantasy" },
    { id: 3, title: "The Beginning After The End", rating: 4.9, chapters: 198, genre: "Fantasy" },
    { id: 4, title: "Omniscient Reader", rating: 4.8, chapters: 201, genre: "Action" },
    { id: 5, title: "Lookism", rating: 4.7, chapters: 478, genre: "Drama" },
    { id: 6, title: "Nano Machine", rating: 4.8, chapters: 156, genre: "Action" },
  ];

  const latestUpdates = [
    { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min" },
    { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min" },
    { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min" },
    { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hr" },
    { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hrs" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25">
                <span className="text-xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-semibold text-indigo-400">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Browse</Link>
              <Link href="/latest" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="text-white">Read Your</span>
              <div className="mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Favorite Manhua
              </div>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed">
              Discover thousands of high-quality manhua and manhwa with smooth reading experience.
              Updated daily with the latest chapters from popular series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/browse" className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-xl shadow-purple-500/25">
                Browse Series
              </Link>
              <Link href="/latest" className="px-8 py-4 text-base font-semibold text-gray-300 bg-white/5 backdrop-blur-sm rounded-xl hover:bg-white/10 transition-all border border-white/10">
                Latest Updates
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Series</h2>
            <Link href="/browse" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSeries.map((series) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
                className="group relative aspect-[2/3] rounded-2xl overflow-hidden bg-gray-800 hover:shadow-2xl hover:shadow-purple-500/25 transition-all hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">{series.title}</h3>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <span>⭐</span>
                        <span className="text-white/90">{series.rating}</span>
                      </div>
                      <div className="text-white/70">•</div>
                      <div className="text-white/70">{series.chapters} ch</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Latest Updates</h2>
          
          <div className="space-y-3">
            {latestUpdates.map((update) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-4 p-5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:scale-[1.02] border border-white/10"
              >
                <div className="w-16 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-purple-500/25">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base mb-1">{update.series}</h3>
                  <p className="text-sm text-indigo-400">{update.chapter}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">{update.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">Start Reading Now!</h2>
              <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
