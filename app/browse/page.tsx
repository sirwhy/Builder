'use client';

import { useState } from "react";
import Link from "next/link";
import Header from '@/components/Header';
import SeriesCard, { SeriesCardSkeleton } from '@/components/SeriesCard';

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
  { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", genre: "Action", status: 'Completed' },
  { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", genre: "Fantasy", status: 'Ongoing' },
  { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", genre: "Fantasy", status: 'Ongoing' },
  { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", genre: "Action", status: 'Ongoing' },
  { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", genre: "Drama", status: 'Ongoing' },
  { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", genre: "Action", status: 'Ongoing' },
  { id: 7, title: "The Breaker", chapters: 72, rating: 4.6, views: "980K", genre: "Action", status: 'Completed' },
  { id: 8, title: "Wind Breaker", chapters: 445, rating: 4.7, views: "1.1M", genre: "Sports", status: 'Ongoing' },
  { id: 9, title: "Noblesse", chapters: 544, rating: 4.5, views: "2.1M", genre: "Supernatural", status: 'Completed' },
  { id: 10, title: "Hardcore Leveling Warrior", chapters: 329, rating: 4.6, views: "1.6M", genre: "Action", status: 'Ongoing' },
  { id: 11, title: "God of High School", chapters: 569, rating: 4.7, views: "2.9M", genre: "Action", status: 'Ongoing' },
  { id: 12, title: "Weak Hero", chapters: 285, rating: 4.8, views: "1.4M", genre: "Drama", status: 'Ongoing' },
];

export default function Browse() {
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Simulate loading
  setTimeout(() => setLoading(false), 1000);

  const filteredSeries = selectedGenre === "All" 
    ? series 
    : series.filter(s => s.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Browse Series</h1>
          <p className="text-gray-400 text-lg">Discover thousands of manhua and manhwa</p>
        </div>

        {/* Genre Filter */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">Filter by Genre</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.name}
                onClick={() => setSelectedGenre(genre.name)}
                className={`group px-6 py-3 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  selectedGenre === genre.name
                    ? 'bg-purple-600/20 text-purple-400 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 text-gray-400 border-purple-500/20 hover:bg-purple-600 hover:text-white hover:border-purple-500/50'
                }`}
              >
                {genre.name} ({genre.count})
              </button>
            ))}
          </div>
        </section>

        {/* Series Grid */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
            <div className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
            All Series <span className="text-sm text-gray-400 font-normal">({filteredSeries.length})</span>
          </h2>
          
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
                <SeriesCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {filteredSeries.map((s, index) => (
                <SeriesCard key={s.id} series={s as import('@/types/series').FeaturedSeriesType} index={index} />
              ))}
            </div>
          )}

          {!loading && filteredSeries.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-white mb-2">No Series Found</h3>
              <p className="text-gray-400">Try selecting a different genre</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
