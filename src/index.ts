import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'Mailing-App');
  next();
});

import userRoutes from './router/userRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
app.use("/api/user", userRoutes);

app.use(errorHandler);

console.log(`====== LISTENING TO SERVER ======`);
console.log(`http://127.0.0.1:3000`);

app.listen(3000, "127.0.0.1");