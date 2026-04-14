'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function ReaderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const seriesId = searchParams.get("series") || "1";
  const chapterId = searchParams.get("chapter") || "1";
  
  const [currentPage, setCurrentPage] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [pages, setPages] = useState(20);

  useEffect(() => {
    const totalChapters = parseInt(chapterId);
    const total = Math.min(totalChapters * 20, 500);
    setPages(total);
    setCurrentPage(1);
    setShowControls(true);
  }, [chapterId]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (showControls) {
      timeout = setTimeout(() => setShowControls(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [showControls]);

  const totalPages = Math.ceil(pages / 20);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
  };

  return (
    <div className="min-h-screen bg-white" onMouseMove={handleMouseMove}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 transition-opacity ${showControls ? 'opacity-100 shadow-lg shadow-purple-500/10' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => router.push(`/series/${seriesId}`)}
              className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                ←
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">Back</span>
                <span className="text-xs text-purple-400 font-medium">Series</span>
              </div>
            </button>
            
            <div className="text-center">
              <h2 className="text-base font-semibold text-white mb-1">Chapter {chapterId}</h2>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400">Reading</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Page {currentPage} / {totalPages}
              </span>
              <button className="px-4 py-2 text-sm font-semibold text-purple-400 bg-purple-600/20 border border-purple-500/30 rounded-lg hover:bg-purple-600/30 hover:border-purple-500/50 transition-colors">
                ⭐ Favorite
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pages */}
      <div className="pt-20 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Simulated pages */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="group relative w-full aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce">📚</div>
                  <div className="text-xl font-bold text-gray-400">
                    Page {i + 1 + (currentPage - 1) * 20}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20 transition-all ${showControls ? 'opacity-100 translate-y-0 shadow-xl shadow-purple-500/10' : 'opacity-0 translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-5">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="text-2xl font-bold text-white">{currentPage}</span>
                <span className="text-sm text-gray-400">/ {totalPages}</span>
              </div>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span>Next</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reader() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 flex items-center justify-center text-white">Loading...</div>}>
      <ReaderContent />
    </Suspense>
  );
}
