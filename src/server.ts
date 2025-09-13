import express from 'express';
import { abiturientRouter } from './resources/abiturients/abiturient.router.js';
import { examRouter } from './resources/exams/exam.router.js';
import { teacherRouter } from './resources/teachers/teacher.router.js';

const app = express();
const port = process.env['PORT'] || 3001;

app.use(express.json());

// Routes
app.use('/api/abiturients', abiturientRouter);
app.use('/api/exams', examRouter);
app.use('/api/teachers', teacherRouter);

// Error handling middleware
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 