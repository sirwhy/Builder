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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-purple-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Shinigami
                </span>
                <span className="text-xs text-gray-500 font-semibold tracking-wider">READER</span>
              </div>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-base font-semibold text-purple-600 bg-purple-50 px-4 py-2 rounded-lg">
                Home
              </Link>
              <Link href="/browse" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                Browse
              </Link>
              <Link href="/latest" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                Latest
              </Link>
              <Link href="/popular" className="text-base font-medium text-gray-600 hover:text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors">
                Popular
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button className="px-6 py-2.5 text-sm font-semibold text-purple-600 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                Login
              </button>
              <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl hover:shadow-lg transition-all">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
            <span className="text-sm font-semibold text-white">🔥 Trending Now</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-white">Read Your</span>
            <div className="mt-4 text-white">
              Favorite Manhua
            </div>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-white/90 mb-10 leading-relaxed">
            Discover thousands of high-quality manhua and manhwa with smooth reading experience.
            Updated daily with the latest chapters from popular series.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/browse" className="px-10 py-5 text-base font-semibold text-white bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all flex items-center gap-3">
              <span>Browse Series</span>
              <span>→</span>
            </Link>
            <Link href="/latest" className="px-10 py-5 text-base font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all flex items-center gap-3">
              <span>Latest Updates</span>
              <span>📚</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Series */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-gray-900">Featured Series</h2>
            </div>
            <Link href="/browse" className="flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">
              View All
              <span>→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {featuredSeries.map((series) => (
              <Link
                key={series.id}
                href={`/series/${series.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg group-hover:shadow-2xl transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-4">
                    <div>
                      <h3 className="font-bold text-white text-sm mb-2">{series.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-white/90">
                        <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full">
                          <span>⭐</span>
                          <span className="font-semibold">{series.rating}</span>
                        </div>
                        <span>{series.chapters} ch</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 border border-indigo-200 rounded-full">
              <span className="text-sm font-semibold text-indigo-700">🕐 Real-time Updates</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
            <p className="text-gray-600">New chapters uploaded daily</p>
          </div>
          
          <div className="space-y-4">
            {latestUpdates.map((update) => (
              <Link
                key={update.id}
                href={`/series/${update.id}`}
                className="flex items-center gap-5 p-5 rounded-xl bg-white hover:bg-purple-50 transition-colors border border-gray-200 hover:border-purple-300"
              >
                <div className="w-20 h-24 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-3xl flex-shrink-0 shadow-lg">
                  📚
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{update.series}</h3>
                  <p className="text-sm text-purple-600 font-medium">{update.chapter}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>{update.time}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 p-16 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">Start Reading Now!</h2>
            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto">
              Join thousands of readers enjoying the best manhua and manhwa content.
            </p>
            <button className="px-10 py-5 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t-2 border-purple-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Shinigami Reader
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6">
              © 2024 Shinigami Reader. Built with ❤️ using Next.js & Tailwind CSS
            </p>
            <div className="flex justify-center gap-8 text-sm">
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Terms</Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Privacy</Link>
              <Link href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
