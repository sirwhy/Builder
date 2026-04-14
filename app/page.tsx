'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

// Mock data
const trendingSeries = [
  { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", status: 'Completed' as const },
  { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", status: 'Ongoing' as const },
  { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", status: 'Ongoing' as const },
  { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", status: 'Ongoing' as const },
  { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", status: 'Ongoing' as const },
  { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", status: 'Ongoing' as const },
  { id: 7, title: "The Breaker: New Waves", chapters: 204, rating: 4.6, views: "980K", status: 'Completed' as const },
  { id: 8, title: "Wind Breaker", chapters: 445, rating: 4.7, views: "1.1M", status: 'Ongoing' as const },
  { id: 9, title: "Noblesse", chapters: 544, rating: 4.5, views: "2.1M", status: 'Completed' as const },
  { id: 10, title: "Hardcore Leveling Warrior", chapters: 329, rating: 4.6, views: "1.6M", status: 'Ongoing' as const },
  { id: 11, title: "God of High School", chapters: 569, rating: 4.7, views: "2.9M", status: 'Ongoing' as const },
  { id: 12, title: "Weak Hero", chapters: 285, rating: 4.8, views: "1.4M", status: 'Ongoing' as const },
];

const latestUpdates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours ago" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <Header />

      {/* Main Content - No Hero Banner */}
      <div className="pt-16">
        
        {/* Trending Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">TRENDING NOW</h2>
              <Link 
                href="/browse" 
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors"
              >
                <span>VIEW ALL</span>
                <span>→</span>
              </Link>
            </div>
            
            {/* Grid */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                  <SeriesCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-4">
                {trendingSeries.map((series, index) => (
                  <SeriesCard key={series.id} series={series as any} index={index} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <h2 className="text-xl font-bold text-white mb-6">LATEST UPDATES</h2>
            
            {/* List */}
            <div className="space-y-2">
              {latestUpdates.map((update, index) => (
                <Link
                  key={update.id}
                  href={`/series/${update.id}`}
                  className="flex items-center gap-4 p-3 bg-gray-800 hover:bg-gray-700 transition-colors rounded"
                >
                  {/* Cover */}
                  <div className="w-16 h-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📚</span>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-base mb-0.5 truncate">
                      {update.series}
                    </h3>
                    <p className="text-sm text-gray-400">{update.chapter}</p>
                  </div>
                  
                  {/* Time */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 flex-shrink-0">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span>{update.time}</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All */}
            <div className="mt-4 text-center">
              <Link 
                href="/latest" 
                className="inline-flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white bg-gray-800 rounded hover:bg-gray-700 transition-colors"
              >
                <span>VIEW ALL</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-base font-bold text-black">S</span>
              </div>
              <span className="text-lg font-bold text-white">SHINIGAMI</span>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Browse</Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">Schedule</Link>
            </div>
            
            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2024 Shinigami Scans
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
