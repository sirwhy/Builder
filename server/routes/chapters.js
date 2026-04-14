import express from 'express';
import prisma from '../lib/prisma.js';

const router = express.Router();

// GET chapters by series
router.get('/series/:seriesId', async (req, res) => {
  try {
    const { seriesId } = req.params;
    
    const chapters = await prisma.chapter.findMany({
      where: { seriesId: parseInt(seriesId) },
      orderBy: { number: 'asc' },
    });
    
    res.json(chapters);
  } catch (error) {
    console.error('Error fetching chapters:', error);
    res.status(500).json({ error: 'Failed to fetch chapters' });
  }
});

// GET chapter with pages
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const chapter = await prisma.chapter.findUnique({
      where: { id: parseInt(id) },
      include: {
        pages: {
          orderBy: { order: 'asc' },
        },
      },
    });
    
    if (!chapter) {
      return res.status(404).json({ error: 'Chapter not found' });
    }
    
    res.json(chapter);
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).json({ error: 'Failed to fetch chapter' });
  }
});

// POST create chapter (Admin)
router.post('/', async (req, res) => {
  try {
    const { seriesId, title, chapterNum, number } = req.body;
    
    const chapter = await prisma.chapter.create({
      data: {
        seriesId: parseInt(seriesId),
        title,
        chapterNum: parseFloat(chapterNum),
        number: parseInt(number),
      },
    });
    
    res.status(201).json(chapter);
  } catch (error) {
    console.error('Error creating chapter:', error);
    res.status(500).json({ error: 'Failed to create chapter' });
  }
});

export default router;
