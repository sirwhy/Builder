'use client';

import Link from "next/link";

interface HeroBannerProps {
  featuredSeries: {
    id: number;
    title: string;
    description: string;
    chapter: string;
    rating: number;
    views: string;
  };
}

export default function HeroBanner({ featuredSeries }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Background Orbs - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm font-medium text-purple-400">
              <span className="text-sm">🔥</span>
              <span>Featured Series</span>
            </div>

            {/* Title - Large, bold */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              {featuredSeries.title}
            </h1>

            {/* Description - Readable body text */}
            <p className="text-base md:text-lg leading-relaxed max-w-xl text-gray-400">
              {featuredSeries.description}
            </p>

            {/* Meta Info - Spaced consistently */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-base">⭐</span>
                <span className="font-semibold text-gray-100">{featuredSeries.rating}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-base">📖</span>
                <span className="font-semibold text-gray-100">{featuredSeries.chapter}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-base">👁</span>
                <span className="font-semibold text-gray-100">{featuredSeries.views}</span>
              </div>
            </div>

            {/* CTA Buttons - Proper spacing & hierarchy */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/series/${featuredSeries.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] transition-all duration-150"
              >
                <span>Start Reading</span>
                <span>→</span>
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-gray-300 font-medium rounded-lg hover:bg-slate-700 hover:text-gray-100 transition-colors duration-150">
                <span>⭐</span>
                <span>Favorite</span>
              </button>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
            
            {/* Main Card - Proper shadow & border */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-xl transform hover:scale-[1.02] transition-transform duration-200">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl animate-float">📚</span>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Latest Chapter</div>
                    <div className="text-xl font-bold text-white">{featuredSeries.chapter}</div>
                  </div>
                  <div className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-lg animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Badge - Position properly */}
            <div className="absolute -top-3 -right-3 bg-yellow-500 px-3 py-1.5 rounded-lg text-white font-semibold shadow-lg flex items-center gap-1.5 text-sm">
              <span>⭐</span>
              <span>{featuredSeries.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
