/* Guarda la cantidad de productos que hay en el carrito en una variable local para ser utilizada en la vista */
function productCountMiddleware (req, res, next) {
        res.locals.productCount = req.session.shoppingCart? req.session.shoppingCart.length:0;
        next();

};

module.exports = productCountMiddleware;