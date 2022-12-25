const path = require ('path');
const multer= require ('multer');
// const Category = require ('../src/models/Category');
const db = require ('../src/database/models');

// ***** versión sin BD ********************
// const storage = multer.diskStorage ( {
//     destination: (req, file, cb) => {
//         let categoryName = Category.findById(req.body.category).name;
//         let folder = 'public/images/products/' + categoryName;
//         cb (null, folder);
//     },
//     filename: (req, file, cb) => {
//         let categoryName = Category.findById(req.body.category).name;
//         let fileName =  categoryName + '-' + Date.now() + path.extname(file.originalname);
//         cb (null, fileName);
//     }
// } );
// ***********************************
let categoryName;

const storage = multer.diskStorage ({
    destination: (req, file, cb) => {
        db.Product_Categories.findByPk (req.body.category_id)
            .then (category => {
                // remove accents and convert to lowercase
                categoryName = (category.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "")).toLowerCase();
                let folder = 'public/images/products/' + categoryName;
                cb (null, folder);
            })
            .catch ( (error) => {
                console.log ( error )
            })
        },
    filename: (req, file, cb) => {
        let fileName =  categoryName + '-' + Date.now() + path.extname(file.originalname);
        cb (null, fileName);
        }
});

const fileFilter = (req, file, cb) => {
    const acceptedFormats = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

    if (acceptedFormats.includes(file.mimetype)) {
        cb(null,true)
    } else {        
        req.imgError = 'Los formatos de imagen aceptados son .jpg, .jpeg, .png, .gif';
        cb(null,false)
    }
};


let upload = multer ({storage, fileFilter});

module.exports=upload;