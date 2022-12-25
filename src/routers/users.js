const express= require('express');
let router= express.Router();


let usersController= require('../controllers/usersController');
let validationImage= require('../../middlewares/validationImage');
let validationRegister= require('../../middlewares/validationRegister');
let validationLogin= require('../../middlewares/validationLogin.js');


const userLoggedMiddleware = require ( '../../middlewares/userLoggedMiddleware' );
const userNotLoggedMiddleware = require ( '../../middlewares/userNotLoggedMiddleware' );


router.get('/login', userLoggedMiddleware, usersController.login);

router.post('/login', validationLogin, usersController.loginProcess);

router.get('/registro', userLoggedMiddleware, usersController.register);

router.post('/new/register',validationImage.single('image'), validationRegister, usersController.store);

router.get('/profile/:id', userNotLoggedMiddleware, usersController.profile);

router.post('/editProfile/:id', usersController.editProfile);

 router.put('/update/profile/:id', usersController.updateProfile);

router.put('/profile/:id', validationImage.single('image'), usersController.updateProfileImg);

 router.put('/update/profile/password/:id',validationRegister, usersController.updateProfilePasswordProcess);

 router.get('/update/profile/password/:id', usersController.updateProfilePassword);

 router.get('/logout',usersController.logout);


module.exports=router;