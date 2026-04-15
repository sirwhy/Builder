# Shinigami Reader - Full Stack

Modern manhwa/manga reading platform with admin panel.

## Tech Stack

- **Frontend:** React.js + React Router + Tailwind CSS
- **Backend:** Express.js + Node.js
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** JWT + bcrypt

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL
- npm or yarn

### Installation

```bash
# Install root dependencies
npm install

# Install client and server dependencies
npm run install-all
```

### Environment Setup

Create `.env` files:

**Server (`server/.env`):**
```env
DATABASE_URL="postgresql://user:password@localhost:5432/shinigami?schema=public"
JWT_SECRET="your-secret-key-change-in-production"
PORT=5000
NODE_ENV=development
```

**Client (`client/.env`):**
```env
REACT_APP_API_URL=http://localhost:5000/api
NODE_ENV=development
```

### Database Setup

```bash
# Push Prisma schema to database
npm run db:push

# Or use Prisma Studio
npm run db:studio
```

### Development

```bash
# Start both server and client
npm run dev

# Or start separately
npm run server  # Backend (Port 5000)
npm run client  # Frontend (Port 3000)
```

### Production Build

```bash
# Build client
npm run build:client

# Build server
npm run build:server

# Start server only (client served statically)
cd server && npm start
```

## Project Structure

```
shinigami-reader/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api.js         # API client
│   │   ├── App.js         # Main app component
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                 # Express backend
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── routes/            # API routes
│   ├── lib/               # Libraries & utilities
│   ├── src/
│   │   └── index.js       # Server entry
│   └── package.json
├── package.json           # Root package.json
└── README.md
```

## API Endpoints

### Public Routes

- `GET /api/series` - Get all series (with pagination & filters)
- `GET /api/series/:id` - Get series by ID
- `GET /api/series/slug/:slug` - Get series by slug
- `GET /api/chapters/series/:seriesId` - Get chapters by series
- `GET /api/chapters/:id` - Get chapter with pages

### Admin Routes (Protected)

- `POST /api/admin/login` - Admin login
- `POST /api/admin/register` - Register admin (first time only)
- `GET /api/admin/settings` - Get site settings
- `PUT /api/admin/settings` - Update site settings

### Series Management (Protected)

- `POST /api/series` - Create series
- `PUT /api/series/:id` - Update series
- `DELETE /api/series/:id` - Delete series

## Environment Variables

### Server

- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - JWT signing key
- `PORT` - Server port (default: 5000)

### Client

- `REACT_APP_API_URL` - Backend API URL

## Deployment

### 🚀 Quick Deploy to Railway (Recommended)

**Railway.app** - Free tier, easy deployment, built-in PostgreSQL

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```

2. **Deploy Backend:**
   - Go to https://railway.app
   - New Project → Deploy from GitHub repo
   - Select: `sirwhy/Builder`
   - Root Directory: `server`
   - Environment Variables:
     ```
     DATABASE_URL=your-postgres-connection-string
     JWT_SECRET=your-secret-key
     PORT=5000
     NODE_ENV=production
     ```
   - Railway auto-deploys! ✅

3. **Deploy Frontend:**
   - Add Service → Git
   - Root Directory: `client`
   - Railway auto-configures build commands
   - Set `REACT_APP_API_URL` environment variable

4. **Run Database Migration:**
   ```bash
   # In Railway terminal
   cd server && npx prisma db push
   ```

5. **Create Admin User:**
   ```bash
   curl -X POST https://your-backend.railway.app/api/admin/register \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@example.com","password":"admin123"}'
   ```

**See:** `RAILWAY_DEPLOYMENT.md` for detailed guide

---

### VPS Deployment

1. Build both client and server
2. Serve static files from Express
3. Use PM2 or similar for process management
4. Configure Nginx as reverse proxy

### Docker Deployment

Coming soon with Docker Compose setup.

## Admin Credentials

Default admin account should be created via:

```bash
# Register admin endpoint (call once)
curl -X POST http://localhost:5000/api/admin/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"admin123"}'
```

## License

MIT
