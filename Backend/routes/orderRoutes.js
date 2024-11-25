// routes/orderRoutes.js

const express = require('express');
const router = express.Router();
const {
  createPaymentIntent,
  addOrderItems,
  getMyOrders,
  getAllOrders,
} = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');

// Create Payment Intent
router.post('/create-payment-intent', createPaymentIntent);

// Create a new order
router.post('/', protect, addOrderItems);

// Get logged-in user's orders
router.get('/myorders', protect, getMyOrders);

// Get all orders (Admin)
router.get('/', protect, getAllOrders);

module.exports = router;