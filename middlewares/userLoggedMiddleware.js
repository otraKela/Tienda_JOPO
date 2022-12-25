const userLoggedMiddleware = function(req, res, next) {
    if (req.session.userLogged) {
        let userId = req.session.userLogged.id;
        let msg = 'Ya ingresaste al sitio';
        return res.redirect ('/users/profile/'+ userId +'?msg=' + msg);
    }

    next();
}

module.exports = userLoggedMiddleware;