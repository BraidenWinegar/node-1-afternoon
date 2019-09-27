const products = require('../products.json')

const getProduct = (req, res) => {

    // console.log(req)
    const {id} = req.params;
    console.log(id)
    let item = products.find(e => e.id === +id)
    if (!item) {
        return res.status(500).send("Item not in list");
    }

    res.status(200).send(item);
    console.log('selectedProduct')
}


module.exports = getProduct