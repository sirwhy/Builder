# 🚀 Railway Deployment Tutorial - Complete Setup Guide

**Project:** Shinigami Reader  
**Stack:** React + Express + PostgreSQL + Prisma  
**Platform:** Railway.app  
**Goal:** Deploy website + admin panel perfectly

---

## 📋 **Complete Checklist**

### **Phase 1: Database Setup**
- [ ] Create PostgreSQL database
- [ ] Copy connection string

### **Phase 2: Backend Deployment**
- [ ] Deploy backend service
- [ ] Set environment variables
- [ ] Run database migration
- [ ] Create admin user

### **Phase 3: Frontend Deployment**
- [ ] Deploy frontend service
- [ ] Set environment variables
- [ ] Test admin panel

### **Phase 4: Verification**
- [ ] Test website homepage
- [ ] Test admin login
- [ ] Test CRUD operations

---

## 🗄️ **Phase 1: Database Setup**

### **Option A: Railway Managed PostgreSQL** ⭐ Recommended

**Step 1: Create Database**
1. Open Railway Dashboard
2. Click **"Add"** → **"Database"** → **"PostgreSQL"**
3. Select plan: **Starter (Free)**
4. Name: `shinigami-db`
5. Region: **Singapore** (closest to Asia)
6. Click **"Create"**

**Step 2: Copy Database URL**
1. Click on the database service
2. Go to **"Variables"** tab
3. Copy the value of `DATABASE_URL`
4. Format looks like:
   ```
   postgres://user:xxxxxxxx@ep-xxxxxxxx.ap-southeast-1.aws.neon.tech/shinigami?schema=public
   ```

### **Option B: External PostgreSQL (Neon/Supabase)**

**Neon.tech (Free Tier):**
1. Go to https://neon.tech
2. Sign up with GitHub
3. Create new project
4. Copy connection string (include `sslmode=require`)
5. Format:
   ```
   postgresql://user:pass@ep-xxx-xxx.ap-southeast-1.aws.neon.tech/shinigami?sslmode=require
   ```

**Supabase (Free Tier):**
1. Go to https://supabase.com
2. Create new project
3. Go to Project Settings → Database
4. Copy Connection String → `Pooler`
5. Format:
   ```
   postgresql://postgres:pass@psd-xxx-xxx.aws.supabase.co:6543/postgres?sslmode=require
   ```

---

## 🔧 **Phase 2: Backend Deployment**

### **Step 1: Verify Backend Configuration**

**Backend Service → Settings Tab:**

```yaml
Framework Preset: Other
Root Directory: server
Build Command: npm install && npx prisma generate
Start Command: npm start
```

### **Step 2: Set Environment Variables**

**Backend Service → Variables Tab:**

Click **"Add Variable"** and paste these:

```env
DATABASE_URL=postgres://user:xxxxxxxx@ep-xxx.ap-southeast-1.aws.neon.tech/shinigami?schema=public
JWT_SECRET=super-secret-random-key-123456789abcdef123456789abcdef-very-long-32-chars
PORT=5000
NODE_ENV=production
CORS_ORIGIN=*
```

**Important Notes:**
- `DATABASE_URL`: Use the one from Step 1 (Phase 1)
- `JWT_SECRET`: Must be at least 32 characters, use random string
- `CORS_ORIGIN=*`: Use for testing, later restrict to frontend URL

### **Step 3: Deploy Backend**

1. After setting variables, Railway auto-deploys
2. Wait for deployment to complete (green checkmark ✅)
3. Check **"Deployments"** tab for progress
4. If error, check **"Logs"** tab

### **Step 4: Run Database Migration**

**Backend Service → Terminal Tab:**

```bash
# Navigate to project root (if needed)
cd /repo/server

# Push Prisma schema to database
npx prisma db push
```

**Expected Output:**
```
🎉 Your database is now in sync with your schema!

Deployed your schema to the PostgreSQL database

Prisma schema sync completed
```

### **Step 5: Create Admin User**

**In the same Terminal:**

```bash
curl -X POST https://shinigami-backend-xxxxx.railway.app/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"Admin123!"}'
```

**Replace URL with actual backend URL** (from Service tab)

**Expected Output:**
```json
{
  "message": "Admin created successfully",
  "user": {
    "id": "1",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

---

## 🎨 **Phase 3: Frontend Deployment**

### **Step 1: Verify Frontend Configuration**

**Frontend Service → Settings Tab:**

```yaml
Framework Preset: Other
Root Directory: client
Build Command: npm run build
Start Command: npx serve -s build -l $PORT
```

### **Step 2: Set Environment Variables**

**Frontend Service → Variables Tab:**

Add variable:

```env
REACT_APP_API_URL=https://shinigami-backend-xxxxx.railway.app/api
NODE_ENV=production
```

**Important:**
- Replace `shinigami-backend-xxxxx` with your actual backend service name
- Check backend URL from Backend Service tab

### **Step 3: Deploy Frontend**

1. After setting variables, Railway auto-deploys
2. Wait for deployment to complete (green checkmark ✅)
3. Frontend service will have its own URL

---

## ✅ **Phase 4: Verification**

### **Step 1: Test Backend API**

**Backend → Terminal:**

```bash
# Test API endpoint
curl https://shinigami-backend-xxxxx.railway.app/api/series

# Expected response:
{
  "series": [],
  "total": 0,
  "page": 1,
  "limit": 12
}
```

### **Step 2: Test Frontend Loads**

Open in browser:
```
https://shinigami-frontend-xxxxx.railway.app
```

Should see:
- Homepage with hero banner
- Trending series section
- Latest updates section

### **Step 3: Test Admin Panel**

Open in browser:
```
https://shinigami-frontend-xxxxx.railway.app/admin/login
```

Should see login form with:
- Email input
- Password input
- "Sign In" button

### **Step 4: Login to Admin**

**Enter credentials:**
```
Email: admin@example.com
Password: Admin123!
```

**Click "Sign In"**

**Expected:** Redirect to `/admin/dashboard`

### **Step 5: Test Admin Dashboard**

Should see:
- Dashboard with statistics (0 Total Series)
- Action buttons (Add Series, Manage Series, etc.)
- Recent Series list (empty)

---

## 🔧 **Troubleshooting**

### **Error: Build Failed**

**Solution:**
```bash
# Check build logs in Railway Dashboard
# Common fixes:

# 1. Missing dependencies
# Check package.json has all required deps

# 2. Node version issue
# Railway uses latest Node, should be fine

# 3. Prisma schema error
# Test locally first:
# npx prisma validate
```

### **Error: Database Connection Failed**

**Solution:**
```bash
# Check DATABASE_URL format
# Must include schema parameter:
DATABASE_URL="postgres://user:pass@host:5432/shinigami?schema=public"

# Check database service is running
# Railway → Database → Status should be green

# Test connection from terminal:
psql "postgres://user:pass@host:5432/shinigami?schema=public"
```

### **Error: CORS Errors in Browser Console**

**Solution:**
```bash
# Update CORS_ORIGIN in backend variables
CORS_ORIGIN=https://your-frontend.railway.app

# Or use wildcard (less secure but works for testing)
CORS_ORIGIN=*
```

### **Error: Can't Login to Admin**

**Solution:**
```bash
# Check if user exists:
# Terminal → npx prisma user findMany

# If not, recreate admin:
curl -X POST https://backend.railway.app/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"Admin123!"}'

# Clear browser cache and cookies
```

### **Error: Frontend Can't Fetch Data**

**Solution:**
```bash
# Check REACT_APP_API_URL is correct
REACT_APP_API_URL=https://backend.railway.app/api

# Test backend endpoint:
curl https://backend.railway.app/api/series

# Check CORS settings
# Check backend is running
```

---

## 🌐 **Custom Domain (Optional)**

### **Step 1: Add Custom Domain**

**Railway → Project → Domains**
```
frontend: shinigami.com
backend: api.shinigami.com
```

### **Step 2: Configure DNS**

**Add CNAME record:**
```
Type: CNAME
Name: www
Value: cname.railway.app
```

### **Step 3: Update Environment Variables**

```
REACT_APP_API_URL=https://api.shinigami.com/api
CORS_ORIGIN=https://shinigami.com
```

---

## 💰 **Cost Breakdown**

**Free Tier:**
- Backend Service: ✅ Free (limited build minutes)
- Frontend Service: ✅ Free (static hosting)
- PostgreSQL: ✅ Free (Starter plan)
- **Total: $0/month**

**Starter Plan ($5/month):**
- Unlimited build minutes
- More database storage
- Priority support

---

## 📊 **Project Structure**

```
shinigami-reader/
├── server/                 # Express Backend
│   ├── src/
│   │   └── index.js       # Express server
│   ├── routes/
│   │   ├── series.js      # Series API
│   │   ├── chapters.js    # Chapters API
│   │   └── admin.js       # Admin auth
│   ├── lib/
│   │   └── prisma.js      # Prisma client
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── package.json
│   ├── railway.toml
│   └── .env.example
├── client/                 # React Frontend
│   ├── src/
│   │   ├── App.js         # Main app
│   │   ├── api.js         # API client
│   │   ├── components/    # Header, Footer, Cards
│   │   └── pages/         # Home, Browse, Admin
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── railway.toml
│   └── .env.example
└── package.json           # Root (scripts only)
```

---

## 📝 **Environment Variables Summary**

### **Backend Variables:**
```
DATABASE_URL=postgresql://...
JWT_SECRET=super-long-random-secret-key
PORT=5000
NODE_ENV=production
CORS_ORIGIN=*
```

### **Frontend Variables:**
```
REACT_APP_API_URL=https://backend.railway.app/api
NODE_ENV=production
```

---

## 🎯 **Quick Commands Reference**

### **Railway Commands:**
```bash
# Login Railway
railway login

# Link project
railway link -p shinigami-reader

# View logs
railway logs

# Set variables
railway variables set DATABASE_URL=your-url

# Deploy
railway deploy
```

### **Backend Commands:**
```bash
# Generate Prisma client
npx prisma generate

# Push schema
npx prisma db push

# Open Prisma Studio
npx prisma studio

# Start server
npm start
```

### **Frontend Commands:**
```bash
# Development (local only)
npm start

# Build for production
npm run build

# Build and serve
npm run build && npx serve -s build
```

---

## ✅ **Final Checklist**

- [ ] PostgreSQL database created (Railway or external)
- [ ] Backend deployed (green ✅)
- [ ] Frontend deployed (green ✅)
- [ ] DATABASE_URL set correctly
- [ ] JWT_SECRET set (32+ chars)
- [ ] REACT_APP_API_URL set correctly
- [ ] Database migration completed
- [ ] Admin user created
- [ ] Backend API responds to curl
- [ ] Frontend loads homepage
- [ ] Admin login page accessible
- [ ] Can login to admin panel
- [ ] Dashboard loads without errors

---

## 🚀 **Success! You're Done!**

If all above checks pass:
- ✅ Website is live: `https://your-frontend.railway.app`
- ✅ Admin panel is live: `https://your-frontend.railway.app/admin/login`
- ✅ API is live: `https://your-backend.railway.app/api`
- ✅ Database is connected
- ✅ Admin user is created

**Now you can start adding content to your Manhwa/Manga platform!** 📚

---

**Need help? Check Railway Docs: https://docs.railway.app**

---

## 📞 **Support**

- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **Railway Status:** https://status.railway.app

---

**Good luck with your deployment! 🎉**
