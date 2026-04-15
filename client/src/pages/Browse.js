import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SeriesCard from '../components/SeriesCard';
import api from '../utils/api';

function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') || '');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const params = {
      search: searchTerm,
      status: statusFilter,
      page: page,
      limit: 12,
    };
    fetchSeries(params);
  }, [searchTerm, statusFilter, page]);

  const fetchSeries = async (params) => {
    try {
      setLoading(true);
      const data = await api.getSeries(params);
      setSeries(data.series || []);
    } catch (error) {
      console.error('Failed to fetch series:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ search: searchTerm, status: statusFilter, page: 1 });
    setPage(1);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === 'status') {
      setStatusFilter(value);
      setSearchParams({ search: searchTerm, status: value, page: 1 });
      setPage(1);
    }
  };

  return (
    <div className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Browse Series</h1>
          
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search series..."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <svg className="absolute right-3.5 top-3.5 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <select
              name="status"
              value={statusFilter}
              onChange={handleFilterChange}
              className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            >
              <option value="">All Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Hiatus">Hiatus</option>
            </select>
            
            <button type="submit" className="btn-primary px-6 py-3">
              Search
            </button>
          </form>
        </div>

        {/* Results */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-slate-800 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : series.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">No series found</p>
            <p className="text-slate-500 mt-2">Try different search terms or filters</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 mb-8">
              {series.map((s) => (
                <SeriesCard key={s.id} series={s} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-secondary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-slate-400">Page {page}</span>
              <button
                onClick={() => setPage(p => p + 1)}
                className="btn-secondary px-4 py-2"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
