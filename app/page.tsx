'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

// Mock data - Shinigami Scans style
const featuredSeries = {
  id: 1,
  title: "Solo Leveling",
  image: "/images/solo-leveling.jpg",
  description: "In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a never-ending struggle for survival.",
  rating: 4.9,
  chapters: 179,
  genre: ["Action", "Fantasy", "Adventure"]
};

const trendingSeries = [
  { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", genre: "Action", status: 'Completed' as const },
  { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", genre: "Fantasy", status: 'Ongoing' as const },
  { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", genre: "Fantasy", status: 'Ongoing' as const },
  { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", genre: "Action", status: 'Ongoing' as const },
  { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", genre: "Drama", status: 'Ongoing' as const },
  { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", genre: "Action", status: 'Ongoing' as const },
  { id: 7, title: "The Breaker: New Waves", chapters: 204, rating: 4.6, views: "980K", genre: "Action", status: 'Completed' as const },
  { id: 8, title: "Wind Breaker", chapters: 445, rating: 4.7, views: "1.1M", genre: "Sports", status: 'Ongoing' as const },
  { id: 9, title: "Noblesse", chapters: 544, rating: 4.5, views: "2.1M", genre: "Supernatural", status: 'Completed' as const },
  { id: 10, title: "Hardcore Leveling Warrior", chapters: 329, rating: 4.6, views: "1.6M", genre: "Action", status: 'Ongoing' as const },
  { id: 11, title: "God of High School", chapters: 569, rating: 4.7, views: "2.9M", genre: "Action", status: 'Ongoing' as const },
  { id: 12, title: "Weak Hero", chapters: 285, rating: 4.8, views: "1.4M", genre: "Drama", status: 'Ongoing' as const },
];

const latestUpdates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours ago" },
];

const recommendedSeries = [
  { id: 13, title: "Eleceed", chapters: 280, rating: 4.8, views: "1.9M", genre: "Action", status: 'Ongoing' as const },
  { id: 14, title: "The God of High School", chapters: 520, rating: 4.6, views: "1.7M", genre: "Action", status: 'Ongoing' as const },
  { id: 15, title: "True Beauty", chapters: 200, rating: 4.7, views: "2.2M", genre: "Romance", status: 'Completed' as const },
  { id: 16, title: "Lore Olympus", chapters: 250, rating: 4.9, views: "3.5M", genre: "Romance", status: 'Ongoing' as const },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <div className="pt-16">
        <HeroBanner featuredSeries={featuredSeries} />
      </div>

      {/* Trending Now Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg">
                <span className="text-xl">🔥</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)]">Trending Now</h2>
                <p className="text-sm text-[var(--text-muted)]">Most popular this week</p>
              </div>
            </div>
            <Link 
              href="/browse" 
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
            >
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          
          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {trendingSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series as any} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-16 bg-[var(--bg-primary)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <span className="text-xl">🕐</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Latest Updates</h2>
              <p className="text-sm text-[var(--text-muted)]">New chapters daily</p>
            </div>
          </div>
          
          {/* List */}
          <div className="space-y-3">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-4 p-4 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-xl hover:border-purple-500/50 hover:bg-[var(--bg-elevated)] transition-all duration-150 hover:scale-[1.01]"
              >
                {/* Cover */}
                <div className="w-20 h-28 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-3xl flex-shrink-0 shadow-md">
                  📚
                </div>
                
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-[var(--text-primary)] text-base mb-1 group-hover:text-purple-400 transition-colors">
                    {update.series}
                  </h3>
                  <p className="text-sm text-purple-400 font-medium">{update.chapter}</p>
                </div>
                
                {/* Time */}
                <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] flex-shrink-0">
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
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-colors"
            >
              <span>View All Updates</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="py-16 bg-[var(--bg-secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg">
              <span className="text-xl">💡</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">Recommended For You</h2>
              <p className="text-sm text-[var(--text-muted)]">Based on your reading history</p>
            </div>
          </div>
          
          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {recommendedSeries.map((series, index) => (
              <SeriesCard key={series.id} series={series as any} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[var(--bg-primary)] border-t border-[var(--border-primary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shinigami Scans
                </span>
                <div className="text-xs text-[var(--text-muted)] font-medium">Professional Scanslation</div>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-[var(--text-secondary)] hover:text-purple-400 transition-colors">Home</Link>
              <Link href="#" className="text-[var(--text-secondary)] hover:text-purple-400 transition-colors">Browse</Link>
              <Link href="#" className="text-[var(--text-secondary)] hover:text-purple-400 transition-colors">Schedule</Link>
              <Link href="#" className="text-[var(--text-secondary)] hover:text-purple-400 transition-colors">About</Link>
            </div>
            
            {/* Social */}
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-purple-400 hover:border-purple-500/50 transition-all">
                <span>💬</span>
              </button>
              <button className="w-10 h-10 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-purple-400 hover:border-purple-500/50 transition-all">
                <span>🐦</span>
              </button>
              <button className="w-10 h-10 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-purple-400 hover:border-purple-500/50 transition-all">
                <span>📷</span>
              </button>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-[var(--border-primary)] text-center text-sm text-[var(--text-muted)]">
            <p>© 2024 Shinigami Scans. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
