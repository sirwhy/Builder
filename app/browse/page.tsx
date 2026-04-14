import Link from "next/link";

export default function Browse() {
  const genres = [
    { name: "Action", color: "bg-red-600" },
    { name: "Adventure", color: "bg-green-600" },
    { name: "Comedy", color: "bg-yellow-600" },
    { name: "Drama", color: "bg-pink-600" },
    { name: "Fantasy", color: "bg-purple-600" },
    { name: "Horror", color: "bg-gray-600" },
    { name: "Romance", color: "bg-red-400" },
    { name: "Sci-Fi", color: "bg-cyan-600" },
    { name: "Slice of Life", color: "bg-blue-600" },
    { name: "Sports", color: "bg-orange-600" },
    { name: "Supernatural", color: "bg-indigo-600" },
    { name: "Mystery", color: "bg-teal-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-white">Browse Series</h1>

        {/* Genre Filter */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-semibold text-white">Genres</h2>
          <div className="flex flex-wrap gap-3">
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {genre.name}
              </button>
            ))}
          </div>
        </section>

        {/* Series Grid */}
        <section>
          <h2 className="mb-6 text-xl font-semibold text-white">All Series</h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <Link
                key={i}
                href={`/series/${i}`}
                className="group block cursor-pointer"
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="mb-1 font-semibold text-white truncate">
                      Series #{i}
                    </h3>
                    <p className="text-xs text-gray-300">Action, Fantasy</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs text-yellow-400">★ 4.8</span>
                      <span className="text-xs text-gray-400">450 ch</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
