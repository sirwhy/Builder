# Vercel Configuration

**IMPORTANT:** You need to manually set the Root Directory in Vercel dashboard!

## Steps to Fix 404:

### 1. Go to Vercel Dashboard
https://vercel.com/dashboard

### 2. Find Your Project
- Look for: **Builder** project
- Current URL: `https://builder-a1e3.vercel.app/`

### 3. Change Root Directory
1. Click **Settings** → **General**
2. Scroll to **Root Directory**
3. Change from `/` to: **`shinigami-reader`**
4. Click **Save**

### 4. Redeploy
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Wait for build to complete

### 5. Check URL
- Should work: `https://builder-a1e3.vercel.app/`
- OR you can set a custom domain: `shinigami-reader.vercel.app`

---

## Alternative: Create New Project

1. Go to: https://vercel.com/new
2. Import: **Builder** repository
3. **Root Directory:** `shinigami-reader` (IMPORTANT!)
4. **Framework:** Next.js
5. Deploy!

---

## Current Config Files:

- `vercel.json` - Build configuration
- `package.json` - Build command: `npm run build`
- All source code in `shinigami-reader/` folder

---

**The issue is: Vercel is looking at root (/) instead of shinigami-reader/ folder**
