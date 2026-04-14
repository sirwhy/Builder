'use client';

import { useState } from "react";
import Link from "next/link";

export default function Series() {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const chapters = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    number: 100 + i + 1,
    title: `Chapter ${100 + i + 1}`,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Browse</Link>
              <Link href="/latest" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Series Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/25">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                📚
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-white mb-4">
              Solo Leveling
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {["Action", "Fantasy", "Adventure"].map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="mb-8 text-gray-300 leading-relaxed text-lg">
              Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. 
              After a near-death experience, he gains the unique ability to level up, transforming from 
              the weakest hunter to humanity's greatest weapon.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-gray-800/50 border border-white/10">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">4.9</div>
                <div className="text-sm text-gray-400 mt-1">Rating</div>
              </div>
              <div className="p-5 rounded-2xl bg-gray-800/50 border border-white/10">
                <div className="text-3xl font-bold text-purple-400">179</div>
                <div className="text-sm text-gray-400 mt-1">Chapters</div>
              </div>
              <div className="p-5 rounded-2xl bg-gray-800/50 border border-white/10">
                <div className="text-3xl font-bold text-pink-400">2.3M</div>
                <div className="text-sm text-gray-400 mt-1">Views</div>
              </div>
              <div className="p-5 rounded-2xl bg-gray-800/50 border border-white/10">
                <div className="text-3xl font-bold text-green-400">Ongoing</div>
                <div className="text-sm text-gray-400 mt-1">Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/read?series=1&chapter=1`}
                className="flex-1 px-6 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-xl shadow-purple-500/25 text-center"
              >
                Start Reading
              </Link>
              <button className="flex-1 px-6 py-4 text-base font-semibold text-gray-300 bg-gray-800/50 border border-white/10 rounded-xl hover:bg-gray-700/50 transition-all flex items-center justify-center gap-2">
                <span>⭐</span> Favorite
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Chapters</h2>
            <select className="px-4 py-2.5 text-sm text-gray-300 bg-gray-800/50 border border-white/10 rounded-lg">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto rounded-xl bg-gray-800/30 p-4 border border-white/10">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-4 text-left rounded-xl transition-all ${
                  selectedChapter === chapter.id
                    ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-l-4 border-indigo-500"
                    : "hover:bg-gray-700/30 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold ${
                      selectedChapter === chapter.id 
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-purple-500/25' 
                        : 'bg-gray-700/50 text-gray-400'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-medium ${
                      selectedChapter === chapter.id ? 'text-white' : 'text-gray-300'
                    }`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className={`text-sm ${
                    selectedChapter === chapter.id ? 'text-indigo-400' : 'text-gray-500'
                  }`}>
                    {chapter.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
