import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRoutes from '../routes/product.router.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use('/api/v1/products', productRoutes);

export default app;
