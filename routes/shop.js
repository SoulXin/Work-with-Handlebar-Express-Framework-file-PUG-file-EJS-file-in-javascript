const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req,res,next) => {
    res.render('shop',
                {   props : adminData.product,
                    pageTitle : 'Shop',
                    path : "/",
                    hasProducts : adminData.product.length > 0,
                    activeShop : true,
                    productCSS : true,
                }); // => Semua object yang disini bersifat GLOBAL dapat diakses oleh semua file 
})

module.exports = router;