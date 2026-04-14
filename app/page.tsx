import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-black"></div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="text-purple-400">Shinigami</span> Reader
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
              Baca manhua dan manhwa favoritmu dengan gaya modern
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/browse"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors"
              >
                Browse Series
              </a>
              <a
                href="/latest"
                className="px-8 py-3 text-lg font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                Latest Updates
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Series */}
      <section className="px-4 py-12 mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-white">Popular Series</h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-gray-800">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="font-semibold text-white">Series #{i}</h3>
                  <p className="text-sm text-gray-300">45 Chapters</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="px-4 py-12 bg-gray-800">
        <div className="px-4 py-12 mx-auto max-w-7xl">
          <h2 className="mb-8 text-2xl font-bold text-white">Latest Updates</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
              >
                <div className="w-16 h-20 bg-gray-600 rounded"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">Series #{i}</h3>
                  <p className="text-sm text-gray-300">Chapter {100 + i}</p>
                </div>
                <span className="text-sm text-gray-400">2 hours ago</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 bg-gray-900">
        <p>&copy; 2024 Shinigami Reader. All rights reserved.</p>
      </footer>
    </div>
  );
}
