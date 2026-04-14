'use client';

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  
  const genres = [
    { name: "All", color: "bg-purple-600" },
    { name: "Action", color: "bg-red-600" },
    { name: "Romance", color: "bg-pink-500" },
    { name: "Fantasy", color: "bg-indigo-600" },
    { name: "Drama", color: "bg-blue-600" },
    { name: "Comedy", color: "bg-yellow-500" },
    { name: "Horror", color: "bg-gray-700" },
    { name: "Slice of Life", color: "bg-teal-600" },
  ];

  const featuredSeries = [
    { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, genre: "Action", cover: "gradient-purple" },
    { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, genre: "Fantasy", cover: "gradient-blue" },
    { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, genre: "Fantasy", cover: "gradient-green" },
    { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, genre: "Action", cover: "gradient-orange" },
    { id: 5, title: "Lookism", chapters: 478, rating: 4.7, genre: "Drama", cover: "gradient-pink" },
    { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, genre: "Action", cover: "gradient-cyan" },
  ];

  const latestUpdates = [
    { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min", cover: "purple" },
    { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min", cover: "green" },
    { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min", cover: "orange" },
    { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour", cover: "blue" },
    { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours", cover: "pink" },
  ];

  const getCoverGradient = (type: string): string => {
    const gradients: Record<string, string> = {
      'purple': 'from-purple-600 via-purple-500 to-pink-500',
      'blue': 'from-blue-600 via-cyan-500 to-teal-500',
      'green': 'from-green-600 via-emerald-500 to-cyan-500',
      'orange': 'from-orange-600 via-amber-500 to-yellow-500',
      'pink': 'from-pink-600 via-rose-500 to-red-500',
      'cyan': 'from-cyan-600 via-sky-500 to-blue-500',
    };
    return gradients[type] || gradients['purple'];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
                  <span className="text-xl">📚</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shinigami Reader
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6">
                <a href="/browse" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Browse</a>
                <a href="/latest" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Latest</a>
                <a href="/popular" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">Popular</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-sm font-semibold text-purple-400 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Read Your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Favorite Manhua
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
              Discover thousands of high-quality manhua and manhwa. 
              Updated daily with the latest chapters from popular series.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/browse" className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all">
                Browse Series
              </a>
              <a href="/latest" className="px-8 py-4 text-lg font-semibold bg-gray-800/80 text-white rounded-xl hover:bg-gray-700 hover:scale-105 transition-all border border-gray-700">
                Latest Updates
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Filters */}
      <section className="py-8 border-y border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {genres.map((genre) => (
              <button
                key={genre.name}
                onClick={() => setSelectedGenre(genre.name)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  selectedGenre === genre.name
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Featured Series
            </h2>
            <a href="/browse" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredSeries.map((series) => (
              <a
                key={series.id}
                href={`/series/${series.id}`}
                className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-2xl hover:shadow-purple-500/20 transition-all hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getCoverGradient(series.cover)}`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-white text-sm mb-1 line-clamp-2">{series.title}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-300">
                      <span>⭐ {series.rating}</span>
                      <span>•</span>
                      <span>{series.chapters} ch</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Latest Updates
          </h2>
          
          <div className="space-y-4">
            {latestUpdates.map((update) => (
              <a
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:scale-[1.02]"
              >
                <div className={`w-16 h-20 rounded-lg bg-gradient-to-br ${getCoverGradient(update.cover)} flex items-center justify-center text-2xl`}>
                  📚
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{update.series}</h3>
                  <p className="text-sm text-gray-400">{update.chapter}</p>
                </div>
                <div className="text-sm text-gray-500">{update.time}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 p-12 text-center">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">Start Reading Now!</h2>
              <p className="text-lg text-white/90 mb-8">
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
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-4">© 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS</p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
