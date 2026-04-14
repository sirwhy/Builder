'use client';

import Link from "next/link";

interface HeroBannerProps {
  featuredSeries: {
    id: number;
    title: string;
    image: string;
    description: string;
    rating: number;
    chapters: number;
    genre: string[];
  };
}

export default function HeroBanner({ featuredSeries }: HeroBannerProps) {
  return (
    <section className="relative w-full bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-400">
              <span className="text-sm">🔥</span>
              <span>Featured Series</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              {featuredSeries.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg">
                <span className="text-sm">⭐</span>
                <span className="font-semibold text-sm">{featuredSeries.rating}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg">
                <span className="text-sm">📖</span>
                <span className="font-semibold text-sm">{featuredSeries.chapters} Chapters</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[var(--bg-card)] border border-[var(--border-primary)] rounded-lg">
                <span className="text-xs font-medium text-purple-400">{featuredSeries.genre[0]}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-[var(--text-secondary)] max-w-xl">
              {featuredSeries.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/series/${featuredSeries.id}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-150"
              >
                <span>Read Now</span>
                <span>→</span>
              </Link>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] font-medium rounded-lg hover:bg-[var(--bg-elevated)] transition-colors">
                <span>⭐</span>
                <span>Add to Library</span>
              </button>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/20 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl group-hover:scale-110 transition-transform duration-500 animate-float">📚</div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-[var(--text-muted)] mb-1">Latest Chapter</div>
                    <div className="text-xl font-bold text-white">Chapter 179</div>
                  </div>
                  <div className="px-3 py-1.5 bg-green-500 text-white text-xs font-semibold rounded-lg animate-pulse">
                    NEW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
