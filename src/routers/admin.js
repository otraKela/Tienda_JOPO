const express = require ('express');
const path = require ('path');
const validationCreateProduct= require('../../middlewares/validationCreateProduct');
const upload= require('../../middlewares/productImageValidationMiddleware');
const adminValidationMiddleware = require ( '../../middlewares/adminValidationMiddleware' );



const adminController = require (path.join (__dirname, '../controllers/adminController'));

const router = express.Router();

router.use ( adminValidationMiddleware );

router.get ('/', adminController.productsList);

router.get ('/createProduct', adminController.createProduct);
router.post ('/createProduct', upload.single('img'), validationCreateProduct, adminController.storeProduct);

router.get ('/findUser', adminController.findUser);
router.post ('/createAdmin', adminController.createAdmin);
router.put ('/saveAdmin/:id', adminController.saveAdmin);

router.get ('/productDetail/:id', adminController.productDetail);

router.get('/edit/:id', adminController.edit);
router.put('/:id', upload.single('img'), adminController.update);

router.delete('/delete/:id', adminController.destroy);

router.get('/productsList', adminController.productsList)
router.post ('/productsList/filtro', adminController.filtroPorCategoria);

module.exports = router;