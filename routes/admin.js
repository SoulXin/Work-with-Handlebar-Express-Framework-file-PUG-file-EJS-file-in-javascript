const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

const product = [];

router.get('/add-product',(req,res,next) => {
    res.render('add-product',{pageTitle : 'Add Product',path : '/admin/add-product'}); // => Semua object yang disini bersifat GLOBAL dapat diakses oleh semua file 
})

router.post('/add-product',(req,res,next) => {
    product.push({title : req.body.title});
    res.redirect('/');
})

exports.routes = router;
exports.product = product;