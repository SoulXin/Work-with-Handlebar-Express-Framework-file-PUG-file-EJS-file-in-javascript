const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const app = express();

// app.engine(
//     'hbs',
//     expressHbs({
//         layoutsDir:'views/layouts/', // => folder yang dituju
//         defaultLayout:'main-layout', // => nama file yang dimaksut
//         extname : 'hbs' // => extens yang ada pada setiap file handlebar
//     })); // => object pada expressHbs adalah posisi file direktori yang ingin dijadikan template
// app.set('view engine','hbs') // => Menggunakan engine handlebar
// app.set('view engine', 'pug'); // => Menggunakan engine pug
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res,next) => {
    res.status(404).render('404',{pageTitle : 'Page Not Found'}) // => Tampilan halaman tidak ditemukan
})

app.listen(3000);