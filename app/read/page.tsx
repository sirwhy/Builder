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
    <div className="min-h-screen bg-black" onMouseMove={handleMouseMove}>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-purple-500/20 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => router.push(`/series/${seriesId}`)}
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <span className="text-xl">←</span>
              <span className="font-semibold">Back</span>
            </button>
            
            <h2 className="text-sm font-semibold text-white">
              Chapter {chapterId}
            </h2>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                {currentPage} / {totalPages}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Pages */}
      <div className="pt-16 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Simulated pages */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="w-full aspect-[3/4] bg-gradient-to-br from-gray-900 to-gray-950 border-b border-purple-500/20"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">📖</div>
                  <div className="text-lg font-semibold text-gray-500">
                    Page {i + 1 + (currentPage - 1) * 20}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-purple-500/20 transition-opacity ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-6 py-3 font-semibold text-white bg-gray-800 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700 transition-all"
            >
              ← Prev
            </button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reader() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Loading...</div>}>
      <ReaderContent />
    </Suspense>
  );
}
