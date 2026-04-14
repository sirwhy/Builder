'use client';

// Dynamic rendering for better performance
export const dynamic = 'force-dynamic';

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import AnnouncementSection from '@/components/AnnouncementSection';
import AdBanner from '@/components/AdBanner';
import RecommendationSection from '@/components/RecommendationSection';
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
];

const manhwa = [
  { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", status: 'Completed' as const },
  { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", status: 'Ongoing' as const },
  { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", status: 'Ongoing' as const },
  { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", status: 'Ongoing' as const },
  { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", status: 'Ongoing' as const },
  { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", status: 'Ongoing' as const },
];

const manga = [
  { id: 7, title: "One Piece", chapters: 1100, rating: 4.9, views: "5.2M", status: 'Ongoing' as const },
  { id: 8, title: "Jujutsu Kaisen", chapters: 245, rating: 4.8, views: "4.1M", status: 'Ongoing' as const },
  { id: 9, title: "Chainsaw Man", chapters: 150, rating: 4.7, views: "3.8M", status: 'Ongoing' as const },
  { id: 10, title: "Bleach", chapters: 686, rating: 4.8, views: "3.2M", status: 'Completed' as const },
  { id: 11, title: "Vagabond", chapters: 327, rating: 4.9, views: "2.1M", status: 'Hiatus' as const },
  { id: 12, title: "Kingdom", chapters: 780, rating: 4.7, views: "1.9M", status: 'Ongoing' as const },
];

const manhua = [
  { id: 13, title: "Tales of Demons and Gods", chapters: 450, rating: 4.6, views: "1.8M", status: 'Ongoing' as const },
  { id: 14, title: "The God of High School", chapters: 569, rating: 4.7, views: "2.9M", status: 'Ongoing' as const },
  { id: 15, title: "Battle Through the Heavens", chapters: 1200, rating: 4.5, views: "2.3M", status: 'Completed' as const },
  { id: 16, title: "Martial God Asura", chapters: 5000, rating: 4.4, views: "1.5M", status: 'Ongoing' as const },
  { id: 17, title: "Apotheosis", chapters: 3800, rating: 4.5, views: "1.2M", status: 'Ongoing' as const },
  { id: 18, title: "Against the Gods", chapters: 1500, rating: 4.6, views: "980K", status: 'Ongoing' as const },
];

const announcements = [
  { id: 1, title: "Solo Leveling: Re-Release", date: "2 hours ago", thumbnail: "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=600&q=80", description: "Special edition with new chapters" },
  { id: 2, title: "Tower of God: Season 3", date: "5 hours ago", thumbnail: "https://images.unsplash.com/photo-1541963463532-d6825254114c?w=600&q=80", description: "New season announced!" },
  { id: 3, title: "Omniscient Reader Update", date: "1 day ago", thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80", description: "Latest chapter available" },
  { id: 4, title: "The Beginning After The End", date: "2 days ago", thumbnail: "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?w=600&q=80", description: "Chapter 198 released" },
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <Header />

      {/* Hero Banner */}
      <HeroBanner />

      {/* Announcement Section */}
      <AnnouncementSection announcements={announcements} />

      {/* Ad Banner */}
      <AdBanner position="top" />

      {/* Trending Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Now</h2>
            <Link 
              href="/browse" 
              className="flex items-center gap-1 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>VIEW ALL</span>
              <span>→</span>
            </Link>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {trendingSeries.map((series, index) => (
                <SeriesCard key={series.id} series={series} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recommendation Section */}
      <RecommendationSection manhwa={manhwa} manga={manga} manhua={manhua} />

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Brand */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <div>
                <span className="text-xl font-bold gradient-text">SHINIGAMI</span>
                <p className="text-xs text-slate-400 mt-1">Read your favorite manhwa, manga & manhua</p>
              </div>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Home</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Browse</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Schedule</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">About</Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
            
            {/* Social & Copyright */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-3">
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
              </div>
              <p className="text-sm text-slate-500">
                © 2024 Shinigami Scans. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
