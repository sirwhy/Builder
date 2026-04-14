'use client';

import Link from "next/link";

export default function Home() {
  const featuredSeries = [
    { id: 1, title: "Solo Leveling", rating: 4.9, chapters: 179, genre: "Action" },
    { id: 2, title: "Tower of God", rating: 4.8, chapters: 590, genre: "Fantasy" },
    { id: 3, title: "The Beginning After The End", rating: 4.9, chapters: 198, genre: "Fantasy" },
    { id: 4, title: "Omniscient Reader", rating: 4.8, chapters: 201, genre: "Action" },
    { id: 5, title: "Lookism", rating: 4.7, chapters: 478, genre: "Drama" },
    { id: 6, title: "Nano Machine", rating: 4.8, chapters: 156, genre: "Action" },
  ];

  const latestUpdates = [
    { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
    { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
    { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
    { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
    { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white">
      {/* Navigation - Premium Design */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="text-3xl">⚡</span>
                <div className="absolute inset-0 bg-white/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <span className="text-3xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-purple-400 font-semibold tracking-[0.2em]">READER</span>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/" className="px-6 py-2.5 text-sm font-semibold bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-xl group hover:bg-purple-600/30 hover:border-purple-500/50 transition-all duration-300">
                Home
              </Link>
              <Link href="/browse" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">
                Browse
              </Link>
              <Link href="/latest" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">
                Latest
              </Link>
              <Link href="/popular" className="px-6 py-2.5 text-sm font-medium text-gray-400 hover:text-white border border-transparent rounded-xl group hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300">
                Popular
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-xl hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Animated */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Animations */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] animate-pulse delay-500"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          {/* Trending Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-purple-600/20 border border-purple-500/30 backdrop-blur-sm rounded-full animate-fade-in-up">
            <span className="text-sm font-semibold text-purple-400 animate-pulse">🔥 Trending Now</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight animate-fade-in-up delay-100">
            <span className="text-white">Read Your</span>
            <div className="mt-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Favorite Manhua
            </div>
          </h1>
          
          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-12 leading-relaxed animate-fade-in-up delay-200">
            Discover thousands of high-quality manhua and manhwa with an immersive reading experience.
            Updated daily with the latest chapters from popular series.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up delay-300">
            <Link href="/browse" className="group px-10 py-5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center gap-3">
              <span>Browse Series</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            <Link href="/latest" className="group px-10 py-5 text-base font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-3">
              <span>Latest Updates</span>
              <span className="group-hover:rotate-12 transition-transform duration-300">📚</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Series - Premium Cards */}
      <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-12 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">Featured Series</h2>
            </div>
            <Link href="/browse" className="group flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors">
              View All
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredSeries.map((series, index) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
                className="group relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-4">
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2 line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">{series.title}</h3>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5 bg-white/20 px-2.5 py-1.5 rounded-full">
                        <span>⭐</span>
                        <span className="font-semibold">{series.rating}</span>
                      </div>
                      <span className="text-white/80">{series.chapters} ch</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-purple-500/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 animate-scale-in transform group-hover:scale-110">
                  <span className="text-white text-sm">📖</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 via-purple-950/30 to-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 backdrop-blur-sm rounded-full">
              <span className="text-sm font-semibold text-indigo-400">🕐 Real-time Updates</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Latest Updates</h2>
            <p className="text-gray-400">New chapters uploaded daily</p>
          </div>
          
          <div className="space-y-4">
            {latestUpdates.map((update, index) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-purple-600/10 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-purple-500/10 border border-purple-500/10 hover:border-purple-500/30 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-xl shadow-purple-500/20 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-purple-400 transition-colors duration-300">{update.series}</h3>
                  <p className="text-sm text-purple-400 font-medium">{update.chapter}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>{update.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-16 text-center shadow-2xl shadow-purple-500/40 group-hover:scale-105 transition-all duration-500">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h2 className="text-5xl font-bold text-white mb-6 animate-fade-in">Start Reading Now!</h2>
              <p className="text-xl text-white/90 mb-10 max-w-lg mx-auto animate-fade-in-up">
                Join thousands of readers enjoying the best manhua and manhwa content.
              </p>
              <button className="group px-10 py-5 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce flex items-center gap-3 mx-auto">
                Get Started Free
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl shadow-xl shadow-purple-500/30">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami Reader
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-8">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Terms</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Privacy</Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out backwards;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-1000 { animation-delay: 1000ms; }
      `}</style>
    </div>
  );
}
