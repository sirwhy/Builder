'use client';

// Dynamic rendering - don't prerender admin pages
export const dynamic = 'force-dynamic';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

interface Series {
  id: number;
  title: string;
  slug: string;
  cover: string;
  author: string;
  status: string;
  rating: number;
  views: number;
  chapters: any[];
}

export default function AdminSeries() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [series, setSeries] = useState<Series[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
    fetchSeries();
  }, [status, router]);

  const fetchSeries = async () => {
    try {
      const res = await fetch("/api/admin/series");
      const data = await res.json();
      setSeries(data);
    } catch (error) {
      console.error("Failed to fetch series:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure?")) return;
    
    try {
      await fetch(`/api/admin/series/${id}`, { method: "DELETE" });
      fetchSeries();
    } catch (error) {
      console.error("Failed to delete:", error);
    }
  };

  if (status === "loading" || loading) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Manage Series</h1>
          <Link href="/admin/dashboard" className="text-sm text-gray-400 hover:text-white">
            ← Dashboard
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">All Series ({series.length})</h2>
          <Link
            href="/admin/series/new"
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm font-semibold"
          >
            + Add New Series
          </Link>
        </div>

        {series.length === 0 ? (
          <div className="bg-gray-900 rounded border border-gray-800 p-12 text-center">
            <p className="text-gray-400 mb-4">No series found</p>
            <Link
              href="/admin/series/new"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-sm font-semibold"
            >
              Add Your First Series
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {series.map((s) => (
              <div key={s.id} className="bg-gray-900 rounded border border-gray-800 overflow-hidden">
                <div className="aspect-[2/3] bg-gray-800 relative">
                  {s.cover ? (
                    <img src={s.cover} alt={s.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-4xl">📚</div>
                  )}
                  <div className="absolute top-2 right-2 px-2 py-1 bg-black/70 rounded text-xs font-medium">
                    {s.status}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">{s.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{s.author || "Unknown"}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{s.chapters?.length || 0} chapters</span>
                    <span className="text-yellow-500">⭐ {s.rating || 0}</span>
                  </div>
                  
                  <div className="mt-4 flex gap-2">
                    <Link
                      href={`/admin/series/${s.id}/edit`}
                      className="flex-1 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-sm text-center"
                    >
                      Edit
                    </Link>
                    <Link
                      href={`/admin/series/${s.id}/chapters`}
                      className="flex-1 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-sm text-center"
                    >
                      Chapters
                    </Link>
                    <button
                      onClick={() => handleDelete(s.id)}
                      className="px-3 py-1.5 bg-red-600/50 hover:bg-red-600 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
