'use client';

import Link from "next/link";
import { FeaturedSeriesType as SeriesCardType } from '@/types/series';

interface CardProps {
  series: SeriesCardType;
  index?: number;
}

export default function SeriesCard({ series, index = 0 }: CardProps) {
  const delayStyle = { animationDelay: `${index * 80}ms` };

  return (
    <Link href={`/series/${series.id}`} className="group">
      <div 
        className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
        style={delayStyle}
      >
        {/* Rating Badge */}
        <div className="absolute top-3 left-3 z-20 bg-yellow-500/95 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
          <span>⭐</span>
          <span>{series.rating}</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-20 bg-green-500/95 backdrop-blur-sm text-white px-2.5 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          {series.status}
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-700"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
          <h3 className="font-bold text-white text-sm mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300 w-full">
            {series.title}
          </h3>
          
          <div className="flex items-center gap-3 text-xs text-white/80">
            <span className="flex items-center gap-1 bg-white/20 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
              <span>📖</span>
              <span className="font-semibold">{series.chapters}</span>
            </span>
            <span className="flex items-center gap-1 bg-white/20 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
              <span>👁</span>
              <span>{series.views}</span>
            </span>
          </div>

          {/* Action Button */}
          <div className="mt-3 w-10 h-10 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-scale-in transform group-hover:scale-110">
            <span className="text-white text-sm">📖</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Skeleton Loading Component
export function SeriesCardSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[2/3] bg-gray-700/50 rounded-2xl"></div>
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-700/50 rounded w-3/4"></div>
        <div className="h-3 bg-gray-700/50 rounded w-1/2"></div>
      </div>
    </div>
  );
}

// Custom animations
<style jsx global>{`
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes scale-in {
    from { transform: scale(0); }
    to { transform: scale(1); }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out backwards;
  }
  .animate-scale-in {
    animation: scale-in 0.3s ease-out;
  }
`}</style>
