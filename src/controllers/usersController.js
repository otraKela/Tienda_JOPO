const bcryptjs = require("bcryptjs");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require('../database/models')

const Category = require("../models/Category");
const categories = Category.findAll();


const usersController = {
    login: function (req, res) {
        if (req.query.msg) {
            let msg = req.query.msg;
            return res.render('./users/login', { categories, msg })
        } else {
            return res.render('./users/login', { categories })
        }
    },

    register: function (req, res) {
        res.render("./users/register", { categories });
    },

    store: function (req, res) {
        const error = "Debes subir una imagen, (jpg, jpeg, png, gif)";
        const check = "check";
        const wrong = "wrong";
        const userExist = "Ya existe un usuario registrado con este email";
        const errors = validationResult(req);
        let file = req.file;

        if (errors.isEmpty()) {

            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function (data) {
                if (data == null) {

                    if (file != undefined) {
                        const passwordCrypt = bcrypt.hashSync(req.body.password, 10);
                        db.Users.create({
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            email: req.body.email,
                            password: passwordCrypt,
                            phone: req.body.phone,
                            img: req.file.filename,
                            category_id: 2
                        }).then(function () {
                            res.redirect("/users/login");
                        })
                    } else {
                        res.render("./users/register", {
                            categories,
                            error,
                            old: req.body,
                            check,
                        });
                    }
                } else {
                    res.render("./users/register", {
                        categories,
                        userExist,
                        old: req.body,
                        wrong,
                        check,
                    });
                }
            })
        } else {
            db.Users.findOne({
                where: {
                    email: req.body.email
                }
            }).then(function (user) {
                if (user != null) {
                    res.render("./users/register", {
                        categories,
                        errors: errors.mapped(),
                        error,
                        old: req.body,
                        wrong,
                        check,
                        userExist
                    });
                } else {
                    res.render("./users/register", {
                        categories,
                        errors: errors.mapped(),
                        error,
                        old: req.body,
                        check,
                        wrong,
                    })
                }
            })
        }
    },


    profile: (req, res) => {

        db.Users.findByPk(req.params.id)
            .then(function (user) {

                delete user.password;

                user.img = "/images/users/" + user.img;


                if (req.query.msg) {
                    let msg = req.query.msg;
                    res.render('./users/profile', { user, categories, msg })
                } else {
                    res.render('./users/profile', { user, categories })
                }
            })
    },


    editProfile: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(function (user) {
                res.render('./users/editProfile', { user, categories })
            })
    },

    updateProfile: function (req, res) {

        db.Users.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(function () {
                db.Users.findByPk(req.params.id)
                    .then(function (data) {
                        req.session.userLogged = data;
                        res.redirect('/')
                    })
            })
    },

    updateProfileImg: function (req, res) {
        let error = 'Debes subir una imagen, (jpg, jpeg, png, gif)';

        if (req.file == undefined) {
            db.Users.findByPk(req.params.id)
                .then(function (user) {
                    user.img = "/images/users/" + user.img;
                    res.render('./users/profile', { error, categories, user })
                })
        } else {
            db.Users.update({
                img: req.file.filename
            }, {
                where: {
                    id: req.params.id
                }
            }).then(function () {
                db.Users.findByPk(req.params.id)
                    .then(function (user) {
                        req.session.userLogged = user;
                        res.redirect('/')
                    })
            })
        }
    },


    loginProcess: (req, res) => {

        let error = validationResult(req);

        if (!error.isEmpty()) {
            return res.render("./users/login", {
                userToLogin: {},
                categories,
                errors: error.mapped(),
                old: req.body

            })
        }

        db.Users.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (userToLogin) {

            if (userToLogin != null) {

                let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (passwordOk) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user != undefined) {
                        res.cookie('remember_user', req.body.email, { maxAge: 600000 });
                    }


                    res.redirect("/")
                } else {
                    res.render("./users/login", {
                        userToLogin,
                        categories,
                        errors: {
                            password: {
                                msg: "La contraseña es incorrecta"
                            },

                            old: req.body
                        }
                    })
                }
            } else {
                res.render("./users/login", {
                    userToLogin,
                    categories,
                    errors: {
                        email: {
                            msg: "No se encuentra este email en nuestra base de datos"
                        }
                    }
                })
            }
        })
    },

    updateProfilePassword: function (req, res) {
        db.Users.findByPk(req.params.id)
            .then(function (user) {
                res.render('./users/editPassword', { user, categories })
            })
    },

    updateProfilePasswordProcess: function (req, res) {
        const passwordNew = req.body.password;
        const errorCurrentPassword = 'Contraseña incorrecta';
        //const currentPassword= bcrypt.hashSync(req.body.current-password, 10);

        db.Users.findByPk(req.params.id)
            .then(user => {
                const existPassword = bcryptjs.compareSync(req.body.currentPassword, user.password)
                if (existPassword) {
                    if (passwordNew.length >= 8) {
                        const passwordCrypt = bcrypt.hashSync(passwordNew, 10);
                        db.Users.update({
                            password: passwordCrypt
                        }, {
                            where: {
                                id: req.params.id
                            }
                        }).then(function () {
                            res.redirect('/')
                        })
                    } else {
                        db.Users.findByPk(req.params.id)
                            .then(function (user) {
                                res.render('./users/editPassword', {
                                    user, categories, errors: {
                                        password: {
                                            msg: "La contraseña debe contener al menos 8 caracteres"
                                        }
                                    }
                                })
                            })
                    }
                } else {
                    res.render('./users/editPassword', { errorCurrentPassword, categories, user })
                }

            }
            )
    },


    logout: (req, res) => {
        req.session.userLogged=null;
        res.clearCookie('remember_user');
       
        return res.redirect('/');
    }
};

/* store: function (req, res) {
      const error = "Tienes que subir una imagen";
      const check = "check";
      const errors = validationResult(req);
      let file = req.file;

      const userFind = users.filter((valor) => {
          return valor.email == req.body.email;
      });

      if (userFind.length == 0) {
          if (errors.isEmpty()) {
              if (file != undefined) {
                  let userNew = req.body;
                  const passwordCrypt = bcrypt.hashSync(req.body.password, 10);
                  userNew.password = passwordCrypt;
                  userNew.image = req.file.filename;
                  userNew.id = users[users.length - 1].id + 1;
                  users.push(userNew);

                  Users.writeFile(users);

                  res.redirect("/users/login");
              } else {
                  res.render("./users/register", {
                      categories,
                      error,
                      old: req.body,
                      check,
                  });
              }
          } else {
              res.render("./users/register", {
                  categories,
                  errors: errors.mapped(),
                  error,
                  old: req.body,
                  check,
                  file: req.file,
              });
          }
      } else {
          const userExist = "Ya existe un usuario registrado con este email";
          res.render("./users/register", {
              categories,
              userExist,
              old: req.body,
              errors: errors.mapped(),
              check,
          });
      }
  },*/

/*profile: (req, res) => {

let user = Users.findByPk(req.params.id);

delete user.password;

user.image = "/images/users/" + user.image;

if (req.query.msg) {
    let msg = req.query.msg;
    res.render('./users/profile', { user, categories, msg })
} else {
    res.render('./users/profile', { user, categories })
}
},*/

/*editProfile: function(req,res){
    let user = Users.findByPk(req.params.id);

    res.render('./users/editProfile', {user, categories})
},*/

/*updateProfile: function(req,res){
users.forEach(valor => {
        if(valor.id== req.params.id){

            valor.first_name= req.query.first_name;
            valor.last_name= req.query.last_name;
            valor.email= req.query.email;
            valor.phone= req.query.phone;

            if(req.query.password){
                valor.password= req.query.password
            } else{
                valor.password= valor.password
            }
            
            if(req.query.image){
                valor.image= req.query.image
            } else{
                valor.image= valor.image
            }
        }
        });

            Users.writeFile(users);
res.redirect('/')
}, */

/*loginProcess: (req, res)=> {
   
   let error = validationResult(req);

   if (!error.isEmpty()) {
       return res.render("./users/login", {
           userToLogin: {},
           categories,
           errors: error.mapped(),
           old: req.body
   
       })
   }

   let userToLogin = Users.findByField("email", req.body.email)
   if (userToLogin) {

       let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
       if (passwordOk) {
           delete userToLogin.password;
           req.session.userLogged = userToLogin;
           res.redirect("/")
       } else {
           res.render("./users/login", {
               userToLogin,
               categories,
               errors: {
                   password: {
                       msg: "La contraseña es incorrecta"
                   },
                   old: req.body
               }
           })
       }
   } else {
       res.render("./users/login", {
           userToLogin,
           categories,
           errors: {
               email: {
                   msg: "No se encuentra este email en nuestra base de datos"
               }
           }
       })
   }
},*/






module.exports = usersController;
