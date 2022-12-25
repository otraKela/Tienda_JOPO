const { body }= require('express-validator');

const validation = [
    
    body('name').notEmpty().withMessage('Debes completar nombre del producto').bail()
    .isLength({min:5}).withMessage('Debe tener mínimo 5 caracteres'),
    body('description').notEmpty().withMessage('Debes agregar una descripción').bail()
    .isLength({min:20,max:300}).withMessage('Debe tener entre 20 y 300 caracteres'),
    body('category_id').notEmpty().withMessage('Debes seleccionar una categoría').bail(),
    body('colors').notEmpty().withMessage('Debes seleccionar al menos un color').bail(),
    body('price').notEmpty().withMessage('Debes colocar el precio').bail()
  
]

module.exports = validation;