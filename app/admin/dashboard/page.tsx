'use client';

// Dynamic rendering - don't prerender admin pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">
              {session?.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              className="px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded text-sm font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-900 rounded p-6 border border-gray-800">
            <h3 className="text-2xl font-bold text-purple-500">
              {series.length}
            </h3>
            <p className="text-gray-400">Total Series</p>
          </div>
          <div className="bg-gray-900 rounded p-6 border border-gray-800">
            <h3 className="text-2xl font-bold text-green-500">0</h3>
            <p className="text-gray-400">Pending Reviews</p>
          </div>
          <div className="bg-gray-900 rounded p-6 border border-gray-800">
            <h3 className="text-2xl font-bold text-blue-500">0</h3>
            <p className="text-gray-400">System Status</p>
          </div>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link
            href="/admin/series/new"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            + Add Series
          </Link>
          <Link
            href="/admin/series"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            Manage Series
          </Link>
          <Link
            href="/admin/settings"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            Site Settings
          </Link>
          <Link
            href="/admin/analytics"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            Analytics
          </Link>
        </div>

        {/* Recent Series */}
        <div className="bg-gray-900 rounded border border-gray-800">
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Series</h2>
            <Link href="/admin/series" className="text-sm text-purple-400 hover:text-purple-300">
              View All
            </Link>
          </div>
          <div className="p-4">
            {series.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No series yet. Click "Add Series" to get started.
              </p>
            ) : (
              <div className="space-y-3">
                {series.map((s: any) => (
                  <div key={s.id} className="flex items-center gap-4 p-3 bg-gray-800 rounded">
                    {s.cover && (
                      <img src={s.cover} alt={s.title} className="w-12 h-18 object-cover rounded" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold">{s.title}</h3>
                      <p className="text-sm text-gray-400">{s.chapters?.length || 0} chapters</p>
                    </div>
                    <Link
                      href={`/admin/series/${s.id}/edit`}
                      className="text-sm text-purple-400 hover:text-purple-300"
                    >
                      Edit
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
