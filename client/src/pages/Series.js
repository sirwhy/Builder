import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../utils';

function Series() {
  const { id } = useParams();
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const data = await api.getSeriesById(id);
        setSeries(data);
      } catch (error) {
        console.error('Failed to fetch series:', error);
        // Mock data for demo
        setSeries(getMockSeries());
      } finally {
        setLoading(false);
      }
    };
    
    fetchSeries();
  }, [id]);

  const getMockSeries = () => ({
    id: 1,
    title: "Solo Leveling",
    slug: "solo-leveling",
    description: "In a world where hunters, humans who possess magical abilities, must battle deadly monsters to protect humanity from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival.",
    author: "Chugong",
    artist: "JANG LK",
    status: "Completed",
    genres: ["Action", "Adventure", "Fantasy"],
    rating: 4.9,
    views: "2.3M",
    chapters: [
      { id: 1, title: "Chapter 1", number: 1 },
      { id: 2, title: "Chapter 2", number: 2 },
      { id: 3, title: "Chapter 3", number: 3 },
      { id: 179, title: "Chapter 179", number: 179 },
    ],
  });

  if (loading) {
    return (
      <div className="pt-24 pb-8 flex items-center justify-center min-h-screen">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  if (!series) {
    return (
      <div className="pt-24 pb-8 flex items-center justify-center min-h-screen">
        <div className="text-slate-400">Series not found</div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Series Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">{series.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-slate-300">
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400">⭐</span>
              <span className="font-semibold">{series.rating}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-green-400">●</span>
              <span>{series.status}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>📖</span>
              <span>{series.chapters.length} Chapters</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span>👁</span>
              <span>{series.views}</span>
            </div>
          </div>

          <p className="text-slate-300 text-lg mb-6">{series.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-sm text-slate-400 mb-1">Author</div>
              <div className="text-white font-medium">{series.author || "Unknown"}</div>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="text-sm text-slate-400 mb-1">Artist</div>
              <div className="text-white font-medium">{series.artist || "Unknown"}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {series.genres?.map((genre) => (
              <span key={genre} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Chapters List */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Chapters</h2>
          <div className="space-y-2">
            {series.chapters?.map((chapter) => (
              <Link
                key={chapter.id}
                to={`/read/${chapter.id}`}
                className="block p-4 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{chapter.title}</span>
                  <span className="text-sm text-slate-400">Read Now</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
