import express from 'express';
import abiturientRoutes from './routes/abiturient.routes.js';

const app = express();
const port = process.env['PORT'] || 3000;

// Middleware для парсинга JSON
app.use(express.json());

// Маршруты API
app.use('/api/abiturients', abiturientRoutes);

// Обработка ошибок
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 