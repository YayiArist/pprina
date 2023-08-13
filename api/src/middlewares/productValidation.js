const {ClientError} = require('../utils/errors')

module.exports = (req, res, next) => {
  console.log('entre')
    const { name, normalPrice,  discount, specialPrice, image  } = req.body;

    console.log(req.body)
  
    if (name && normalPrice && image) {
      req.productData = {
        name,
        normalPrice,
        discount,
        specialPrice,
        image
      };
  
      return next();
    } else {
      throw new ClientError('Los campos name y normalPrice son requeridos', 400);
    }
  };