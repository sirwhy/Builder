import Link from "next/link";

const updates = [
  { id: 1, series: "Solo Leveling", chapter: "Chapter 179", time: "5 min", cover: "purple" },
  { id: 2, series: "The Beginning After The End", chapter: "Chapter 198", time: "15 min", cover: "green" },
  { id: 3, series: "Omniscient Reader", chapter: "Chapter 201", time: "30 min", cover: "orange" },
  { id: 4, series: "Tower of God", chapter: "Chapter 590", time: "1 hour", cover: "blue" },
  { id: 5, series: "Lookism", chapter: "Chapter 478", time: "2 hours", cover: "pink" },
  { id: 6, series: "Nano Machine", chapter: "Chapter 156", time: "3 hours", cover: "cyan" },
  { id: 7, series: "The Breaker", chapter: "Chapter 72", time: "4 hours", cover: "purple" },
  { id: 8, series: "Wind Breaker", chapter: "Chapter 445", time: "5 hours", cover: "green" },
  { id: 9, series: "Noblesse", chapter: "Chapter 544", time: "6 hours", cover: "orange" },
  { id: 10, series: "Hardcore Leveling Warrior", chapter: "Chapter 329", time: "8 hours", cover: "pink" },
];

const getCoverGradient = (type: string): string => {
  const gradients: Record<string, string> = {
    'purple': 'from-purple-600 to-pink-500',
    'blue': 'from-blue-600 to-cyan-500',
    'green': 'from-green-600 to-emerald-500',
    'orange': 'from-orange-600 to-amber-500',
    'pink': 'from-pink-600 to-rose-500',
    'cyan': 'from-cyan-600 to-blue-500',
  };
  return gradients[type] || gradients['purple'];
};

export default function Latest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Latest Updates</h1>
          <p className="text-gray-400">New chapters uploaded today</p>
        </div>

        <div className="space-y-4">
          {updates.map((update) => (
            <Link
              key={update.id}
              href={`/series/${update.id}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all hover:scale-[1.02] border border-gray-700/50 hover:border-purple-500/50"
            >
              <div className={`w-16 h-20 rounded-lg bg-gradient-to-br ${getCoverGradient(update.cover)} flex items-center justify-center text-2xl`}>
                📚
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white text-lg truncate">{update.series}</h3>
                <p className="text-sm text-purple-400">{update.chapter}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 whitespace-nowrap">{update.time} ago</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  ▶
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all">
            Load More Updates
          </button>
        </div>
      </div>
    </div>
  );
}
