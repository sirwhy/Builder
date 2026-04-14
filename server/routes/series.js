import express from 'express';
import prisma from '../lib/prisma.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// GET all series
router.get('/', async (req, res) => {
  try {
    const { search, status, genre, limit = 12, page = 1 } = req.query;
    
    const where = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } },
      ];
    }
    
    if (status) {
      where.status = status;
    }
    
    if (genre) {
      where.genres = { has: genre };
    }
    
    const [series, total] = await Promise.all([
      prisma.series.findMany({
        where,
        skip: (page - 1) * parseInt(limit),
        take: parseInt(limit),
        orderBy: { createdAt: 'desc' },
      }),
      prisma.series.count({ where }),
    ]);
    
    res.json({ series, total: parseInt(total), page: parseInt(page), limit: parseInt(limit) });
  } catch (error) {
    console.error('Error fetching series:', error);
    res.status(500).json({ error: 'Failed to fetch series' });
  }
});

// GET single series
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const series = await prisma.series.findUnique({
      where: { id: parseInt(id) },
      include: { chapters: { orderBy: { number: 'asc' } } },
    });
    
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }
    
    res.json(series);
  } catch (error) {
    console.error('Error fetching series:', error);
    res.status(500).json({ error: 'Failed to fetch series' });
  }
});

// GET series by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const series = await prisma.series.findUnique({
      where: { slug },
      include: { chapters: { orderBy: { number: 'asc' } } },
    });
    
    if (!series) {
      return res.status(404).json({ error: 'Series not found' });
    }
    
    res.json(series);
  } catch (error) {
    console.error('Error fetching series:', error);
    res.status(500).json({ error: 'Failed to fetch series' });
  }
});

// POST create series (Admin only - protected route)
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('slug').notEmpty().withMessage('Slug is required'),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const { title, slug, description, author, artist, status, genres, cover } = req.body;
    
    const series = await prisma.series.create({
      data: {
        title,
        slug,
        description: description || '',
        author: author || '',
        artist: artist || '',
        status: status || 'Ongoing',
        genres: genres ? JSON.parse(genres) : [],
        cover: cover || '',
      },
    });
    
    res.status(201).json(series);
  } catch (error) {
    console.error('Error creating series:', error);
    res.status(500).json({ error: 'Failed to create series' });
  }
});

// PUT update series
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, description, author, artist, status, genres, cover } = req.body;
    
    const series = await prisma.series.update({
      where: { id: parseInt(id) },
      data: {
        title,
        slug,
        description,
        author,
        artist,
        status,
        genres: genres ? JSON.parse(genres) : undefined,
        cover,
      },
    });
    
    res.json(series);
  } catch (error) {
    console.error('Error updating series:', error);
    res.status(500).json({ error: 'Failed to update series' });
  }
});

// DELETE series
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.series.delete({
      where: { id: parseInt(id) },
    });
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error deleting series:', error);
    res.status(500).json({ error: 'Failed to delete series' });
  }
});

export default router;
