'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

// Mock data
const featuredSeries = [
  { id: 1, title: "Solo Leveling", rating: 4.9, chapters: 179, genre: "Action", views: "2.3M", status: 'Completed' },
  { id: 2, title: "Tower of God", rating: 4.8, chapters: 590, genre: "Fantasy", views: "3.1M", status: 'Ongoing' },
  { id: 3, title: "The Beginning After The End", rating: 4.9, chapters: 198, genre: "Fantasy", views: "1.8M", status: 'Ongoing' },
  { id: 4, title: "Omniscient Reader", rating: 4.8, chapters: 201, genre: "Action", views: "2.7M", status: 'Ongoing' },
  { id: 5, title: "Lookism", rating: 4.7, chapters: 478, genre: "Drama", views: "1.5M", status: 'Ongoing' },
  { id: 6, title: "Nano Machine", rating: 4.8, chapters: 156, genre: "Action", views: "1.2M", status: 'Ongoing' },
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
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trending Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-purple-600/20 border border-purple-500/30 backdrop-blur-sm rounded-full animate-fade-in-up">
            <span className="text-sm font-semibold text-purple-400 animate-pulse">🔥 Trending Now</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in-up delay-100">
            <span className="text-white">Read Your</span>
            <div className="mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Favorite Manhua
            </div>
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed animate-fade-in-up delay-200">
            Discover thousands of high-quality manhua and manhwa with an immersive reading experience.
            Updated daily with the latest chapters from popular series.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-300">
            <Link href="/browse" className="group px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <span>Browse Series</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/latest" className="group px-10 py-5 text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <span>Latest Updates</span>
              <span className="group-hover:rotate-12 transition-transform duration-300">📚</span>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-16 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-3xl font-bold text-white">Featured Series</h2>
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
              {featuredSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series as import('@/types/series').FeaturedSeriesType} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-gradient-to-b from-slate-900/50 via-purple-950/30 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold text-indigo-400">🕐 Real-time Updates</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Latest Updates</h2>
            <p className="text-gray-400 text-sm">New chapters uploaded daily</p>
          </div>
          
          <div className="space-y-3">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 border border-purple-500/10 hover:border-purple-500/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
          animation: fade-in-up 0.8s ease-out backwards;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
      `}</style>
    </div>
  );
}
