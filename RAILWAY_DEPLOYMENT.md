# Railway Deployment Guide

## ✅ Railway Setup - Complete Configuration

### Platform: https://railway.app
**Free Tier:** $5 credits/month (plenty for MVP!)

---

## 📁 Files Created for Railway

### 1. Railway Configuration Files

**Backend (`server/railway.toml`):**
```toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
restartPolicyType = "ON_FAILURE"
restartPolicyRetries = 5
healthcheckPath = "/api/series"
healthcheckTimeout = 300
healthcheckInterval = 30
```

**Frontend (`client/railway.toml`):**
```toml
[build]
builder = "NIXPACKS"

[deploy]
numReplicas = 1
sleepApplication = false
deployCommand = "npm run build"
publicRoutes = ["/"]
startCommand = "npx serve -s build -l $PORT"
```

### 2. Environment Variables

**Backend Service (`server/.env`):**
```env
DATABASE_URL=postgres://user:password@host:port/shinigami
JWT_SECRET=your-super-secret-key-change-in-production
PORT=5000
NODE_ENV=production
```

**Frontend Service (`client/.env`):**
```env
REACT_APP_API_URL=https://your-backend-service.railway.app/api
NODE_ENV=production
```

### 3. Railway Project Structure

```
shinigami-reader/
├── server/
│   ├── railway.toml       ← NEW! Railway config
│   ├── package.json
│   ├── src/index.js
│   ├── prisma/schema.prisma
│   └── .env.example       ← Template for env vars
├── client/
│   ├── railway.toml       ← NEW! Railway config
│   ├── package.json
│   └── .env.example       ← Template for env vars
└── README.md
```

---

## 🚀 Deploy to Railway (Step by Step)

### Step 1: Create Railway Account
1. Go to https://railway.app
2. Sign up with GitHub
3. Verify email

### Step 2: Setup PostgreSQL Database

**Option A: Railway Managed PostgreSQL (Recommended)**
```bash
# In Railway Dashboard
# 1. New → Database → PostgreSQL
# 2. Select plan: Starter (Free)
# 3. Copy connection string from Variables tab
```

**Option B: External PostgreSQL**
- Use Neon.tech (free tier)
- Use Supabase (free tier)

### Step 3: Deploy Backend

1. **New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose: `sirwhy/Builder`

2. **Configure Backend Service**
   - Click project → "Add Service"
   - Select "Git" or "Empty Service"
   - Root Directory: `server`
   - Build Command: `npm install && npx prisma generate`
   - Start Command: `npm start`

3. **Set Environment Variables**
   - Click service → "Variables"
   - Add:
     ```
     DATABASE_URL=postgres://user:pass@host:5432/shinigami
     JWT_SECRET=your-secret-key-here
     PORT=5000
     NODE_ENV=production
     ```

4. **Deploy**
   - Railway auto-deploys on push
   - Wait for green checkmark ✅

### Step 4: Deploy Frontend

1. **Add Frontend Service**
   - In same project → "Add Service"
   - Root Directory: `client`
   - Build Command: `npm run build`
   - Start Command: `npx serve -s build -l $PORT`

2. **Set Environment Variables**
   - Add:
     ```
     REACT_APP_API_URL=https://your-backend-service.railway.app/api
     NODE_ENV=production
     ```

3. **Deploy**
   - Auto-deploys on push ✅

### Step 5: Run Database Migration

**Method 1: Via Railway Terminal**
```bash
# In Railway Dashboard → Backend → Terminal
cd server
npx prisma db push
```

**Method 2: Via Script**
Create `scripts/deploy.sh`:
```bash
#!/bin/bash
echo "Running database migration..."
curl -X POST https://api.railway.app/railway/api/v2/project/YOUR_PROJECT_ID/deployment/generate \
  -H "Authorization: Bearer $RAILWAY_TOKEN" \
  -H "Content-Type: application/json"
```

### Step 6: Create Admin User

**Via Railway Terminal or cURL:**
```bash
# Get your backend URL from Railway
BACKEND_URL=https://your-backend-service.railway.app

# Create admin
curl -X POST "$BACKEND_URL/api/admin/register" \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

---

## 🔗 Service URLs

After deployment:

**Frontend:** `https://your-frontend-service.railway.app/`
**Backend API:** `https://your-backend-service.railway.app/api/`
**Admin Panel:** `https://your-frontend-service.railway.app/admin/login`

---

## 📝 Environment Variable Templates

### Backend `.env.example`
```env
DATABASE_URL=postgres://user:password@host:5432/shinigami?schema=public
JWT_SECRET=your-random-secret-key-min-32-characters
PORT=5000
NODE_ENV=production

# Optional: CORS settings
CORS_ORIGIN=https://your-frontend.railway.app
```

### Frontend `.env.example`
```env
REACT_APP_API_URL=https://your-backend.railway.app/api
NODE_ENV=production
```

---

## 🔧 Troubleshooting

### Issue: Build fails
**Solution:**
```bash
# Check build logs in Railway
# Common fixes:
- Ensure all dependencies in package.json
- Run `npm install` locally to verify
- Check Node.js version (20.x recommended)
```

### Issue: Database connection error
**Solution:**
```bash
# Check DATABASE_URL format
# Must include schema parameter
DATABASE_URL="postgres://user:pass@host:5432/shinigami?schema=public"
```

### Issue: Prisma schema errors
**Solution:**
```bash
# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# View schema
npx prisma db pull
```

### Issue: CORS errors
**Solution:**
Update `server/src/index.js`:
```javascript
app.use(cors({
  origin: ['https://your-frontend.railway.app', 'http://localhost:3000'],
  credentials: true,
}));
```

---

## 🎯 Post-Deployment Checklist

- [ ] Backend service deployed (green ✅)
- [ ] Frontend service deployed (green ✅)
- [ ] PostgreSQL database created
- [ ] Environment variables set
- [ ] Database migration completed
- [ ] Admin user created
- [ ] Frontend can fetch data from backend
- [ ] Admin login works
- [ ] HTTPS enabled (automatic in Railway)
- [ ] Custom domain configured (optional)

---

## 🌐 Custom Domain (Optional)

1. **Railway Dashboard** → Project → Domain
2. **Add Custom Domain**
   ```
   frontend: shinigami.com
   backend: api.shinigami.com
   ```
3. **Update DNS:**
   ```
   Type: CNAME
   Name: www
   Value: cname.railway.app
   ```
4. **Update Environment Variables:**
   ```
   REACT_APP_API_URL=https://api.shinigami.com/api
   ```

---

## 💰 Cost Estimate

**Free Tier ($0/month):**
- Backend Service: ✅ Free (limited build minutes)
- Frontend Service: ✅ Free
- PostgreSQL: ✅ Free (1 database, limited storage)

**Starter Plan ($5/month):**
- Unlimited build minutes
- More database storage
- Priority support

---

## 🚨 Important Notes

1. **Never commit `.env` files** - Always use Railway Variables
2. **Use strong JWT_SECRET** - Min 32 characters, random
3. **Regular backups** - Export database periodically
4. **Monitor usage** - Check Railway dashboard for credits
5. **Enable health checks** - Railway auto-restarts on failure

---

## 📞 Support

**Railway Docs:** https://docs.railway.app
**Railway Discord:** https://discord.gg/railway
**Railway Status:** https://status.railway.app

---

**Ready to deploy? Let's go! 🚀**
