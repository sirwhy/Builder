import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import seriesRoutes from '../routes/series.js';
import chapterRoutes from '../routes/chapters.js';
import adminRoutes from '../routes/admin.js';

dotenv.config();

console.log('🔧 Starting Shinigami Reader Server...');
console.log('📝 Environment:', process.env.NODE_ENV || 'development');
console.log('🔐 PORT:', process.env.PORT || 5000);
console.log('🗄️  DATABASE_URL present:', !!process.env.DATABASE_URL);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/series', seriesRoutes);
app.use('/api/chapters', chapterRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Shinigami Reader API is running' });
});

// Start server with error handling
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📊 API: http://localhost:${PORT}/api`);
  console.log(`✅ Server started successfully!`);
});

// Error handling
server.on('error', (error) => {
  console.error('❌ Server error:', error);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
