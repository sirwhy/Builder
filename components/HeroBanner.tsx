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
    imageColor: string;
    gradient: string;
  };
}

export default function HeroBanner({ featuredSeries }: HeroBannerProps) {
  return (
    <section className="relative w-full overflow-hidden mb-16">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${featuredSeries.gradient}`}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              <span className="animate-pulse">🔥</span>
              <span>Featured Series</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
              {featuredSeries.title}
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed drop-shadow-md">
              {featuredSeries.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span>⭐</span>
                  <span className="font-bold">{featuredSeries.rating}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span>📖</span>
                  <span className="font-bold">{featuredSeries.chapter}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span>👁</span>
                  <span className="font-bold">{featuredSeries.views}</span>
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`/series/${featuredSeries.id}`}
                className="group px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300 flex items-center gap-3"
              >
                <span>Read Now</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <button className="group px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-300 flex items-center gap-3 border border-white/30">
                <span>⭐</span>
                <span>Add to Favorites</span>
              </button>
            </div>

            {/* New Chapter Badge */}
            <div className="pt-4 flex items-center gap-2">
              <span className="text-sm text-white/80">New chapter released:</span>
              <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-sm font-bold rounded-full animate-pulse">
                {featuredSeries.chapter}
              </span>
            </div>
          </div>

          {/* Hero Image/Card */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className={`absolute -top-4 -right-4 w-72 h-72 bg-white/10 rounded-full blur-3xl`}></div>
            <div className={`absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl`}></div>

            {/* Main Card */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className={`absolute inset-0 bg-gradient-to-br ${featuredSeries.gradient}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>
              
              {/* Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl animate-bounce">📚</span>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70 mb-1">Latest Chapter</div>
                    <div className="text-xl font-bold text-white">{featuredSeries.chapter}</div>
                  </div>
                  <div className="px-4 py-2 bg-purple-500/90 backdrop-blur-sm rounded-xl text-white font-bold text-sm">
                    NEW
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute -top-4 -right-4 bg-yellow-500 px-4 py-2 rounded-xl text-white font-bold shadow-xl flex items-center gap-2">
              <span>⭐</span>
              <span>{featuredSeries.rating}</span>
            </div>

            {/* Views Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white font-semibold flex items-center gap-2 border border-white/30">
              <span>👁</span>
              <span>{featuredSeries.views} views</span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Glow */}
        <div className={`absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-40 bg-gradient-to-t ${featuredSeries.gradient} opacity-50 blur-3xl`}></div>
      </div>

      {/* Custom Animations */}
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
