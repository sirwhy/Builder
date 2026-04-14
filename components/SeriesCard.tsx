'use client';

import Link from "next/link";

interface CardProps {
  series: {
    id: number;
    title: string;
    image?: string;
    chapters: number;
    rating: number;
    views: string;
    genre: string;
    status: 'Ongoing' | 'Completed' | 'Hiatus';
    updatedAt?: string;
  };
  index?: number;
}

export default function SeriesCard({ series, index = 0 }: CardProps) {
  const delayStyle = { animationDelay: `${index * 50}ms` };

  return (
    <Link href={`/series/${series.id}`} className="group">
      <div 
        className="relative aspect-[2/3] bg-[var(--bg-card)] rounded-xl overflow-hidden border border-[var(--border-primary)] shadow-md group-hover:shadow-xl group-hover:border-purple-500/50 transition-all duration-200 group-hover:-translate-y-1"
        style={delayStyle}
      >
        {/* Status Badge */}
        {series.status === 'Ongoing' && (
          <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-green-500/90 backdrop-blur-sm rounded-md text-xs font-semibold text-white shadow-lg">
            Ongoing
          </div>
        )}
        {series.status === 'Completed' && (
          <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-purple-500/90 backdrop-blur-sm rounded-md text-xs font-semibold text-white shadow-lg">
            Completed
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-20 bg-[var(--bg-elevated)]/90 backdrop-blur-sm px-2 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border border-[var(--border-primary)]">
          <span className="text-yellow-400">⭐</span>
          <span>{series.rating}</span>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 group-hover:scale-110 transition-transform duration-700"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          {/* Title */}
          <h3 className="font-semibold text-white text-sm mb-3 line-clamp-2 group-hover:text-purple-400 transition-colors duration-150 leading-tight">
            {series.title}
          </h3>
          
          {/* Meta Info */}
          <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
            <span className="flex items-center gap-1">
              <span>📖</span>
              <span className="font-medium text-[var(--text-secondary)]">{series.chapters}</span>
            </span>
            <span className="flex items-center gap-1">
              <span>👁</span>
              <span>{series.views}</span>
            </span>
          </div>

          {/* Latest Chapter */}
          <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
            <div className="text-xs text-[var(--text-secondary)]">Latest</div>
            <div className="text-sm font-semibold text-purple-400">Chapter {series.chapters}</div>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors duration-200"></div>
      </div>
    </Link>
  );
}

// Skeleton Loading Component
export function SeriesCardSkeleton() {
  return (
    <div className="aspect-[2/3] bg-[var(--bg-card)] rounded-xl border border-[var(--border-primary)] animate-pulse overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-elevated)]/50 to-[var(--bg-elevated)]/30 rounded-xl"></div>
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
`}</style>
