'use strict'

let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/', (req, res) => {
  res.render('index');
});

var products = [
    {image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', name: 'Aname', price: 4, color: 'Red'},
    {image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', name: 'Bname', price: 5, color: 'Red'},
    {image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', name: 'Cname', price: 1, color: 'Blue' },
    {image: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=150', name: 'Dname', price: 8, color: 'Blue'}
];


app.get('/products', (req, res) => {
  res.send({products});
});

app.get('/products/filter/:color', (req, res) => {
  let color = req.params.color;
  if (color === 'All') {
    res.send({products});
  } else {
    let filtered = products.filter((p) => p.color === color);
    res.send({products: filtered});
  }
});


const port = process.env.PORT || 1234;

app.listen(port);
console.log(`Express server listening on port ${port}`);
