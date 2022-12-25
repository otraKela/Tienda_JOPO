const { body }= require('express-validator');

const validation = [
    
    body('email').notEmpty().withMessage('Debes colocar una dirección de correo').bail().isEmail().withMessage('El email no es válido'),
    body('password').notEmpty().withMessage('Debes colocar tu contraseña')
]

module.exports = validation;






