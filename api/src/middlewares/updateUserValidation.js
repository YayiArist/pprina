const {ClientError} = require('../utils/errors')

module.exports = (req, res, next) => {
    const { email, id } = req.params; 
   
    if (email && id) {
      req.email = email;
      req.id=id
      return next();
    } else {
      throw new ClientError('Missing data', 400);
    }
  };

