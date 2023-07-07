import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import products from './data/products.js';
const port = 5000;

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

// all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// single product
app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(port, () => console.log(`Server running on port ${port}`));