import Link from "next/link";

const updates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min ago" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min ago" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min ago" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour ago" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours ago" },
  { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours ago" },
  { id: 7, series: "The Breaker", chapter: "Chapter 72", time: "4 hours ago" },
  { id: 8, series: "Wind Breaker", chapter: "Chapter 445", time: "5 hours ago" },
  { id: 9, series: "Noblesse", chapter: "Chapter 544", time: "6 hours ago" },
  { id: 10, series: "Hardcore Leveling Warrior", chapter: "Chapter 329", time: "8 hours ago" },
];

export default function Latest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-xl">⚡</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shinigami
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Browse</Link>
              <Link href="/latest" className="text-sm font-semibold text-indigo-400">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-5 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors">
                Login
              </button>
              <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">Latest Updates</h1>
          <p className="text-gray-400">New chapters uploaded today</p>
        </div>

        <div className="space-y-3">
          {updates.map((update) => (
            <Link
              key={update.id}
              href={`/series/${update.id}`}
              className="flex items-center gap-4 p-5 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-white/10 transition-all hover:scale-[1.02]"
            >
              <div className="w-16 h-20 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl flex-shrink-0 shadow-lg shadow-purple-500/25">
                📚
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-base mb-1">{update.series}</h3>
                <p className="text-sm text-indigo-400">{update.chapter}</p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap">{update.time}</span>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:opacity-90 transition-all shadow-xl shadow-purple-500/25">
            Load More Updates
          </button>
        </div>
      </div>
    </div>
  );
}
