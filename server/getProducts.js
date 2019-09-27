const products = require('../products.json')

const getProducts = (req, res) => {
    console.log(req.query.price)

    if(req.query.price){
        console.log('hit price is right')
        const filteredProducts = products.filter(value => {
            console.log(value.price)
            console.log(req.query.price)
            return value.price >= +req.query.price
        })
        return res.status(200).send(filteredProducts)

    } else {
       res.status(200).send(products); 
    }
}


module.exports = getProducts