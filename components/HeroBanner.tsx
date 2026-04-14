'use client';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4">
            <span className="text-xs font-semibold text-purple-300">🔥 TRENDING NOW</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Solo Leveling
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold">4.9</span>
              <span className="text-slate-500">(125K ratings)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">●</span>
              <span>Ongoing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>📖</span>
              <span>179 Chapters</span>
            </div>
          </div>

          {/* Genre Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['Action', 'Adventure', 'Fantasy', 'Drama'].map((genre) => (
              <span key={genre} className="px-3 py-1 bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-full text-xs font-medium text-slate-300">
                {genre}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-slate-300 text-base md:text-lg mb-6 line-clamp-3">
            In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect humanity from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="btn-primary flex items-center gap-2 px-6 py-3">
              <span>📚</span>
              <span className="font-semibold">Start Reading</span>
              <span className="text-lg">→</span>
            </button>
            <button className="btn-secondary flex items-center gap-2 px-5 py-3">
              <span>❤️</span>
              <span className="font-medium">Add to Library</span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent opacity-50"></div>
    </div>
  );
}
