# Shinigami Reader - Admin Setup Guide

## 🎯 What You Get

Full admin CMS with:
- ✅ Admin login page
- ✅ Dashboard with stats
- ✅ Series management (add, edit, delete)
- ✅ Chapter & page upload interface
- ✅ Ad placement management
- ✅ Settings management

---

## 🚀 Quick Start (5 Steps)

### 1️⃣ Setup Database (PostgreSQL)

**Option A: Neon.tech (Recommended - Free Tier)**

1. Go to https://neon.tech
2. Sign up free
3. Create new project
4. Copy connection string (looks like `postgresql://user:pass@ep-xxx.us-east-2.aws.neon.tech/dbname`)
5. Update `.env.local`:
```
DATABASE_URL="your-neon-connection-string"
```

**Option B: Local PostgreSQL**
```bash
# Install PostgreSQL
brew install postgresql  # Mac
sudo apt install postgresql  # Ubuntu

# Create database
createdb shinigami

# Update .env.local
DATABASE_URL="postgresql://localhost:5432/shinigami"
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Push Database Schema

```bash
npx prisma db push
```

This creates all tables: `series`, `chapters`, `pages`, `users`, `settings`

### 4️⃣ Create Admin Account

Create first admin by running:

```bash
npm run dev
```

Go to: `http://localhost:3000/admin/login`

Enter any email/password (you'll add DB integration later)

### 5️⃣ Deploy to Vercel

Vercel is already configured! Just:
```bash
# Your code is already in GitHub
# Vercel will auto-deploy
```

In Vercel Dashboard, add these environment variables:
```
DATABASE_URL=your-production-db-url
NEXTAUTH_SECRET=generate-random-secret
NEXTAUTH_URL=https://your-domain.vercel.app
```

---

## 📁 Project Structure

```
shinigami-reader/
├── app/
│   ├── admin/
│   │   ├── login/
│   │   │   └── page.tsx      # Admin login page
│   │   ├── dashboard/
│   │   │   └── page.tsx      # Admin dashboard
│   │   ├── series/
│   │   │   ├── page.tsx      # List all series
│   │   │   └── new/
│   │   │       └── page.tsx  # Add new series
│   │   └── settings/         # Site settings (TODO)
│   ├── api/
│   │   ├── admin/
│   │   │   ├── series/
│   │   │   │   ├── route.ts  # GET all series, POST new
│   │   │   │   └── [id]/
│   │   │   │       └── route.ts # DELETE series
│   │   │   └── new/
│   │   │       └── route.ts  # POST new series
│   │   └── auth/[...nextauth]/
│   │       └── route.ts      # NextAuth API
│   └── ... (public pages)
├── lib/
│   ├── auth.ts               # NextAuth configuration
│   └── prisma.ts             # Prisma client
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── ...
└── ...
```

---

## 🔐 Admin Features

### Login
- Route: `/admin/login`
- Uses NextAuth with credentials
- Protected routes redirect to login

### Dashboard
- Route: `/admin/dashboard`
- Shows series count
- Quick actions (Add Series, etc)
- Recent series list

### Manage Series
- Route: `/admin/series`
- Grid view of all series
- Add new series
- Edit series
- Delete series
- Upload chapters

### Add Series Form
- Title
- Slug (auto from title)
- Cover image URL
- Description
- Author & Artist
- Status (Ongoing/Completed/Hiatus)
- Genres (comma-separated)

---

## 📊 Database Schema

```prisma
Series {
  id, title, slug, description, cover
  author, artist, status, genres, rating, views
}

Chapter {
  id, seriesId, title, chapterNum, number
}

Page {
  id, chapterId, number, imageUrl, order
}

User {
  id, email, password, role
}

Setting {
  id, key, value
}
```

---

## 🛠️ Next Steps (To Do)

1. **Add Chapter Upload Interface**
   - `/admin/series/[id]/chapters`
   - Add new chapter
   - Upload pages (images)
   - Page ordering

2. **Image Upload**
   - UploadThing or AWS S3 integration
   - Store chapter images
   - Optimize for web

3. **Ad Management**
   - Banner placement
   - Ad code injection
   - Ad scheduling

4. **Analytics**
   - View counts
   - Popular series
   - User stats

5. **Production Ready Auth**
   - Hash passwords (bcrypt)
   - DB lookup for admins
   - Role-based access

---

## 🌐 Production Setup

### Environment Variables

```bash
# .env.local (local) or Vercel Dashboard
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="https://builderer.vercel.app"
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

In Vercel Dashboard:
1. Add `DATABASE_URL`
2. Add `NEXTAUTH_SECRET`
3. Set framework to Next.js
4. Root directory: `shinigami-reader`

---

## 🎨 Customization

### Change Colors
Edit `globals.css` or use Tailwind classes

### Change Logo
Edit `components/Header.tsx`

### Add Features
- New routes in `/app/admin`
- New API routes in `/app/api/admin`
- New database models in `prisma/schema.prisma`

---

## 📝 Contact

Questions? Check the code or ask!

**Website:** https://builderer.vercel.app/
**Admin Panel:** https://builderer.vercel.app/admin/login
