import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';
const port = 5000;

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// direct any requests with 1st param through ProductRoutes 
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));