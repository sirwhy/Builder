import React, { useEffect, useState } from 'react';
import SeriesCard from '../components/SeriesCard';
import api from '../utils/api';

function Home() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSeries();
  }, []);

  const fetchSeries = async () => {
    try {
      const data = await api.getSeries({ limit: 12 });
      setSeries(data.series || []);
    } catch (error) {
      console.error('Failed to fetch series:', error);
      // Use mock data for demo
      setSeries(getMockSeries());
    } finally {
      setLoading(false);
    }
  };

  const getMockSeries = () => [
    { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", status: "Completed" },
    { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", status: "Ongoing" },
    { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", status: "Ongoing" },
    { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", status: "Ongoing" },
    { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", status: "Ongoing" },
    { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", status: "Ongoing" },
    { id: 7, title: "One Piece", chapters: 1100, rating: 4.9, views: "5.2M", status: "Ongoing" },
    { id: 8, title: "Jujutsu Kaisen", chapters: 245, rating: 4.8, views: "4.1M", status: "Ongoing" },
    { id: 9, title: "Chainsaw Man", chapters: 150, rating: 4.7, views: "3.8M", status: "Ongoing" },
    { id: 10, title: "Tales of Demons and Gods", chapters: 450, rating: 4.6, views: "1.8M", status: "Ongoing" },
    { id: 11, title: "The God of High School", chapters: 569, rating: 4.7, views: "2.9M", status: "Ongoing" },
    { id: 12, title: "Battle Through the Heavens", chapters: 1200, rating: 4.5, views: "2.3M", status: "Completed" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1560972550-aba3456b5564?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4">
              <span className="text-xs font-semibold text-purple-300">🔥 TRENDING NOW</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Solo Leveling
            </h1>

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

            <p className="text-slate-300 text-base md:text-lg mb-6">
              In a world where hunters must battle deadly monsters, a notoriously weak hunter finds himself in a seemingly endless struggle for survival.
            </p>

            <div className="flex gap-3">
              <button className="btn-primary flex items-center gap-2">
                <span>📚</span>
                <span>Start Reading</span>
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <span>❤️</span>
                <span>Add to Library</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Trending Now</h2>
            <a href="/browse" className="text-sm font-semibold text-purple-400 hover:text-purple-300">
              View All →
            </a>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="aspect-[2/3] bg-slate-800 rounded-2xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {series.map((s) => (
                <SeriesCard key={s.id} series={s} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Latest Updates</h2>
            <a href="/latest" className="text-sm font-semibold text-purple-400 hover:text-purple-300">
              View All →
            </a>
          </div>

          <div className="space-y-3">
            {[
              { series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
              { series: "Tower of God", chapter: "Chapter 590", time: "15 min ago" },
              { series: "The Beginning After The End", chapter: "Chapter 198", time: "30 min ago" },
              { series: "Omniscient Reader", chapter: "Chapter 201", time: "1 hour ago" },
              { series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
            ].map((update, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-slate-800/50 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
                <div className="w-16 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📚</span>
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-base mb-0.5 truncate">
                    {update.series}
                  </h3>
                  <p className="text-sm text-slate-400">{update.chapter}</p>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-500 flex-shrink-0">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                  <span>{update.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
