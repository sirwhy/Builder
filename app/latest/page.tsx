'use client';

import { useState } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

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
  const [loading, setLoading] = useState(true);

  setTimeout(() => setLoading(false), 800);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <Header />

      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm rounded-full">
            <span className="text-sm font-semibold text-indigo-400">🕐 Real-time Updates</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Latest Updates</h1>
          <p className="text-gray-400 text-lg">New chapters uploaded daily</p>
        </div>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="animate-pulse">
                <div className="flex gap-5 p-6 rounded-2xl bg-white/5">
                  <div className="w-20 h-24 bg-gray-700/50 rounded-2xl"></div>
                  <div className="flex-1 space-y-3">
                    <div className="h-5 bg-gray-700/50 rounded w-1/2"></div>
                    <div className="h-4 bg-gray-700/50 rounded w-1/4"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {updates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 border border-purple-500/10 hover:border-purple-500/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
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
        )}
      </div>
    </div>
  );
}
