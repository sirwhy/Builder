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
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
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

      {/* Series Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                📚
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Solo Leveling
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Action", "Fantasy", "Adventure"].map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="mb-6 text-gray-600 leading-relaxed">
              Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. 
              After a near-death experience, he gains the unique ability to level up, transforming from 
              the weakest hunter to humanity's greatest weapon.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-blue-50">
                <div className="text-2xl font-bold text-blue-600">4.9</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="p-4 rounded-xl bg-purple-50">
                <div className="text-2xl font-bold text-purple-600">179</div>
                <div className="text-sm text-gray-600">Chapters</div>
              </div>
              <div className="p-4 rounded-xl bg-pink-50">
                <div className="text-2xl font-bold text-pink-600">2.3M</div>
                <div className="text-sm text-gray-600">Views</div>
              </div>
              <div className="p-4 rounded-xl bg-green-50">
                <div className="text-2xl font-bold text-green-600">Ongoing</div>
                <div className="text-sm text-gray-600">Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/read?series=1&chapter=1`}
                className="flex-1 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity text-center"
              >
                Start Reading
              </Link>
              <button className="flex-1 px-6 py-3 text-base font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                ⭐ Favorite
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Chapters</h2>
            <select className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto rounded-xl bg-white p-4 shadow-sm">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedChapter === chapter.id
                    ? "bg-blue-50 border-l-4 border-blue-600"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      selectedChapter === chapter.id ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-medium ${
                      selectedChapter === chapter.id ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
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
