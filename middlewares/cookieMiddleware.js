const db= require('../src/database/models')

function cookieMiddleware(req, res, next) {
  res.locals.isLogged=false;

    let emailInCookie=[];

       if(req.cookies.remember_user!=undefined){
            emailInCookie = req.cookies.remember_user; 
       }else{
        emailInCookie = 'noexiste@hotmail.com'
       }

        console.log(emailInCookie)
         db.Users.findOne({
            where:{
                email: emailInCookie
            }
        })
        .then(function(userFromCookie){
              
              if (userFromCookie!=null ) {
                res.locals.isLogged = userFromCookie;
               req.session.userLogged= userFromCookie;
              } else if (req.session && req.session.userLogged!=null) {
                
                res.locals.isLogged = true;
                res.locals.isLogged = req.session.userLogged;
            } 
        })

                
    next();
}

module.exports = cookieMiddleware;



// const User = require('../src/models/Users')

// function cookieMiddleware(req, res, next) {
//     res.locals.isLogged = false;


//     let emailInCookie = req.cookies.userEmail;
//     let userFromCookie = User.findByField('email', emailInCookie)

//     if (userFromCookie) {
//         req.session.userLogged = userFromCookie;
//     }

//     if (req.session && req.session.userLogged) {
//         res.locals.isLogged = true;
//         res.locals.isLogged = req.session.userLogged;
//     }

    
//     next();
// }

// module.exports = cookieMiddleware;