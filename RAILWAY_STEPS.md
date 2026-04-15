# 🚀 Railway Deployment - Step by Step Guide

**Status:** Railway account & GitHub import sudah ✅

---

## 📋 **Checklist Deploy (Urutan Penting!)**

1. [ ] Setup Environment Variables (Backend)
2. [ ] Setup Environment Variables (Frontend)
3. [ ] Setup PostgreSQL Database
4. [ ] Deploy Backend Service
5. [ ] Deploy Frontend Service
6. [ ] Run Database Migration
7. [ ] Create Admin User
8. [ ] Test Admin Panel

---

## 🔧 **Step 1: Setup PostgreSQL Database**

### **A. Create Database di Railway**

1. **Go to Railway Dashboard**
   - Project: `shinigami-reader`
   - Click: **"Add"** → **"Database"** → **"PostgreSQL"**

2. **Configure Database**
   - Plan: **Starter (Free)**
   - Name: `shinigami-db`
   - Region: Choose closest (Singapore recommended for Asia)
   - Click: **"Create"**

3. **Copy Database URL**
   - After creation, click on database
   - Go to **"Variables"** tab
   - Copy the value of `DATABASE_URL`
   - Format: `postgres://user:password@host:5432/shinigami?schema=public`

---

## ⚙️ **Step 2: Configure Backend Service**

### **A. Open Backend Service**
   - In Railway project
   - Click on **"Backend"** service (created from import)

### **B. Set Environment Variables**

Click **"Variables"** → **"Add Variable"**:

```
DATABASE_URL=postgres://user:xxxxxxxxxxxxxxxxxxxxxxxx@ep-xxxxxxxxxxxxx-pooler.ap-southeast-1.aws.neon.tech/shinigami?schema=public

JWT_SECRET=super-secret-key-123456789abcdef-very-long-and-random-123

PORT=5000

NODE_ENV=production

CORS_ORIGIN=https://your-frontend-service.railway.app
```

**⚠️ IMPORTANT:**
- Replace `DATABASE_URL` with the one you copied from database
- Make `JWT_SECRET` at least 32 characters random
- `CORS_ORIGIN` will update after frontend deploys

### **C. Verify Build Settings**

Click **"Settings"** tab → **"Build Settings"**:

```
Framework Preset: Other
Root Directory: server
Build Command: npm install && npx prisma generate
Start Command: npm start
```

---

## 🎨 **Step 3: Configure Frontend Service**

### **A. Open Frontend Service**
   - In Railway project
   - Click on **"Frontend"** service (created from import)

### **B. Set Environment Variables**

Click **"Variables"** → **"Add Variable"**:

```
REACT_APP_API_URL=https://shinigami-backend.railway.app/api

NODE_ENV=production
```

**⚠️ IMPORTANT:**
- Replace `shinigami-backend` with your actual backend subdomain
- Check backend URL from Service Details page

### **C. Verify Build Settings**

Click **"Settings"** tab → **"Build Settings"**:

```
Framework Preset: Other
Root Directory: client
Build Command: npm run build
Start Command: npx serve -s build -l $PORT
```

---

## 🗄️ **Step 4: Run Database Migration**

### **Method 1: Via Railway Terminal (Easiest)**

1. **Go to Backend Service**
   - Click on Backend service
   - Click **"Terminal"** tab (top right)

2. **Run Migration Command:**
   ```bash
   npx prisma db push
   ```

3. **Expected Output:**
   ```
   🎉 Your database is now in sync with your schema!
   
   Prisma schema sync completed
   
   Deployed your schema to the PostgreSQL database
   ```

### **Method 2: Via Script**

```bash
curl -X POST https://railway.app/api/v2/block/SHIGAMI_DB_BLOCK/generate \
  -H "Authorization: Bearer YOUR_RAILWAY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"commands":["npx prisma db push"]}'
```

---

## 👤 **Step 5: Create Admin User**

### **A. Get Backend URL**

1. **Go to Backend Service**
2. **Click "Service" tab**
3. **Copy the URL** - Format: `https://shinigami-backend-xxxxx.railway.app`

### **B. Create Admin via Railway Terminal**

1. **In Backend Terminal**

2. **Run curl command:**
   ```bash
   curl -X POST https://shinigami-backend-xxxxx.railway.app/api/admin/register \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@example.com","password":"Admin123!"}'
   ```

3. **Expected Output:**
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

### **C. Alternative: Create via cURL from Local**

If Railway terminal fails, run from your computer:

```bash
curl -X POST https://your-backend.railway.app/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"Admin123!"}'
```

---

## 🧪 **Step 6: Test Admin Panel**

### **A. Access Frontend**

1. **Get Frontend URL** from Railway service details
   - Format: `https://shinigami-frontend-xxxxx.railway.app`

2. **Open in browser**
   - Navigate to: `https://your-frontend.railway.app/admin/login`

### **B. Login to Admin**

1. **Enter credentials:**
   ```
   Email: admin@example.com
   Password: Admin123!
   ```

2. **Click "Sign In"**

3. **Expected Result:**
   - ✅ Redirected to `/admin/dashboard`
   - ✅ See dashboard with statistics
   - ✅ Can see "Recent Series" section

### **C. Test Admin Features**

1. **Click "+ Add Series" button**
   - Should show add series form

2. **Test Dashboard Stats**
   - Should see: "0 Total Series"

3. **Test Logout**
   - Click "Logout" button
   - Should redirect to `/admin/login`

---

## 🔍 **Step 7: Test API Connectivity**

### **Test Backend API**

```bash
curl https://your-backend.railway.app/api/series
```

**Expected Response:**
```json
{
  "series": [],
  "total": 0,
  "page": 1,
  "limit": 12
}
```

### **Test Authentication**

```bash
# First login
curl -X POST https://your-backend.railway.app/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"Admin123!"}' \
  -v
```

**Expected Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "1",
    "email": "admin@example.com",
    "role": "admin"
  }
}
```

---

## 🐛 **Troubleshooting**

### **Issue: Build Fails**

**Symptoms:** Build status is red ❌

**Solutions:**
```bash
# Check logs in Railway Dashboard
# Common fixes:

# 1. Missing dependencies
# Check server/package.json has all required deps

# 2. Prisma schema errors
# Run locally: npx prisma generate

# 3. Node version
# Railway uses latest Node, should be fine
```

### **Issue: Database Connection Error**

**Symptoms:** 500 error or "Database connection failed"

**Solutions:**
```bash
# Check DATABASE_URL in backend variables
# Must include schema parameter
DATABASE_URL="postgres://user:pass@host:5432/shinigami?schema=public"

# Check if database service is running
# In Railway → Database → Status should be "Green"
```

### **Issue: CORS Errors**

**Symptoms:** Frontend shows CORS error in browser console

**Solutions:**
```bash
# Update CORS_ORIGIN in backend variables
CORS_ORIGIN=https://your-frontend.railway.app

# OR use wildcard (less secure but works for dev)
CORS_ORIGIN=*
```

### **Issue: Frontend Can't Fetch Data**

**Symptoms:** Console shows 404 or 500 errors

**Solutions:**
```bash
# 1. Check REACT_APP_API_URL in frontend variables
REACT_APP_API_URL=https://your-backend.railway.app/api

# 2. Check backend is running
curl https://your-backend.railway.app/api/series

# 3. Check CORS settings
```

### **Issue: Can't Access Admin Dashboard**

**Symptoms:** Redirects back to login after successful login

**Solutions:**
```bash
# 1. Check JWT_SECRET is same in both services
# 2. Clear browser cache and cookies
# 3. Check if user is created:
#    Terminal → npx prisma user findMany
```

---

## ✅ **Post-Deploy Checklist**

- [ ] Backend service shows green ✅
- [ ] Frontend service shows green ✅
- [ ] Database connected (no errors) ✅
- [ ] Environment variables set correctly ✅
- [ ] Database migration completed ✅
- [ ] Admin user created ✅
- [ ] Can access frontend URL ✅
- [ ] Can access admin login ✅
- [ ] Can login to admin ✅
- [ ] Dashboard loads without errors ✅
- [ ] API responds to curl requests ✅

---

## 🌐 **Access URLs (After Deployment)**

After everything is green, you'll have:

**Backend API:** `https://shinigami-backend-xxxxx.railway.app`
**Frontend + Admin:** `https://shinigami-frontend-xxxxx.railway.app`
**Admin Login:** `https://shinigami-frontend-xxxxx.railway.app/admin/login`
**Database:** Railway dashboard (auto-managed)

---

## 📞 **Railway Support**

If stuck:
- **Railway Docs:** https://docs.railway.app
- **Railway Discord:** https://discord.gg/railway
- **Railway Status:** https://status.railway.app

---

**Start dari Step 1! Follow the order! 🚀**
