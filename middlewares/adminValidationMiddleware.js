const adminValidationMiddleware = function(req, res, next) {
    const isAdmin = 1;

    if ( !req.session && !req.session.userLogged &&
            ( req.session.userLogged && req.session.userLogged.category_id != isAdmin ))
    {
        let msg = 'Para acceder a estas funcionalidades debe ingresar como administrador';
        res.clearCookie('remember_user');
        req.session.destroy();
        return res.redirect ('/users/login/?msg=' + msg);
    }

    next();
}

module.exports = adminValidationMiddleware;