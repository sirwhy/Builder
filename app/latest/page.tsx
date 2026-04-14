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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-purple-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-gray-500 font-semibold tracking-wider">READER</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Home</Link>
              <Link href="/browse" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Browse</Link>
              <Link href="/latest" className="text-base font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg">Latest</Link>
              <Link href="/popular" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full">
            <span className="text-sm font-semibold text-indigo-700">🕐 Real-time Updates</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Latest Updates</h1>
          <p className="text-gray-600">New chapters uploaded daily</p>
        </div>

        <div className="space-y-4">
          {updates.map((update) => (
            <Link
              key={update.id}
              href={`/series/${update.id}`}
              className="flex items-center gap-5 p-5 rounded-xl bg-white hover:bg-purple-50 transition-colors border border-gray-200 hover:border-purple-300"
            >
              <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
                📚
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{update.series}</h3>
                <p className="text-sm text-purple-600 font-medium">{update.chapter}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{update.time}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all">
            Load More Updates
          </button>
        </div>
      </div>
    </div>
  );
}
