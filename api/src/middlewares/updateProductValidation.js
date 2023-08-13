const {ClientError} = require('../utils/errors')

module.exports= (req, res, next) => {
    const { productId } = req.params;
    
    if (productId) {
        req.productId = productId;
        
        return next();
    } else {
        throw new ClientError('Id required', 400);
    }
};


