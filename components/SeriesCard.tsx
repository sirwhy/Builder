'use client';

import Link from "next/link";

interface CardProps {
  series: {
    id: number;
    title: string;
    chapters: number;
    rating: number;
    views: string;
    status: 'Ongoing' | 'Completed' | 'Hiatus';
    genre?: string;
  };
  index?: number;
}

export default function SeriesCard({ series, index = 0 }: CardProps) {
  // Color palette for variety
  const colors = [
    'from-purple-600 to-blue-700',
    'from-pink-600 to-rose-700',
    'from-indigo-600 to-violet-700',
    'from-cyan-600 to-blue-700',
    'from-emerald-600 to-green-700',
    'from-orange-600 to-amber-700',
  ];
  
  const colorGradient = colors[index % colors.length];

  return (
    <Link href={`/series/${series.id}`} className="group">
      <div className={`relative aspect-[2/3] bg-gradient-to-br ${colorGradient} rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group-hover:scale-105`}>
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          {series.status === 'Ongoing' && (
            <span className="px-2.5 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
              Ongoing
            </span>
          )}
          {series.status === 'Completed' && (
            <span className="px-2.5 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-bold rounded-full shadow-lg">
              Completed
            </span>
          )}
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-10 bg-black/70 backdrop-blur-sm px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-white text-sm font-bold">{series.rating}</span>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-4">
          {/* Title */}
          <h3 className="font-bold text-white text-base mb-2 line-clamp-2 leading-tight group-hover:text-purple-300 transition-colors">
            {series.title}
          </h3>
          
          {/* Info Row */}
          <div className="flex items-center justify-between text-xs text-slate-300 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-purple-400">📖</span>
              <span className="font-semibold">{series.chapters}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-blue-400">👁</span>
              <span>{series.views}</span>
            </div>
          </div>

          {/* Latest Chapter */}
          <div className="pt-3 border-t border-white/10">
            <div className="text-xs text-slate-400 mb-0.5">Latest</div>
            <div className="text-sm font-semibold text-white">{series.genre || `Chapter ${series.chapters}`}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Skeleton Loading Component
export function SeriesCardSkeleton() {
  return (
    <div className="aspect-[2/3] bg-slate-800 rounded-2xl overflow-hidden animate-pulse shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-600/30"></div>
    </div>
  );
}
