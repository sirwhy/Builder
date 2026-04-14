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
  };
  index?: number;
}

export default function SeriesCard({ series, index = 0 }: CardProps) {
  // Simple gradient backgrounds for cards
  const gradients = [
    'from-blue-600 to-purple-700',
    'from-purple-600 to-pink-700',
    'from-indigo-600 to-blue-700',
    'from-pink-600 to-rose-700',
    'from-violet-600 to-purple-700',
    'from-cyan-600 to-blue-700',
  ];
  
  const gradient = gradients[index % gradients.length];

  return (
    <Link href={`/series/${series.id}`} className="group">
      <div className="relative aspect-[2/3] bg-gradient-to-br overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity group-hover:opacity-90`}></div>
        
        {/* Status Badge - Top Left */}
        <div className="absolute top-2 left-2 z-10">
          {series.status === 'Ongoing' && (
            <span className="px-2 py-1 bg-green-500/90 text-white text-xs font-semibold rounded">
              Ongoing
            </span>
          )}
          {series.status === 'Completed' && (
            <span className="px-2 py-1 bg-purple-500/90 text-white text-xs font-semibold rounded">
              Completed
            </span>
          )}
        </div>

        {/* Rating Badge - Top Right */}
        <div className="absolute top-2 right-2 z-10 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
          <span className="text-yellow-400">★</span>
          <span className="text-white">{series.rating}</span>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent flex flex-col justify-end p-3">
          {/* Title */}
          <h3 className="font-semibold text-white text-sm mb-2 line-clamp-2 leading-tight">
            {series.title}
          </h3>
          
          {/* Info */}
          <div className="flex items-center justify-between text-xs text-gray-300">
            <span>
              <span className="mr-1">📖</span>
              <span className="font-medium">{series.chapters}</span>
            </span>
            <span>
              <span className="mr-1">👁</span>
              <span>{series.views}</span>
            </span>
          </div>

          {/* Latest Chapter */}
          <div className="mt-2 pt-2 border-t border-white/10">
            <div className="text-xs text-gray-400">Latest</div>
            <div className="text-sm font-semibold text-white">Chapter {series.chapters}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// Skeleton Loading Component
export function SeriesCardSkeleton() {
  return (
    <div className="aspect-[2/3] bg-slate-800 animate-pulse overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-600/30"></div>
    </div>
  );
}

<style jsx global>{`
  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out both;
  }
`}</style>
