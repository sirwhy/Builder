import Link from "next/link";

const updates = [
  {
    id: 1,
    title: "Solo Leveling",
    chapter: "Chapter 179",
    time: "5 minutes ago",
    cover: "bg-gradient-to-br from-purple-600 to-blue-500",
  },
  {
    id: 2,
    title: "The Beginning After The End",
    chapter: "Chapter 198",
    time: "15 minutes ago",
    cover: "bg-gradient-to-br from-green-600 to-teal-500",
  },
  {
    id: 3,
    title: "Omniscient Reader",
    chapter: "Chapter 201",
    time: "30 minutes ago",
    cover: "bg-gradient-to-br from-red-600 to-orange-500",
  },
  {
    id: 4,
    title: "Tower of God",
    chapter: "Chapter 590",
    time: "1 hour ago",
    cover: "bg-gradient-to-br from-indigo-600 to-purple-500",
  },
  {
    id: 5,
    title: "Lookism",
    chapter: "Chapter 478",
    time: "2 hours ago",
    cover: "bg-gradient-to-br from-pink-600 to-rose-500",
  },
  {
    id: 6,
    title: "Nano Machine",
    chapter: "Chapter 156",
    time: "3 hours ago",
    cover: "bg-gradient-to-br from-cyan-600 to-blue-500",
  },
  {
    id: 7,
    title: "The Breaker",
    chapter: "Chapter 72",
    time: "4 hours ago",
    cover: "bg-gradient-to-br from-yellow-600 to-amber-500",
  },
  {
    id: 8,
    title: "Wind Breaker",
    chapter: "Chapter 445",
    time: "5 hours ago",
    cover: "bg-gradient-to-br from-emerald-600 to-green-500",
  },
];

export default function Latest() {
  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="px-4 py-12 mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-white">Latest Updates</h1>

        <div className="space-y-4">
          {updates.map((update) => (
            <Link
              key={update.id}
              href={`/series/${update.id}`}
              className="block p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-20 ${update.cover} rounded-lg flex items-center justify-center text-2xl group-hover:scale-105 transition-transform`}
                >
                  📚
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-sm text-gray-300">{update.chapter}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">{update.time}</span>
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    ▶
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
            Load More Updates
          </button>
        </div>
      </div>
    </div>
  );
}
