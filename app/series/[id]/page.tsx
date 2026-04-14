'use client';

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from '@/components/Header';
import SeriesCard from '@/components/SeriesCard';
import { FeaturedSeriesType } from '@/types/series';

export default function Series() {
  const params = useParams();
  const router = useRouter();
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [loading, setLoading] = useState(true);

  const series: FeaturedSeriesType = {
    id: 1,
    title: "Solo Leveling",
    chapters: 179,
    rating: 4.9,
    views: "2.3M",
    genre: "Action",
    status: 'Completed',
    description: "Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. After a near-death experience, he gains the unique ability to level up, transforming from the weakest hunter to humanity's greatest weapon."
  };

  const chapters = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    number: 100 + i + 1,
    title: `Chapter ${100 + i + 1}`,
    date: new Date(Date.now() - i * 86400000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  }));

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
        <Header />
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
          <div className="animate-pulse">
            <div className="flex gap-8">
              <div className="w-1/3 aspect-[2/3] bg-gray-700/50 rounded-3xl"></div>
              <div className="flex-1 space-y-6">
                <div className="flex gap-2">
                  {[1, 2, 3].map(i => <div key={i} className="h-8 bg-gray-700/50 rounded-full w-20"></div>)}
                </div>
                <div className="h-10 bg-gray-700/50 rounded w-3/4"></div>
                <div className="h-20 bg-gray-700/50 rounded w-full"></div>
                <div className="grid grid-cols-2 gap-5">
                  {[1, 2, 3, 4].map(i => <div key={i} className="h-32 bg-gray-700/50 rounded-2xl"></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* Series Info */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Cover */}
          <div className="w-full lg:w-1/3">
            <div className="group relative aspect-[2/3] rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl shadow-purple-500/30 hover:shadow-3xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-700">
                📚
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              
              {/* Rating Badge on Cover */}
              <div className="absolute top-4 left-4 z-20 bg-yellow-500/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 shadow-lg">
                <span>⭐</span>
                <span>{series.rating}</span>
              </div>

              {/* View Counter */}
              <div className="absolute bottom-4 left-4 z-20 bg-white/20 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm">
                👁 {series.views}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            {/* Genre Tags */}
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

            <h1 className="text-4xl font-bold text-white mb-6 group hover:animate-pulse">
              {series.title}
            </h1>
            
            <p className="mb-8 text-gray-400 leading-relaxed text-base">
              {series.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              <div className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                  {series.rating}
                </div>
                <div className="text-sm text-gray-400 font-medium">Rating</div>
              </div>
              <div className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {series.chapters}
                </div>
                <div className="text-sm text-gray-400 font-medium">Chapters</div>
              </div>
              <div className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-pink-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {series.views}
                </div>
                <div className="text-sm text-gray-400 font-medium">Views</div>
              </div>
              <div className="group p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {series.status}
                </div>
                <div className="text-sm text-gray-400 font-medium">Status</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href={`/read?series=${series.id}&chapter=${series.chapters}`}
                className="flex-1 px-8 py-5 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 text-center group"
              >
                <span>Start Reading</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button className="flex-1 px-8 py-5 text-base font-semibold text-gray-300 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:bg-gray-700/50 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center gap-3 group">
                <span className="text-yellow-400 group-hover:scale-110 transition-transform duration-300">⭐</span>
                <span className="group-hover:text-purple-400 transition-colors duration-300">Favorite</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Chapters ({series.chapters})</h2>
            <select className="px-4 py-2 text-sm text-gray-300 bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl hover:border-purple-500/40 transition-all duration-300">
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
          </div>

          <div className="space-y-2 max-h-[500px] overflow-y-auto rounded-2xl bg-white/5 backdrop-blur-sm p-4 border border-purple-500/20 scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  setSelectedChapter(chapter.id);
                  router.push(`/read?series=${series.id}&chapter=${chapter.id}`);
                }}
                className={`w-full p-4 text-left rounded-xl transition-all duration-300 ${
                  selectedChapter === chapter.id
                    ? "bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 border-l-4 border-purple-500 shadow-lg shadow-purple-500/20"
                    : "hover:bg-white/5 border-l-4 border-transparent hover:scale-[1.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-semibold ${
                      selectedChapter === chapter.id 
                        ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30' 
                        : 'bg-white/5 text-gray-400'
                    }`}>
                      {chapter.number}
                    </div>
                    <span className={`font-medium text-base ${
                      selectedChapter === chapter.id ? 'text-white' : 'text-gray-300'
                    } group-hover:text-purple-400 transition-colors duration-300`}>
                      {chapter.title}
                    </span>
                  </div>
                  <span className={`text-xs font-medium ${
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
    </div>
  );
}
