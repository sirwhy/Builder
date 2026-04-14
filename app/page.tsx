'use client';

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const featuredSeries = [
    { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, genre: "Action" },
    { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, genre: "Fantasy" },
    { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, genre: "Fantasy" },
    { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, genre: "Action" },
    { id: 5, title: "Lookism", chapters: 478, rating: 4.7, genre: "Drama" },
    { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, genre: "Action" },
  ];

  const latestUpdates = [
    { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
    { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
    { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
    { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
    { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <span className="text-white text-xl">📚</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Shinigami Reader</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-900">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Browse</Link>
              <Link href="/latest" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Read Your
              <span className="block mt-2">Favorite Manhua</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Discover thousands of high-quality manhua and manhwa. 
              Updated daily with the latest chapters from popular series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/browse" className="px-8 py-3 text-base font-semibold text-white bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all">
                Browse Series
              </Link>
              <Link href="/latest" className="px-8 py-3 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all">
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
            <h2 className="text-2xl font-bold text-gray-900">Featured Series</h2>
            <Link href="/browse" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSeries.map((series) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg group-hover:shadow-xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2">{series.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span>⭐ {series.rating}</span>
                        <span>•</span>
                        <span>{series.chapters} ch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Latest Updates</h2>
          
          <div className="space-y-3">
            {latestUpdates.map((update) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 text-base mb-1">{update.series}</h3>
                  <p className="text-sm text-gray-500">{update.chapter}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap">{update.time}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-12 text-center">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Start Reading Now!</h2>
              <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
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
