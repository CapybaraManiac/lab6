import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json({ message: 'Get all teachers' });
});

export { router as teacherRouter }; 