'use client';

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Series() {
  const params = useParams();
  const seriesId = params.id || "1";
  const [selectedChapter, setSelectedChapter] = useState(1);

  // Generate chapters
  const chapters = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    number: 100 + i + 1,
    title: `Chapter ${100 + i + 1}`,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString(),
  }));

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        {/* Series Header */}
        <div className="flex flex-col gap-8 mb-12 md:flex-row">
          {/* Cover */}
          <div className="w-full max-w-sm mx-auto md:max-w-none">
            <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-gradient-to-br from-purple-600 to-blue-500">
              <div className="absolute inset-0 flex items-center justify-center text-6xl">
                📚
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-bold text-white">
              Series #{seriesId}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Action", "Fantasy", "Adventure"].map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 text-sm font-semibold text-white bg-purple-600 rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            <p className="mb-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            <div className="flex items-center gap-6 text-gray-400">
              <div>
                <span className="text-white">4.8</span> ★
              </div>
              <div>450 Chapters</div>
              <div>Completed</div>
              <div>Korean</div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                href={`/read?series=${seriesId}&chapter=1`}
                className="px-6 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Reading
              </Link>
              <button className="px-6 py-3 text-lg font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                ⭐ Favorite
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

          <div className="space-y-2 max-h-[600px] overflow-y-auto">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`w-full p-4 text-left rounded-lg transition-colors ${
                  selectedChapter === chapter.id
                    ? "bg-purple-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">
                    {chapter.title}
                  </span>
                  <span className="text-sm text-gray-400">{chapter.date}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
