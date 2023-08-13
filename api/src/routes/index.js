const { Router } = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');
const cors = require("cors");

const router = Router();


const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

router.post('/user/purchase/:email/:productId',  middlewares.createUserValidation, controllers.createUser);
router.put('/product/update-product/:productId', middlewares.updateProductValidation, controllers.updateProduct);


router.get('/user/:email', middlewares.getUserValidation, controllers.getUser);
router.post('/product', middlewares.productValidation, controllers.createProducts);
router.get('/product', controllers.getProducts);



module.exports = router;