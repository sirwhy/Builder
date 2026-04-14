'use client';

interface Announcement {
  id: number;
  thumbnail: string;
  title: string;
  date: string;
  description?: string;
}

interface AnnouncementSectionProps {
  announcements: Announcement[];
}

export default function AnnouncementSection({ announcements }: AnnouncementSectionProps) {
  return (
    <div className="py-6 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-white">Latest Updates</h2>
          <a href="/latest" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
            View All →
          </a>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {announcements.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-72 md:w-80 snap-start group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                {/* Thumbnail */}
                <div 
                  className="aspect-[16/9] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.thumbnail}')`,
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-purple-500/90 backdrop-blur-sm rounded-lg text-xs font-bold text-white">
                    {item.date}
                  </div>
                </div>

                {/* Content */}
                <div className="p-3">
                  <h3 className="font-semibold text-white text-sm mb-1 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
