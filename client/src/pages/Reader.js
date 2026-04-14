import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Reader() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chapterInfo, setChapterInfo] = useState(null);

  useEffect(() => {
    // Mock data for demo
    const mockPages = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      imageUrl: `https://via.placeholder.com/400x600/1e293b/a855f7?text=Page+${i + 1}`,
    }));
    
    setPages(mockPages);
    setCurrentPage(0);
    setChapterInfo({
      title: "Chapter 1",
      chapterNumber: 1,
    });
    setLoading(false);
  }, [id]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(p => p + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(p => p - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToChapter = (chapter) => {
    setCurrentPage(0);
  };

  if (loading) {
    return (
      <div className="pt-20 pb-8 flex items-center justify-center min-h-screen">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-slate-950">
      {/* Chapter Navigation */}
      <div className="bg-slate-900 border-b border-slate-800 sticky top-14 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-white font-semibold">{chapterInfo?.title || "Loading..."}</h2>
              <p className="text-sm text-slate-400">
                Page {currentPage + 1} of {pages.length}
              </p>
            </div>
            
            <div className="flex gap-2">
              <Link
                to={`/series/${id}`}
                className="btn-secondary px-3 py-2 text-sm"
              >
                Back
              </Link>
              <Link
                to={`/read/${parseInt(id) + 1}`}
                className="btn-primary px-3 py-2 text-sm"
              >
                Next Chapter →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Reader Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {pages[currentPage] && (
          <div className="bg-slate-900 rounded-xl overflow-hidden">
            <img
              src={pages[currentPage].imageUrl}
              alt={`Page ${currentPage + 1}`}
              className="w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className="btn-secondary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>{currentPage + 1}</span>
            <span>/</span>
            <span>{pages.length}</span>
          </div>
          
          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            className="btn-primary px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>

        {/* Chapter List */}
        <div className="mt-8 p-4 bg-slate-900 rounded-xl">
          <h3 className="text-white font-semibold mb-4">Chapter List</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {Array.from({ length: 10 }, (_, i) => (
              <button
                key={i}
                onClick={() => goToChapter(i + 1)}
                className="p-2 bg-slate-800 hover:bg-slate-700 rounded text-sm text-white transition-colors"
              >
                Chapter {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reader;
