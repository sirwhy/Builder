# Shinigami Reader - Manhua/Manhwa Platform

## 🎨 About

Modern manhua/manhwa reading platform inspired by Shinigami Scans and other scanning groups. Built with Next.js 16, Tailwind CSS, and Prisma.

## ✨ Features

- **Latest Updates** - Chronological chapter updates
- **Browse Series** - Grid layout with genre filters
- **Series Details** - Synopsis, stats, chapter list
- **Chapter Reader** - Smooth page-by-page reading
- **Responsive Design** - Works on desktop & mobile
- **Dark Theme** - Eye-friendly purple/gray color scheme

## 🚀 Quick Start

### Development
```bash
cd shinigami-reader
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
npm run build
npm start
```

## 🎨 Color Customization

### Change Colors (Purple Theme)

**File:** `app/globals.css`

```css
:root {
  --background: #111827;     /* Dark gray bg */
  --foreground: #f9fafb;     /* Light text */
  --purple: #a855f7;         /* Purple accent */
  --purple-light: #c084fc;   /* Light purple */
  --purple-dark: #7c3aed;    /* Dark purple */
}
```

### To Change Colors:

**Option 1: Blue Theme**
```css
--purple: #3b82f6;
--purple-light: #60a5fa;
--purple-dark: #2563eb;
```

**Option 2: Green Theme**
```css
--purple: #10b981;
--purple-light: #34d399;
--purple-dark: #059669;
```

**Option 3: Red Theme**
```css
--purple: #ef4444;
--purple-light: #f87171;
--purple-dark: #dc2626;
```

**Option 4: Pink Theme**
```css
--purple: #ec4899;
--purple-light: #f472b6;
--purple-dark: #db2777;
```

## 📁 Project Structure

```
shinigami-reader/
├── app/
│   ├── components/
│   │   └── Header.tsx      # Navigation header
│   ├── browse/
│   │   └── page.tsx        # Browse page with genres
│   ├── latest/
│   │   └── page.tsx        # Latest updates list
│   ├── read/
│   │   └── page.tsx        # Chapter reader
│   ├── series/
│   │   └── [id]/
│   │       └── page.tsx    # Series detail page
│   ├── globals.css         # Global styles & colors
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── lib/
│   └── prisma.ts           # Database utilities
├── prisma/
│   ├── schema.prisma       # Database schema
│   └── dev.db              # SQLite database
└── package.json
```

## 🔧 Tech Stack

- **Frontend:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Database:** SQLite (Prisma ORM)
- **Authentication:** Ready for NextAuth.js
- **Hosting:** Vercel

## 📝 Pages

1. **Home** (`/`) - Hero section, popular series, latest updates
2. **Browse** (`/browse`) - All series with genre filters
3. **Latest** (`/latest`) - Chronological chapter updates
4. **Series Detail** (`/series/[id]`) - Series info + chapter list
5. **Reader** (`/read`) - Chapter page viewer

## 🎯 Customization

### Change Site Name

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "Your Platform Name - Read Manhua & Manhwa",
  description: "Your custom description here",
};
```

### Add Real Content

Replace placeholder data with real API calls:

```typescript
// Example: Fetch series from API
async function getSeries() {
  const res = await fetch('https://api.yourplatform.com/series');
  return res.json();
}
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

## 📱 Mobile Responsive

All pages are fully responsive with Tailwind breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🔐 Authentication Ready

Add NextAuth.js for user accounts:

```bash
npm install next-auth
```

## 📊 Analytics

Add Google Analytics or Plausible in `layout.tsx`:

```typescript
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Analytics script here */}
        {children}
      </body>
    </html>
  );
}
```

## 🛠️ Development Tips

1. **Hot Reload:** Changes auto-reflect in dev mode
2. **Type Safety:** Full TypeScript support
3. **Image Optimization:** Next.js Image component
4. **SEO:** Metadata API for each page

## 📚 Next Steps

- [ ] Add user authentication
- [ ] Implement real database
- [ ] Add comment system
- [ ] Add favorites/bookmarks
- [ ] Add admin panel for uploads
- [ ] Implement search functionality
- [ ] Add notifications
- [ ] Mobile app (React Native)

---

**Built with ❤️ using Next.js & Tailwind CSS**
