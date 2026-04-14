'use client';

import Link from "next/link";

const updates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours ago" },
  { id: 7, series: "The Breaker", chapter: "Chapter 72", time: "4 hours ago" },
  { id: 8, series: "Wind Breaker", chapter: "Chapter 445", time: "5 hours ago" },
  { id: 9, series: "Noblesse", chapter: "Chapter 544", time: "6 hours ago" },
  { id: 10, series: "Hardcore Leveling Warrior", chapter: "Chapter 329", time: "8 hours ago" },
];

export default function Latest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-purple-400 font-semibold tracking-[0.2em]">READER</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Home</Link>
              <Link href="/browse" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Browse</Link>
              <Link href="/latest" className="px-6 py-2.5 text-sm font-semibold bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-xl group hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300">Latest</Link>
              <Link href="/popular" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold text-indigo-400">🕐 Real-time Updates</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-2">Latest Updates</h1>
          <p className="text-gray-400 text-lg">New chapters uploaded daily</p>
        </div>

        <div className="space-y-4">
          {updates.map((update, index) => (
            <Link
              key={update.id}
              href={`/series/${update.id}`}
              className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-purple-500/10 border border-purple-500/10 hover:border-purple-500/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-xl shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                📚
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-white text-lg mb-1 group-hover:text-purple-400 transition-colors duration-300">{update.series}</h3>
                <p className="text-sm text-purple-400 font-medium">{update.chapter}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-300">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>{update.time}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="group px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            Load More Updates
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
