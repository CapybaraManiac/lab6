import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Get all exams' });
});

export { router as examRouter }; 