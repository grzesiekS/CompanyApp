const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
    try {
        res.json(await Product.find());
    } catch(err) {
        res.status(500).json({ message: err });
    } 
}

exports.getRandom = async (req, res) => {
    try {
        const count = await Product.countDocuments();
        const rand = Math.floor(Math.random() * count);
        const pro = await Product.findOne().skip(rand);
        if(!pro) res.status(404).json({ message: 'Not found' });
        else res.json(pro);
    } catch(err) {
        res.status(500).json({ message: err });
    }    
}

exports.getID = async (req, res) => {
    try {
        const pro = await Product.findById(req.params.id);
        if(!pro) res.status(404).json({ message: 'Not found' });
        else res.json(pro);
    } catch(err) {
        res.status(500).json({ message: err });
    }   
}

exports.postNew = async (req, res) => {
    try {
        const { name, client } = req.body;
    
        const newProduct = new Product(
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
}

exports.updateOne = async (req, res) => {
    try {
        const { name, client } = req.body;
        const pro = await Product.findById(req.params.id);
    
        if(pro) {
          pro.name = name;
          pro.client = client;
          await pro.save();
          res.json({ message: 'OK' });
        }
    } catch(err) {
        res.status(500).json({ message: err });
    }    
}

exports.deleteOne = async (req, res) => {
    try {
        const pro = await Product.findById(req.params.id);
        
        if(pro) {
          await pro.remove();
          res.json({ message: 'OK' });
        } 
        else res.status(404).json({ message: 'Not found...' });
    
    } catch(err) {
        res.status(500).json({ message: err });
    }    
}