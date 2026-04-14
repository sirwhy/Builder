'use client';

interface AdBannerProps {
  position?: 'top' | 'bottom' | 'sidebar';
  adCode?: string;
}

export default function AdBanner({ position = 'top', adCode }: AdBannerProps) {
  return (
    <div className="py-4 px-4 bg-slate-900/30 border-y border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Ad Banner Placeholder */}
        <div className="relative w-full h-16 bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg flex flex-col items-center justify-center gap-2">
          {/* Ad Label */}
          <span className="text-xs text-slate-500 font-medium">Advertisement</span>
          
          {/* Ad Code (if provided) */}
          {adCode && (
            <div className="text-xs text-slate-400 font-mono">
              {adCode}
            </div>
          )}
          
          {/* Close Button (for demo) */}
          <button className="text-xs text-slate-500 hover:text-slate-300 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
