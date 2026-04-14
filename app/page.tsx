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
  description: "Sung Jin-Woo, the weakest hunter of all mankind, finds himself trapped within a double dungeon. After a near-death experience, he gains the unique ability to level up, transforming from the weakest hunter to humanity's greatest weapon.",
  chapter: "Chapter 179",
  rating: 4.9,
  views: "2.3M"
};

const trendingSeries = [
  { id: 1, title: "Solo Leveling", rating: 4.9, chapters: 179, genre: "Action", views: "2.3M", status: 'Completed' },
  { id: 2, title: "Tower of God", rating: 4.8, chapters: 590, genre: "Fantasy", views: "3.1M", status: 'Ongoing' },
  { id: 3, title: "The Beginning After The End", rating: 4.9, chapters: 198, genre: "Fantasy", views: "1.8M", status: 'Ongoing' },
  { id: 4, title: "Omniscient Reader", rating: 4.8, chapters: 201, genre: "Action", views: "2.7M", status: 'Ongoing' },
  { id: 5, title: "Lookism", rating: 4.7, chapters: 478, genre: "Drama", views: "1.5M", status: 'Ongoing' },
  { id: 6, title: "Nano Machine", rating: 4.8, chapters: 156, genre: "Action", views: "1.2M", status: 'Ongoing' },
  { id: 7, title: "The Breaker", rating: 4.6, chapters: 72, genre: "Action", views: "980K", status: 'Completed' },
  { id: 8, title: "Wind Breaker", rating: 4.7, chapters: 445, genre: "Sports", views: "1.1M", status: 'Ongoing' },
  { id: 9, title: "Noblesse", rating: 4.5, chapters: 544, genre: "Supernatural", views: "2.1M", status: 'Completed' },
  { id: 10, title: "Hardcore Leveling Warrior", rating: 4.6, chapters: 329, genre: "Action", views: "1.6M", status: 'Ongoing' },
  { id: 11, title: "God of High School", rating: 4.7, chapters: 569, genre: "Action", views: "2.9M", status: 'Ongoing' },
  { id: 12, title: "Weak Hero", rating: 4.8, chapters: 285, genre: "Drama", views: "1.4M", status: 'Ongoing' },
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
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Header */}
      <Header />

      {/* Hero Banner - Proper spacing */}
      <div className="pt-16">
        <HeroBanner featuredSeries={featuredSeries} />
      </div>

      {/* Trending Section - Consistent spacing */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg shadow-orange-500/20">
                <span className="text-xl">🔥</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-100">Trending Now</h2>
            </div>
            <Link 
              href="/browse" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors duration-150"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          
          {/* Grid - Responsive */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {trendingSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series as import('@/types/series').FeaturedSeriesType} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates - Consistent spacing */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/20">
              <span className="text-xl">🕐</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-100">Latest Updates</h2>
              <p className="text-sm text-gray-500 mt-0.5">New chapters uploaded daily</p>
            </div>
          </div>
          
          {/* Card List */}
          <div className="space-y-3">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-surface-elevated)] border border-[var(--color-border)] hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-150 hover:scale-[1.01]"
              >
                {/* Cover */}
                <div className="w-20 h-28 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                  📚
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-100 text-base mb-1 group-hover:text-purple-400 transition-colors duration-150">
                    {update.series}
                  </h3>
                  <p className="text-sm text-purple-400">{update.chapter}</p>
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium">{update.time}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-6 text-center">
            <Link 
              href="/latest" 
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors duration-150"
            >
              <span>View All Updates</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 md:p-12 text-center shadow-xl">
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-3">Start Reading Now!</h2>
              <p className="text-base md:text-lg text-white/90 mb-6 max-w-lg mx-auto">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-150">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[var(--color-surface)] border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-lg shadow-md">
              <span className="text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shinigami Reader
            </span>
          </div>
          <p className="text-center text-sm text-gray-500">
            © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
