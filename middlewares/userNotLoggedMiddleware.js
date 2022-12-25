const userNotLoggedMiddleware = function(req, res, next) {
    if (! req.session && !req.session.userLogged) {
        let msg = 'Por favor ingresá al sitio para continuar';
        return res.redirect ('/users/login/?msg=' + msg);
    }

    next();
}

module.exports = userNotLoggedMiddleware;