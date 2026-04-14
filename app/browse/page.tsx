import Link from "next/link";

export default function Browse() {
  const genres = [
    { name: "Action", count: 1234 },
    { name: "Adventure", count: 987 },
    { name: "Comedy", count: 756 },
    { name: "Drama", count: 1456 },
    { name: "Fantasy", count: 2345 },
    { name: "Horror", count: 543 },
    { name: "Mystery", count: 678 },
    { name: "Romance", count: 1890 },
    { name: "Sci-Fi", count: 890 },
    { name: "Slice of Life", count: 567 },
    { name: "Sports", count: 432 },
    { name: "Supernatural", count: 1123 },
  ];

  const series = [
    { id: 1, title: "Solo Leveling", chapters: 179, rating: 4.9, views: "2.3M", genre: "Action" },
    { id: 2, title: "Tower of God", chapters: 590, rating: 4.8, views: "3.1M", genre: "Fantasy" },
    { id: 3, title: "The Beginning After The End", chapters: 198, rating: 4.9, views: "1.8M", genre: "Fantasy" },
    { id: 4, title: "Omniscient Reader", chapters: 201, rating: 4.8, views: "2.7M", genre: "Action" },
    { id: 5, title: "Lookism", chapters: 478, rating: 4.7, views: "1.5M", genre: "Drama" },
    { id: 6, title: "Nano Machine", chapters: 156, rating: 4.8, views: "1.2M", genre: "Action" },
    { id: 7, title: "The Breaker", chapters: 72, rating: 4.6, views: "980K", genre: "Action" },
    { id: 8, title: "Wind Breaker", chapters: 445, rating: 4.7, views: "1.1M", genre: "Sports" },
    { id: 9, title: "Noblesse", chapters: 544, rating: 4.5, views: "2.1M", genre: "Supernatural" },
    { id: 10, title: "Hardcore Leveling Warrior", chapters: 329, rating: 4.6, views: "1.6M", genre: "Action" },
    { id: 11, title: "God of High School", chapters: 569, rating: 4.7, views: "2.9M", genre: "Action" },
    { id: 12, title: "Weak Hero", chapters: 285, rating: 4.8, views: "1.4M", genre: "Drama" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
                <span className="text-white text-xl">📚</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Shinigami Reader</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/browse" className="text-sm font-medium text-blue-600">Browse</Link>
              <Link href="/latest" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Latest</Link>
              <Link href="/popular" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Popular</Link>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                Login
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Series</h1>
          <p className="text-gray-600">Discover thousands of manhua and manhwa</p>
        </div>

        {/* Genre Filter */}
        <section className="mb-8">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Genres</h2>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
              All ({series.length})
            </button>
            {genres.map((genre) => (
              <button
                key={genre.name}
                className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition-colors"
              >
                {genre.name} ({genre.count})
              </button>
            ))}
          </div>
        </section>

        {/* Series Grid */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">All Series</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {series.map((s) => (
              <Link
                key={s.id}
                href={`/series/${s.id}`}
                className="group"
              >
                <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 shadow-sm group-hover:shadow-lg transition-shadow">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-end p-3">
                    <div>
                      <h3 className="font-semibold text-white text-xs mb-1 line-clamp-2">{s.title}</h3>
                      <div className="flex items-center gap-1 text-[10px] text-gray-300">
                        <span>⭐ {s.rating}</span>
                        <span>•</span>
                        <span>{s.chapters}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:opacity-90 transition-opacity">
            Load More Series
          </button>
        </div>
      </div>
    </div>
  );
}
