'use client';

import { useState } from "react";
import Link from "next/link";

export default function Series() {
  const [selectedChapter, setSelectedChapter] = useState(1);

  const chapters = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    number: 100 + i + 1,
    title: `Chapter ${100 + i + 1}`,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Series Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-500 shadow-2xl">
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
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Action", "Fantasy", "Adventure"].map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="mb-6 text-gray-300 leading-relaxed">
              Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. 
              After a near-death experience, he gains the unique ability to level up, transforming from the 
              weakest hunter to humanity's greatest weapon.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-gray-800/50">
                <div className="text-2xl font-bold text-purple-400">4.9</div>
                <div className="text-sm text-gray-400">Rating</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50">
                <div className="text-2xl font-bold text-pink-400">179</div>
                <div className="text-sm text-gray-400">Chapters</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50">
                <div className="text-2xl font-bold text-cyan-400">2.3M</div>
                <div className="text-sm text-gray-400">Views</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-800/50">
                <div className="text-2xl font-bold text-green-400">Ongoing</div>
                <div className="text-sm text-gray-400">Status</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/read?series=1&chapter=1`}
                className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all text-center"
              >
                Start Reading
              </Link>
              <button className="flex-1 px-6 py-4 text-lg font-semibold text-white bg-gray-800 rounded-xl hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                <span>⭐</span> Favorite
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Chapters</h2>
            <select className="px-4 py-2 text-white bg-gray-800 rounded-lg border border-gray-700">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto rounded-xl">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-4 text-left rounded-lg transition-all ${
                  selectedChapter === chapter.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
                    : "bg-gray-800/50 hover:bg-gray-700/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      selectedChapter === chapter.id ? 'bg-white text-purple-600' : 'bg-gray-700 text-gray-400'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-semibold ${
                      selectedChapter === chapter.id ? 'text-white' : 'text-white'
                    }`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className={`text-sm ${
                    selectedChapter === chapter.id ? 'text-purple-200' : 'text-gray-500'
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
