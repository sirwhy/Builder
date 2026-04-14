'use client';

import Link from "next/link";

export default function Browse() {
  const genres = [
    { name: "All", count: 1234 },
    { name: "Action", count: 1234 },
    { name: "Adventure", count: 987 },
    { name: "Comedy", count: 756 },
    { name: "Drama", count: 1456 },
    { name: "Fantasy", count: 2345 },
    { name: "Horror", count: 543 },
    { name: "Mystery", count: 678 },
    { name: "Romance", count: 1890 },
    { name: "Sci-Fi", count: 890 },
    { name: "Slice of Life", count: 567 },
    { name: "Sports", count: 432 },
    { name: "Supernatural", count: 1123 },
  ];

  const series = [
    { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", genre: "Action" },
    { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", genre: "Fantasy" },
    { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", genre: "Fantasy" },
    { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", genre: "Action" },
    { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", genre: "Drama" },
    { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", genre: "Action" },
    { id: 7, title: "The Breaker", chapters: 72, rating: 4.6, views: "980K", genre: "Action" },
    { id: 8, title: "Wind Breaker", chapters: 445, rating: 4.7, views: "1.1M", genre: "Sports" },
    { id: 9, title: "Noblesse", chapters: 544, rating: 4.5, views: "2.1M", genre: "Supernatural" },
    { id: 10, title: "Hardcore Leveling Warrior", chapters: 329, rating: 4.6, views: "1.6M", genre: "Action" },
    { id: 11, title: "God of High School", chapters: 569, rating: 4.7, views: "2.9M", genre: "Action" },
    { id: 12, title: "Weak Hero", chapters: 285, rating: 4.8, views: "1.4M", genre: "Drama" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-purple-400 font-semibold tracking-[0.2em]">READER</span>
              </div>
            </Link>
            
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Home</Link>
              <Link href="/browse" className="px-6 py-2.5 text-sm font-semibold bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-xl group hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300">Browse</Link>
              <Link href="/latest" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Latest</Link>
              <Link href="/popular" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-2">Browse Series</h1>
          <p className="text-gray-400 text-lg">Discover thousands of manhua and manhwa</p>
        </div>

        {/* Genre Filter */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Genres</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="group px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm text-gray-400 hover:bg-purple-600 hover:text-white text-sm font-semibold border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
              >
                {genre.name} ({genre.count})
              </button>
            ))}
          </div>
        </section>

        {/* Series Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
            <div className="w-1.5 h-8 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            All Series
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {series.map((s, index) => (
              <Link
                key={s.id}
                href={`/series/${s.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/30 transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 animate-fade-in-up"
                     style={{ animationDelay: `${index * 80}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">{s.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-white/90">
                        <span className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1.5 rounded-full">
                          <span>⭐</span>
                          <span>{s.rating}</span>
                        </span>
                        <span>•</span>
                        <span>{s.chapters}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-scale-in transform group-hover:scale-110">
                    <span className="text-white text-sm">📖</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="group px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto">
            Load More Series
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
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
    </div>
  );
}
