import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <span className="text-xl">📚</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shinigami Reader
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/browse" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Browse
            </Link>
            <Link href="/latest" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Latest
            </Link>
            <Link href="/popular" className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium">
              Popular
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-semibold text-purple-400 border border-purple-500/50 rounded-lg hover:bg-purple-500/10 transition-all">
              Login
            </button>
            <button className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
