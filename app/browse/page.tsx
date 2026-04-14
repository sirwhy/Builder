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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-purple-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-gray-500 font-semibold tracking-wider">READER</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Home</Link>
              <Link href="/browse" className="text-base font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg">Browse</Link>
              <Link href="/latest" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Latest</Link>
              <Link href="/popular" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Browse Series</h1>
          <p className="text-gray-600">Discover thousands of manhua and manhwa</p>
        </div>

        {/* Genre Filter */}
        <section className="mb-12">
          <h2 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Genres</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="px-6 py-3 rounded-full bg-white text-gray-700 hover:bg-purple-500 hover:text-white text-sm font-semibold border border-gray-200 transition-colors"
              >
                {genre.name} ({genre.count})
              </button>
            ))}
          </div>
        </section>

        {/* Series Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
            All Series
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {series.map((s) => (
              <Link
                key={s.id}
                href={`/series/${s.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-white/90">
                        <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <span>⭐</span>
                          <span>{s.rating}</span>
                        </span>
                        <span>•</span>
                        <span>{s.chapters}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="mt-16 text-center">
          <button className="px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all">
            Load More Series
          </button>
        </div>
      </div>
    </div>
  );
}
