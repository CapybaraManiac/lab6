import * as dotenv from 'dotenv';

dotenv.config();

const NODE_ENV: string = process.env['NODE_ENV'] || 'development';
const PORT: number = +(process.env['PORT'] || 4000);
const JWT_SECRET_KEY: string = process.env['JWT_SECRET_KEY'] || 'secret-key';
const MONGO_CONNECTION_STRING: string = process.env['MONGO_CONNECTION_STRING'] || 'your-mongo-db-connection-string';

export { NODE_ENV, PORT, JWT_SECRET_KEY, MONGO_CONNECTION_STRING }; 