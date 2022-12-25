const {body}= require('express-validator');

const validation= [
    body('first_name').notEmpty().withMessage('Debes completar con tu nombre').bail()
    .isLength({min:3}).withMessage('No se admiten nombres con menos de 3 caracteres'),
    body('last_name').notEmpty().withMessage('Debes completar con tu apellido').bail()
    .isLength({min:3}).withMessage('No se admiten apellidos con menos de 3 caracteres'),
    body('email').notEmpty().withMessage('Debes completar con tu email').bail()
    .isEmail().withMessage('Debes colocar un formato válido de email'),
    body('phone').notEmpty().withMessage('Debes colocar un teléfono'),
    body('password').notEmpty().withMessage('Debes colocar una contraseña').bail()
    .isLength({min:8}).withMessage('La contraseña debe tener como mínimo 8 caracteres')
]

module.exports=validation;