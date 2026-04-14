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
    gradient: string;
  };
}

export default function HeroBanner({ featuredSeries }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600/30 backdrop-blur-sm rounded-full text-sm font-semibold border border-purple-400/30 shadow-lg shadow-purple-500/20">
              <span className="text-lg">🔥</span>
              <span>Featured Series</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-100 to-pink-200 bg-clip-text text-transparent">
              {featuredSeries.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-purple-200/90 max-w-lg leading-relaxed">
              {featuredSeries.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-xl">⭐</span>
                <span className="font-bold text-white">{featuredSeries.rating}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-xl">📖</span>
                <span className="font-bold text-white">{featuredSeries.chapter}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <span className="text-xl">👁</span>
                <span className="font-bold text-white">{featuredSeries.views}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/series/${featuredSeries.id}`}
                className="group px-8 py-4 bg-white text-purple-700 font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <span>Start Reading</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button className="group px-8 py-4 bg-purple-600/40 backdrop-blur-sm text-white font-semibold text-lg rounded-xl hover:bg-purple-600/60 transition-all duration-300 flex items-center gap-3 border border-purple-400/30">
                <span className="text-xl">⭐</span>
                <span>Favorite</span>
              </button>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
            
            {/* Main Card */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredSeries.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl animate-float">📚</span>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-purple-200/80 mb-1">Latest Chapter</div>
                    <div className="text-2xl font-bold text-white">{featuredSeries.chapter}</div>
                  </div>
                  <div className="px-5 py-3 bg-green-500 text-white text-sm font-bold rounded-xl animate-pulse shadow-lg">
                    NEW
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 px-5 py-3 rounded-xl text-white font-bold shadow-2xl flex items-center gap-3 text-lg">
              <span>⭐</span>
              <span>{featuredSeries.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
