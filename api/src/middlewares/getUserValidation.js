const {ClientError} = require('../utils/errors')

module.exports= (req, res, next) => {
    const { email } = req.params;
   

    if (email) {
        req.email = email;
        return next();
    } else {
        throw new ClientError('El campo email es requerido en la consulta', 400);
    }
};