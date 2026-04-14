import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <div>
              <span className="text-xl font-bold gradient-text">SHINIGAMI</span>
              <p className="text-xs text-slate-400 mt-1">Read your favorite manhwa, manga & manhua</p>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
            <Link to="/browse" className="text-slate-400 hover:text-white transition-colors">Browse</Link>
            <Link to="/latest" className="text-slate-400 hover:text-white transition-colors">Latest</Link>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">About</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-slate-500">
              © 2024 Shinigami Scans. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
