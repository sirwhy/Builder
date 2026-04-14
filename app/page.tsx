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
  views: "2.3M",
  gradient: "from-yellow-600 via-orange-600 to-red-700"
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
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Banner */}
      <div className="pt-20">
        <HeroBanner featuredSeries={featuredSeries} />
      </div>

      {/* Trending Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-lg shadow-orange-500/30">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Trending Now</h2>
                <p className="text-sm text-gray-400 mt-1">Most popular series this week</p>
              </div>
            </div>
            <Link href="/browse" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-400 bg-purple-600/20 border border-purple-500/30 rounded-xl hover:bg-purple-600/30 transition-all duration-300">
              <span>View All</span>
              <span>→</span>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {trendingSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series as import('@/types/series').FeaturedSeriesType} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-10">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg shadow-indigo-500/30">
              <span className="text-2xl">🕐</span>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
              <p className="text-sm text-gray-400 mt-1">New chapters uploaded daily</p>
            </div>
          </div>
          
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-r from-slate-700/50 to-slate-700/30 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 border border-slate-600 hover:border-purple-500/50 animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="w-24 h-32 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 flex items-center justify-center text-4xl flex-shrink-0 shadow-xl shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-xl mb-2 group-hover:text-purple-400 transition-colors duration-300">{update.series}</h3>
                  <p className="text-sm text-purple-400 font-semibold">{update.chapter}</p>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-300">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="font-medium">{update.time}</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/latest" className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-purple-400 bg-purple-600/20 border border-purple-500/30 rounded-xl hover:bg-purple-600/30 hover:border-purple-500/50 hover:scale-105 transition-all duration-300">
              <span>View All Updates</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-12 text-center shadow-2xl shadow-purple-500/30">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold text-white mb-4">Start Reading Now!</h2>
              <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="group px-10 py-5 bg-white text-purple-600 font-bold text-lg rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-3 mx-auto">
                Get Started Free
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami Reader
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }
      `}</style>
    </div>
  );
}
