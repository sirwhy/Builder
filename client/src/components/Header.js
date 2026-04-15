import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      window.location.href = `/browse?search=${encodeURIComponent(searchTerm)}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <span className="text-xl font-bold gradient-text">SHINIGAMI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              HOME
            </Link>
            <Link to="/browse" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              BROWSE
            </Link>
            <Link to="/latest" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              LATEST
            </Link>
          </div>

          {/* Search & Auth */}
          <div className="hidden md:flex items-center gap-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search series..."
                className="w-72 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              />
              <svg className="absolute right-3.5 top-3 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </form>
            
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-slate-300">
                  👋 {user.username || user.email}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link to="/user/login" className="text-sm font-medium text-slate-300 hover:text-white">
                  Sign In
                </Link>
                <Link to="/user/register" className="px-5 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <form onSubmit={handleSearch} className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search series..."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white"
              />
            </form>

            <div className="flex flex-col gap-2 mb-4">
              <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white">
                HOME
              </Link>
              <Link to="/browse" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white">
                BROWSE
              </Link>
              <Link to="/latest" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white">
                LATEST
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {user ? (
                <>
                  <span className="px-4 py-2 text-sm text-slate-300">
                    👋 {user.username || user.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/user/login" className="px-4 py-2 text-sm font-medium text-slate-300 text-left hover:text-white">
                    Sign In
                  </Link>
                  <Link to="/user/register" className="px-4 py-2 text-sm bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-lg transition-colors text-center">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
