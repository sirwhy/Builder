import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../utils/api';

function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userStr = localStorage.getItem('adminUser');

    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    setUser(JSON.parse(userStr));
    fetchSeries(token);
  }, [navigate]);

  const fetchSeries = async (token) => {
    try {
      const data = await api.getSeries({ limit: 10 });
      setSeries(data.series || []);
    } catch (error) {
      console.error('Failed to fetch series:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
            <h3 className="text-2xl font-bold text-purple-500">
              {series.length}
            </h3>
            <p className="text-slate-400">Total Series</p>
          </div>
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
            <h3 className="text-2xl font-bold text-green-500">0</h3>
            <p className="text-slate-400">Pending Reviews</p>
          </div>
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
            <h3 className="text-2xl font-bold text-blue-500">Active</h3>
            <p className="text-slate-400">System Status</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <button className="btn-primary px-4 py-3">
            + Add Series
          </button>
          <button className="btn-secondary px-4 py-3">
            Manage Series
          </button>
          <button className="btn-secondary px-4 py-3">
            Site Settings
          </button>
          <button className="btn-secondary px-4 py-3">
            Analytics
          </button>
        </div>

        {/* Recent Series */}
        <div className="bg-slate-900 rounded-lg border border-slate-800">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Series</h2>
            <a href="/browse" className="text-sm text-purple-400 hover:text-purple-300">
              View All
            </a>
          </div>
          <div className="p-4">
            {loading ? (
              <div className="text-slate-400 text-center py-8">Loading...</div>
            ) : series.length === 0 ? (
              <div className="text-slate-400 text-center py-8">
                No series yet. Click "Add Series" to get started.
              </div>
            ) : (
              <div className="space-y-3">
                {series.map((s) => (
                  <div key={s.id} className="flex items-center gap-4 p-3 bg-slate-800 rounded">
                    <div className="w-12 h-18 bg-gradient-to-br from-purple-600 to-blue-600 rounded flex items-center justify-center">
                      <span className="text-2xl">📚</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="text-sm text-slate-400">{s.chapters?.length || 0} chapters</p>
                    </div>
                    <button className="text-sm text-purple-400 hover:text-purple-300">
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;
