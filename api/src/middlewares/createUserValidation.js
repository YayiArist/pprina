const { ClientError } = require('../utils/errors');

module.exports = (req, res, next) => {
    const { email, productId } = req.params;
    console.log("here", req.params)

    if (email && productId) {
        req.userData = {
            email,
            productId
        };

        return next();
    } else {
        throw new ClientError('email y productId son requeridos', 400);
    }
};

