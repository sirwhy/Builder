'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

// Mock data
const featuredSeries = {
  id: 1,
  title: "Solo Leveling",
  description: "The weakest hunter gains the power to level up and becomes humanity's strongest weapon against monstrous threats.",
  chapter: "Chapter 179",
  rating: 4.9,
  views: "2.3M",
  gradient: "from-purple-700 via-purple-800 to-pink-800"
};

const trendingSeries = [
  { id: 2, title: "Tower of God", rating: 4.8, chapters: 590, genre: "Fantasy", views: "3.1M", status: 'Ongoing' },
  { id: 3, title: "The Beginning After The End", rating: 4.9, chapters: 198, genre: "Fantasy", views: "1.8M", status: 'Ongoing' },
  { id: 4, title: "Omniscient Reader", rating: 4.8, chapters: 201, genre: "Action", views: "2.7M", status: 'Ongoing' },
  { id: 5, title: "Lookism", rating: 4.7, chapters: 478, genre: "Drama", views: "1.5M", status: 'Ongoing' },
  { id: 6, title: "Nano Machine", rating: 4.8, chapters: 156, genre: "Action", views: "1.2M", status: 'Ongoing' },
  { id: 7, title: "The Breaker", rating: 4.6, chapters: 72, genre: "Action", views: "980K", status: 'Completed' },
];

const latestUpdates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Banner - Fixed Height */}
      <div className="pt-20">
        <HeroBanner featuredSeries={featuredSeries} />
      </div>

      {/* Trending Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            <Link href="/browse" className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2">
              View All
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trendingSeries.map((series, index) => (
              <SeriesCard key={series.id} series={series as import('@/types/series').FeaturedSeriesType} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-12 bg-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-8">Latest Updates</h2>
          
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-slate-700/50 hover:bg-purple-600/20 transition-all duration-300 hover:scale-[1.02] border border-slate-600 hover:border-purple-500/50"
              >
                <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-3xl flex-shrink-0">
                  📚
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white text-lg mb-1">{update.series}</h3>
                  <p className="text-sm text-purple-400">{update.chapter}</p>
                </div>
                <div className="text-sm text-gray-400">
                  {update.time}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
