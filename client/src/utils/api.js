const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = {
  // Series API
  getSeries: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(`${API_URL}/series?${queryString}`);
    return res.json();
  },
  
  getSeriesById: async (id) => {
    const res = await fetch(`${API_URL}/series/${id}`);
    return res.json();
  },
  
  getSeriesBySlug: async (slug) => {
    const res = await fetch(`${API_URL}/series/slug/${slug}`);
    return res.json();
  },
  
  createSeries: async (data, token) => {
    const res = await fetch(`${API_URL}/series`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  
  updateSeries: async (id, data, token) => {
    const res = await fetch(`${API_URL}/series/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return res.json();
  },
  
  deleteSeries: async (id, token) => {
    const res = await fetch(`${API_URL}/series/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return res.json();
  },
  
  // Chapters API
  getChapters: async (seriesId) => {
    const res = await fetch(`${API_URL}/chapters/series/${seriesId}`);
    return res.json();
  },
  
  getChapter: async (id) => {
    const res = await fetch(`${API_URL}/chapters/${id}`);
    return res.json();
  },
  
  // Admin API
  login: async (credentials) => {
    const res = await fetch(`${API_URL}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return res.json();
  },
  
  getSettings: async (token) => {
    const res = await fetch(`${API_URL}/admin/settings`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return res.json();
  },
};

export default api;
