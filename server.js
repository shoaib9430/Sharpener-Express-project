const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended : false}));

app.use('/add-product', (req, res, next) => {
    res.send(`<form method="POST" action="/add-product">

   <input type="text" name="productName" placeholder="Product Name">

   <input type="text" name="productSize" placeholder="Product Size">

   <button type="submit">Add Product</button>

  </form>`)
  res.redirect('/');
})

app.post('/', (req, res, next) => {
    res.send(`<h1>Hello to Express</h1>`);
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})