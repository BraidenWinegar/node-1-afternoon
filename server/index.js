const express = require('express');
const getProduct = require('./getProduct');
const getProducts = require('./getProducts');

const app = express()
app.use(express.json());
///////////set up above////////////



console.log(getProducts)
console.log(getProduct)


app.get('/api/products', getProducts);
app.get('/api/product/:id', getProduct);





// app.listen(4321, () => console.log('Server running on 4321'))
const port = 4321;
app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});