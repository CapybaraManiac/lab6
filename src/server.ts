import express from 'express';
import { abiturientRouter } from './resources/abiturients/abiturient.router';
import { examRouter } from './resources/exams/exam.router';
import { teacherRouter } from './resources/teachers/teacher.router';

const app = express();
const port = process.env['PORT'] || 3000;

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