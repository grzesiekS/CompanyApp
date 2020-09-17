// post.routes.js

const express = require('express');
const Prodcut = require('../models/product.model');
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    res.json(await Prodcut.find());
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/products/random', async (req, res) => {
  try {
    const count = await Prodcut.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const pro = await Prodcut.findOne().skip(rand);
    if(!pro) res.status(404).json({ message: 'Not found' });
    else res.json(pro);
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const pro = await Prodcut.findById(req.params.id);
    if(!pro) res.status(404).json({ message: 'Not found' });
    else res.json(pro);
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.post('/products', async (req, res) => {
  try {
    const { name, client } = req.body;

    const newProduct = new Prodcut(
      {
        name: name,
        client: client
      }
    );
    await newProduct.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.put('/products/:id', async (req, res) => {
  try {
    const { name, client } = req.body;
    const pro = await Prodcut.findById(req.params.id);

    if(pro) {
      pro.name = name;
      pro.client = client;
      await pro.save();
      res.json({ message: 'OK' });
    }
  } catch(err) {
    res.status(500).json({ message: err });
  }
});

router.delete('/products/:id', async (req, res) => {
  try {
    const pro = await Prodcut.findById(req.params.id);
    
    if(pro) {
      await pro.remove();
      res.json({ message: 'OK' });
    } 
    else res.status(404).json({ message: 'Not found...' });

  } catch(err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;
