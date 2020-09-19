// post.routes.js

const express = require('express');
const ProductController = require('../controllers/products.controller');
const router = express.Router();

router.get('/products', ProductController.getAll);

router.get('/products/random', ProductController.getRandom);

router.get('/products/:id', ProductController.getID);

router.post('/products', ProductController.postNew);

router.put('/products/:id', ProductController.updateOne);

router.delete('/products/:id', ProductController.deleteOne);

module.exports = router;
