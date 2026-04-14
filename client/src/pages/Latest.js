import React, { useState } from 'react';
import SeriesCard from '../components/SeriesCard';

function Latest() {
  const latestUpdates = [
    { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago", status: "Completed" },
    { id: 2, series: "Tower of God", chapter: "Chapter 590", time: "15 min ago", status: "Ongoing" },
    { id: 3, series: "The Beginning After The End", chapter: "Chapter 198", time: "30 min ago", status: "Ongoing" },
    { id: 4, series: "Omniscient Reader", chapter: "Chapter 201", time: "1 hour ago", status: "Ongoing" },
    { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago", status: "Ongoing" },
    { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours ago", status: "Ongoing" },
    { id: 7, series: "One Piece", chapter: "Chapter 1100", time: "4 hours ago", status: "Ongoing" },
    { id: 8, series: "Jujutsu Kaisen", chapter: "Chapter 245", time: "5 hours ago", status: "Ongoing" },
  ];

  return (
    <div className="pt-24 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-8">Latest Updates</h1>
        
        <div className="space-y-4">
          {latestUpdates.map((update) => (
            <div key={update.id} className="flex items-center gap-4 p-4 bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
              <SeriesCard series={{ id: update.id, title: update.series, chapters: parseInt(update.chapter.split(' ')[1]), status: update.status }} />
              
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
    </div>
  );
}

export default Latest;
