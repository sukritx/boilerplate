// server/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import userRouter from './routes/userRouter';
import { errorHandler } from './middleware/errorHandler';

const app: Application = express();

app.use(cors()); // Allow frontend requests
app.use(express.json()); // Parse JSON bodies

app.use('/api', userRouter); // Mount API routes

// Error handling middleware
app.use(errorHandler);

export default app;