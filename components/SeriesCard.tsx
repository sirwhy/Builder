'use client';

import Link from "next/link";

interface CardProps {
  series: {
    id: number;
    title: string;
    chapters: number;
    rating: number;
    views: string;
    genre: string;
    status: 'Ongoing' | 'Completed' | 'Hiatus';
  };
  index?: number;
}

export default function SeriesCard({ series, index = 0 }: CardProps) {
  return (
    <Link href={`/series/${series.id}`} className="group">
      {/* Card Container - Proper shadow & border */}
      <div className="relative aspect-[2/3] overflow-hidden bg-slate-800 rounded-xl border border-slate-700 shadow-md group-hover:shadow-xl transition-all duration-200 group-hover:-translate-y-1">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 opacity-100 group-hover:opacity-90 transition-opacity duration-200"></div>
        
        {/* Rating Badge - Position & style */}
        <div className="absolute top-3 left-3 z-20 bg-yellow-500 px-2.5 py-1.5 rounded-lg text-white text-xs font-bold shadow-lg flex items-center gap-1">
          <span>⭐</span>
          <span>{series.rating}</span>
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-20 bg-green-500/90 backdrop-blur-sm px-2.5 py-1.5 rounded-full text-xs font-medium text-white shadow-lg">
          {series.status}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
          {/* Title - Proper typography */}
          <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-150 w-full">
            {series.title}
          </h3>
          
          {/* Meta Info - Spaced properly */}
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <span className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-md backdrop-blur-sm">
              <span>📖</span>
              <span>{series.chapters}</span>
            </span>
            <span className="flex items-center gap-1 px-2 py-1 bg-white/10 rounded-md backdrop-blur-sm">
              <span>👁</span>
              <span>{series.views}</span>
            </span>
          </div>

          {/* Action Button - Appears on hover */}
          <div className="mt-3 w-10 h-10 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150 transform group-hover:scale-110">
            <span className="text-white text-lg">📖</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Skeleton Loading Component
export function SeriesCardSkeleton() {
  return (
    <div className="aspect-[2/3] bg-slate-800 rounded-xl border border-slate-700 animate-pulse">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-xl"></div>
    </div>
  );
}

// Custom animations
<style jsx global>{`
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: none; }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.3s var(--ease-out-quart) both;
  }
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
`}</style>
