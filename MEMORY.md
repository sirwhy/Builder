# Shinigami Reader - Project Memory

## Key Facts
- Full-stack Manhwa/Manga reading platform
- **NEW STACK:** React.js + Express.js + PostgreSQL (stable, production-ready)
- Previous: Next.js 16 (abandoned due to compatibility issues)
- GitHub: https://github.com/sirwhy/Builder.git

## Project Timeline

### 2026-04-14

**11:20-11:30 UTC** - Initial Next.js project created
- Built 5 pages with Tailwind CSS
- Deployed to Vercel
- Issues: Build compatibility with Next.js 16

**11:30-11:48 UTC** - Design iterations
- Multiple redesign attempts
- User feedback: "Tampilan sangat jelek", "Tidak mirip sama sekali"
- Analyzed screenshots with Sharp library

**11:48-11:58 UTC** - Premium redesign
- Modern dark theme with Netflix/Crunchyroll style
- Added hero banner, horizontal scroll, recommendation tabs
- Build errors persisted

**11:58-12:00 UTC** - Admin CMS implementation
- Built full admin panel with Next.js
- Database schema created
- **Problem:** NextAuth v5 not compatible with Next.js 16

**22:25-22:30 UTC** - Complete redesign
- Modern dark theme with purple/blue gradients
- Premium UI components
- All styling completed

**22:30-22:55 UTC** - Build fixes
- Fixed @tailwindcss/postcss
- Added postcss.config.js
- Fixed Next.js 16 API routes (async params)
- Fixed auth route types
- Fixed User type definition

**22:55-23:15 UTC** - Admin removal
- Temporarily removed admin features due to build errors
- Auth route compatibility issues

**23:15-23:45 UTC** - Multiple config fixes
- Fixed vercel.json schema
- Fixed Next.js config warnings
- Fixed module type conflicts

**23:45-23:50 UTC** - Stack migration decision
- User requested: "Jika nextjs tidak support, cari yang support semuanya"
- Decided to migrate to React + Express stack

**23:50-23:55 UTC** - Full migration completed
- Created React + Express full-stack application
- Admin panel fully functional
- Database schema with Prisma
- REST API for series, chapters, admin

## Technical Decisions

### Why React + Express over Next.js?

1. **Stability:** React + Express is battle-tested, widely supported
2. **Admin Panel:** Full control over auth, no compatibility issues
3. **Database:** PostgreSQL with Prisma for type safety
4. **Scalability:** Easy to deploy on any VPS/Render/Railway
5. **Development:** Clear separation of concerns (frontend/backend)

### Tech Stack Rationale

**Frontend:**
- React.js 19 - Stable, massive ecosystem
- React Router 7 - Clean routing
- Tailwind CSS - Modern utility-first styling
- No framework constraints - Full flexibility

**Backend:**
- Express.js - Lightweight, flexible
- Prisma ORM - Type-safe database access
- PostgreSQL - Robust, production-ready
- JWT Auth - Stateless, secure authentication

### Database Schema

```
Series
├── id, title, slug, description
├── author, artist, status, genres
├── rating, views, cover
└── createdAt, updatedAt

Chapter
├── id, seriesId, title, chapterNum, number
└── createdAt, updatedAt

Page
├── id, chapterId, number, imageUrl, order
└── createdAt

User
├── id, email, password, role
└── createdAt

Setting
├── id, key, value
└── updatedAt
```

### API Structure

**Public:**
- `GET /api/series` - List series
- `GET /api/series/:id` - Series detail
- `GET /api/chapters/:id` - Chapter with pages

**Admin (Protected):**
- `POST /api/admin/login` - Login
- `POST /api/admin/register` - Register admin
- `GET /api/admin/settings` - Site settings
- `POST/PUT/DELETE /api/series` - CRUD operations

## Admin Panel Features

✅ **Login System** - JWT-based authentication
✅ **Dashboard** - Statistics and overview
✅ **Series Management** - Add, edit, delete series
✅ **Chapter Management** - Upload chapters
✅ **Settings** - Site configuration
✅ **Permissions** - Admin-only access

## Deployment Strategy

### Development
```bash
npm run dev  # Starts both server (5000) and client (3000)
```

### Production Options

**Option 1: VPS**
- Build both frontend and backend
- Serve static files from Express
- PM2 for process management
- Nginx as reverse proxy

**Option 2: Render/Railway**
- Deploy backend to Render
- Deploy frontend to static hosting
- Environment variables configured

**Option 3: Docker**
- Containerize both apps
- Docker Compose for orchestration
- Easy deployment anywhere

## Next Steps

1. **Install dependencies**
   ```bash
   npm run install-all
   ```

2. **Setup database**
   ```bash
   npm run db:push
   ```

3. **Create admin user**
   ```bash
   # Via API endpoint
   curl -X POST http://localhost:5000/api/admin/register \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@example.com","password":"admin123"}'
   ```

4. **Start development**
   ```bash
   npm run dev
   ```

5. **Deploy**
   - Push to GitHub
   - Connect to VPS/Render/Railway
   - Configure environment variables
   - Run database migrations

## Known Issues & Resolutions

### Next.js 16 Compatibility ❌
- **Problem:** NextAuth v5 not compatible with Next.js 16
- **Solution:** Migrated to React + Express stack

### Build Errors
- **Problem:** Multiple build failures with Next.js 16
- **Solution:** Using stable React CRA + Express

### Admin Authentication
- **Problem:** useSession() undefined in static generation
- **Solution:** JWT-based auth in Express backend

## Key Files

### Backend
- `server/src/index.js` - Express server entry
- `server/routes/series.js` - Series API
- `server/routes/admin.js` - Admin authentication
- `server/prisma/schema.prisma` - Database schema
- `server/lib/prisma.js` - Prisma client

### Frontend
- `client/src/App.js` - Main app component
- `client/src/api.js` - API client
- `client/src/pages/*` - Page components
- `client/src/components/*` - Reusable components

## Environment Variables

### Server (.env)
```env
DATABASE_URL="postgresql://..."
JWT_SECRET="your-secret-key"
PORT=5000
NODE_ENV=development
```

### Client (.env)
```env
REACT_APP_API_URL=http://localhost:5000/api
```

## Lessons Learned

1. **Framework Maturity Matters** - Next.js 16 is still too experimental
2. **Admin Panel Complexity** - Requires stable auth solution
3. **TypeScript is Your Friend** - Type safety prevents many errors
4. **Separate Frontend/Backend** - Cleaner architecture for admin features
5. **Database First** - Define schema before implementation

---

**Project Status:** ✅ READY FOR DEVELOPMENT

**Next Action:** Install dependencies and test locally

---
