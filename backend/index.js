import express from 'express';
import cors from 'cors';
import productRoutes from "./routes/product.router.js";
import dotenv from "dotenv"

dotenv.config()

const app = express();
import cors from 'cors';
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
}));
app.use(express.json());

app.use('/api/v1/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
