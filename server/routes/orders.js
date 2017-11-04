const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
var Orders = mongoose.model('Orders');

// Get all orders
router.get('/orders', (req, res) => {
  
});

module.exports = router;