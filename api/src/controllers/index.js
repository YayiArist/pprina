const {catchedAsync} = require('../utils')
const getProducts = require('./product/getProducts')


module.exports= {
    createUser: catchedAsync( require('./user/createUser')), 
    getUser: catchedAsync( require('./user/getUser')), 
    createProducts: catchedAsync( require('./product/createProduct')),
    updateUser: catchedAsync( require('./user/updateUser')),
    updateProduct: catchedAsync( require('./product/updateProduct')),
    getProducts: catchedAsync( require('./product/getProducts'))
}