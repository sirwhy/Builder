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
  imageColor: "from-yellow-500 via-orange-500 to-red-600",
  gradient: "from-indigo-700 via-purple-700 to-pink-700"
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
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Banner - Featured Series */}
      <HeroBanner featuredSeries={featuredSeries} />

      {/* Trending Series */}
      <section className="py-12 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl">
                <span className="text-2xl">🔥</span>
              </div>
              <h2 className="text-3xl font-bold text-white">Trending Now</h2>
            </div>
            <Link href="/browse" className="group flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trendingSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series as import('@/types/series').FeaturedSeriesType} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-12 bg-gradient-to-b from-slate-900/50 via-purple-950/30 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                <span className="text-2xl">🕐</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
                <p className="text-sm text-gray-400">New chapters uploaded daily</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {latestUpdates.map((update, index) => (
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

          <div className="mt-8 text-center">
            <Link href="/latest" className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300">
              View All Updates
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-10 text-center shadow-2xl shadow-purple-500/40">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Start Reading Now!</h2>
              <p className="text-lg text-white/90 mb-6 max-w-lg mx-auto">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="group px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce flex items-center gap-3 mx-auto">
                Get Started Free
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami Reader
              </span>
            </div>
            <p className="text-gray-400 text-xs mb-4">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
            <div className="flex justify-center gap-6 text-xs">
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
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
      `}</style>
    </div>
  );
}
