import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './resources/users/user.router';

const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);

export default app; 