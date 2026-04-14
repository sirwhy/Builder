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
    <section className="relative w-full">
      {/* Background */}
      <div className={`relative h-[500px] md:h-[600px] overflow-hidden ${featuredSeries.gradient}`}>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/90 to-pink-800/95"></div>
        
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
              <span className="text-lg">🔥</span>
              <span>Featured Series</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {featuredSeries.title}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 max-w-xl leading-relaxed">
              {featuredSeries.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span>⭐</span>
                <span className="font-bold">{featuredSeries.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span>📖</span>
                <span className="font-bold">{featuredSeries.chapter}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                <span>👁</span>
                <span className="font-bold">{featuredSeries.views}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={`/series/${featuredSeries.id}`}
                className="group px-8 py-4 bg-white text-purple-700 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <span>Start Reading</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-3 border border-white/30">
                <span>⭐</span>
                <span>Favorite</span>
              </button>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl blur-2xl"></div>
            
            {/* Main Card */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredSeries.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">📚</span>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70 mb-1">Latest Chapter</div>
                    <div className="text-xl font-bold text-white">{featuredSeries.chapter}</div>
                  </div>
                  <div className="px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute -top-3 -right-3 bg-yellow-500 px-4 py-2 rounded-xl text-white font-bold shadow-xl flex items-center gap-2">
              <span>⭐</span>
              <span>{featuredSeries.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
