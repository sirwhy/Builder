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
              <Link href="/latest" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Latest</Link>
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

      {/* Series Info */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[2/3] rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center text-8xl">
                📚
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-6">
              {["Action", "Fantasy", "Adventure"].map((genre) => (
                <span
                  key={genre}
                  className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Solo Leveling
            </h1>
            
            <p className="mb-8 text-gray-600 leading-relaxed text-lg">
              Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. 
              After a near-death experience, he gains the unique ability to level up, transforming from 
              the weakest hunter to humanity's greatest weapon.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              <div className="p-5 rounded-2xl bg-white shadow-lg">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">4.9</div>
                <div className="text-sm text-gray-500 font-medium">Rating</div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">179</div>
                <div className="text-sm text-gray-500 font-medium">Chapters</div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-lg">
                <div className="text-4xl font-bold text-pink-600 mb-2">2.3M</div>
                <div className="text-sm text-gray-500 font-medium">Views</div>
              </div>
              <div className="p-5 rounded-2xl bg-white shadow-lg">
                <div className="text-4xl font-bold text-green-600 mb-2">Ongoing</div>
                <div className="text-sm text-gray-500 font-medium">Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={`/read?series=1&chapter=1`}
                className="flex-1 px-8 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all text-center"
              >
                Start Reading
              </Link>
              <button className="flex-1 px-8 py-5 text-base font-semibold text-gray-700 bg-white border-2 border-purple-500 rounded-xl hover:bg-purple-50 transition-all flex items-center justify-center gap-3">
                <span className="text-yellow-500">⭐</span>
                <span className="text-purple-600">Favorite</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Chapters</h2>
            <select className="px-5 py-3 text-sm text-gray-700 bg-white border-2 border-purple-200 rounded-xl">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-3 max-h-[500px] overflow-y-auto rounded-2xl bg-white p-5 shadow-lg border-2 border-purple-200">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-5 text-left rounded-xl transition-all ${
                  selectedChapter === chapter.id
                    ? "bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500"
                    : "hover:bg-purple-50 border-l-4 border-transparent"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-semibold ${
                      selectedChapter === chapter.id 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-medium text-lg ${
                      selectedChapter === chapter.id ? 'text-gray-900' : 'text-gray-600'
                    }`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className={`text-sm font-medium ${
                    selectedChapter === chapter.id ? 'text-purple-600' : 'text-gray-400'
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
