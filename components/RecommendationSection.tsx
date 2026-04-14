'use client';

import { useState } from "react";
import SeriesCard from './SeriesCard';

interface Series {
  id: number;
  title: string;
  chapters: number;
  rating: number;
  views: string;
  status: 'Ongoing' | 'Completed' | 'Hiatus';
}

interface RecommendationSectionProps {
  manhwa: Series[];
  manga: Series[];
  manhua: Series[];
}

export default function RecommendationSection({ manhwa, manga, manhua }: RecommendationSectionProps) {
  const [activeTab, setActiveTab] = useState<'manhwa' | 'manga' | 'manhua'>('manhwa');

  const tabs = [
    { id: 'manhwa', label: 'MANHWA', count: manhwa.length },
    { id: 'manga', label: 'MANGA', count: manga.length },
    { id: 'manhua', label: 'MANHUA', count: manhua.length },
  ];

  const activeSeries = activeTab === 'manhwa' ? manhwa : activeTab === 'manga' ? manga : manhua;

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Recommended For You</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {activeSeries.map((series, index) => (
            <SeriesCard key={series.id} series={series} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="btn-secondary flex items-center gap-2 mx-auto px-6 py-3">
            <span>View All</span>
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
