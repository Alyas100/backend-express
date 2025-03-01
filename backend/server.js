import express from 'express';
import cors from 'cors';

const port = process.env.PORT || 3001; // Use the environment variable if available
const server = express(); // Renamed from "app" to "server"

// Fix CORS issue
server.use(cors({
    origin: '*',  // Allow all origins (for testing)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

// Middleware to parse JSON requests from frontend
server.use(express.json());

// Cart Data (Fake Database)
let cart = [
    { id: 1, name: 'Burger', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
];

// Get cart items
server.get('/api/cart', (req, res) => {
    res.status(200).json(cart);
});

// Add item to cart (POST)
server.post('/api/cart', (req, res) => {
    const newItem = req.body;
    cart.push(newItem);
    res.status(201).json({ message: "Item added to cart!", cart });
});

// Delete item from cart
server.delete('/api/cart/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== itemId);
    res.json({ message: "Item deleted from cart!", cart });
});

// Start the server and listen on 0.0.0.0 to allow external access
server.listen(port, "0.0.0.0", () => {
    console.log(`> Server running on port ${port}`);
});
