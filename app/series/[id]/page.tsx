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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-purple-900/50 to-gray-900 backdrop-blur-xl border-b border-purple-500/30 shadow-lg shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-purple-500/50 transition-all duration-300 animate-pulse">
                <span className="text-2xl">⚡</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  Shinigami
                </span>
                <span className="text-xs text-purple-400 tracking-widest font-medium">READER</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300">Browse</Link>
              <Link href="/latest" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300">Popular</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Series Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="group relative aspect-[2/3] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/30 hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-700">
                📚
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-4xl">📖</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Action", "Fantasy", "Adventure"].map((genre, index) => (
                <span
                  key={genre}
                  className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/25 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {genre}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-bold text-white mb-6 group animate-pulse">
              Solo Leveling
            </h1>
            
            <p className="mb-8 text-gray-300 leading-relaxed text-lg">
              Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. 
              After a near-death experience, he gains the unique ability to level up, transforming from 
              the weakest hunter to humanity's greatest weapon.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">4.9</div>
                <div className="text-sm text-gray-400 font-medium">Rating</div>
              </div>
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">179</div>
                <div className="text-sm text-gray-400 font-medium">Chapters</div>
              </div>
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">2.3M</div>
                <div className="text-sm text-gray-400 font-medium">Views</div>
              </div>
              <div className="group p-5 rounded-2xl bg-gradient-to-br from-gray-800/80 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">Ongoing</div>
                <div className="text-sm text-gray-400 font-medium">Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={`/read?series=1&chapter=1`}
                className="flex-1 px-8 py-5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-center group"
              >
                <span>Start Reading</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button className="flex-1 px-8 py-5 text-base font-semibold text-gray-300 bg-gray-800/50 border border-purple-500/20 rounded-xl hover:bg-gray-700/50 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">⭐</span>
                <span className="group-hover:text-purple-400 transition-colors duration-300">Favorite</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Chapters</h2>
            <select className="px-5 py-3 text-sm text-gray-300 bg-gray-800/50 border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto rounded-2xl bg-gray-800/30 p-5 border border-purple-500/20">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-5 text-left rounded-xl transition-all duration-300 ${
                  selectedChapter === chapter.id
                    ? "bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 border-l-4 border-purple-500 shadow-lg shadow-purple-500/20"
                    : "hover:bg-gray-700/30 border-l-4 border-transparent hover:scale-[1.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold ${
                      selectedChapter === chapter.id 
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                        : 'bg-gray-700/50 text-gray-400'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-medium text-lg ${
                      selectedChapter === chapter.id ? 'text-white' : 'text-gray-300'
                    } group-hover:text-purple-400 transition-colors duration-300`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedChapter === chapter.id ? 'text-purple-400' : 'text-gray-500'
                  }`}>
                    {chapter.date}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
