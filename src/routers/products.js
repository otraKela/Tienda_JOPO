const express = require ('express');

const productsController = require ('../controllers/productsController');

const router = express.Router();
const userLoggedMiddleware = require ( '../../middlewares/userNotLoggedMiddleware' );



router.get ('/shoppingCart', userLoggedMiddleware, productsController.shoppingCart);
router.get ('/purchase/:cartString', productsController.purchase);
router.get ('/purchaseFinalized', productsController.purchaseFinalized);
// router.post ('/shoppingCart/add/:id', userLoggedMiddleware, productsController.addToShoppingCart);
// router.delete ('/shoppingCart/delete/:id', userLoggedMiddleware, productsController.deleteFromShoppingCart);

router.get ('/productDetail/:id', productsController.productDetail);

router.post ('/productsList/filtro', productsController.filtroPorCategoria);

router.get ('/productsList', productsController.productsList );

router.post ('/search', productsController.search );



module.exports = router;