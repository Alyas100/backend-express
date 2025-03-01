import express from 'express';

const port = 3001;
const server = express();

// Middleware to parse JSON requests from frontend
server.use(express.json());

// Enable CORS if frontend is on different port
server.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Cart Data (Fake Database)
let cart = [
    { id: 1, name: 'Burger', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
];

// Get cart items
server.get('/api/cart', (req, res) => {
    res.status(200).json(cart);
});

// Add item to cart
server.post('/api/cart', (req, res) => {
    const newItem = req.body;
    cart.push(newItem);
    res.json({ message: "Item added to cart!", cart });
});

// Delete item from cart
server.delete('/api/cart/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    cart = cart.filter(item => item.id !== itemId);
    res.json({ message: "Item deleted from cart!", cart });
});

// Start the Express server
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Server running on http://localhost:${port}`);
});
import express from 'express';


const port = 3001;
const server = express();

    // Miiddleware to parse JSON requests from frontend
    server.use(express.json());

    // Enable CORS if frontend is on different port
    server.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    // Cart Data (Fake Database)
    let cart =[
        { id: 1, name: 'Burger',price: 5.99 },
        { id: 2, name: 'Pizza', price: 8.99 },
    ];

    // get cart items which it will take the cart array and convert into json before sent to front end
    server.get('/api/cart', (req, res) => {
        res.status(200).json(cart);
    });

    server.post('/api/cart', (req, res) => {
        const newItem = req.body;   // Example: { id: 3, name: "Fries", price: 3.49 }
        res.status(201).json(newItem);
        cart.push(newItem);
        res.json({message: "Item added tp carrt!", cart})
    });

    // Delete Item from Cart
    server.delete('/api/cart/:id', (req, res) => {
        const itemId = parseInt(req.params.id);
        cart = cart.filter(item => item.id!== itemId);
        res.json({message: "Item deleted from cart!", cart});
    });
    
    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Server running on http://localhost:${port}`);
    })

});

