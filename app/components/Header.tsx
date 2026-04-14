import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-400">
              🌙 Shinigami
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/browse"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Browse
            </Link>
            <Link
              href="/latest"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Latest
            </Link>
            <Link
              href="/popular"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Popular
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="px-4 py-2 text-sm font-semibold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
