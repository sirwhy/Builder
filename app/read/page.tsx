'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function ReaderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const seriesId = searchParams.get("series") || "1";
  const chapterId = searchParams.get("chapter") || "1";
  
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(20);

  // Simulate loading pages
  useEffect(() => {
    // In production, fetch pages from API
    const totalChapters = parseInt(chapterId);
    const total = Math.min(totalChapters * 20, 500);
    setPages(total);
    setCurrentPage(1);
  }, [chapterId]);

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

  return (
    <div className="min-h-screen bg-black">
      {/* Reader Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-4xl">
          <button
            onClick={() => router.push(`/series/${seriesId}`)}
            className="text-gray-300 hover:text-white transition-colors"
          >
            ← Back
          </button>
          
          <h2 className="text-sm font-semibold text-white">
            Chapter {chapterId}
          </h2>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">
              {currentPage} / {totalPages}
            </span>
          </div>
        </div>
      </header>

      {/* Pages */}
      <div className="pt-16 pb-24">
        <div className="max-w-2xl mx-auto">
          {/* Simulated pages */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="w-full aspect-[3/4] bg-gray-900 border-b border-gray-800"
              style={{
                background: `linear-gradient(135deg, #1f2937 0%, #111827 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📖</div>
                <div className="text-sm">Page {i + 1 + (currentPage - 1) * 20}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
        <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-4xl">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="px-6 py-3 font-semibold text-white bg-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
          >
            ← Prev
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className="px-6 py-3 font-semibold text-white bg-purple-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-purple-700 transition-colors"
          >
            Next →
          </button>
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
