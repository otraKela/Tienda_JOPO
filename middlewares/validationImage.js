const multer = require('multer');
const path= require('path');


const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, path.join(__dirname, '../public/images/users'));
    },

    filename:(req,file,cb)=>{
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => { 
    const accepted = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

if(accepted.includes(file.mimetype)) { 
    cb(null,true)
 } else { 
    cb(null,false) 
} }
   
let upload= multer({storage:storage, fileFilter:fileFilter});



module.exports= upload;