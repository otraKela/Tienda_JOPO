// const Category = require('../models/Category');
// const Product = require('../models/Product');

const db = require ('../database/models');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const indexController = {

    vistaIndex: (req, res) => {

        getProductCategories = db.Product_Categories.findAll();
        getProducts = db.Products.findAll();

        Promise.all ([ getProductCategories, getProducts])
            .then ( ( [categories, products] ) => {
                res.render('index', { categories, products, toThousand});
            })
            .catch ( (error) => {
                console.log ( error )
            })
    },
}

        // let categories = db.Category.findAll();
        // let products = db.Product.findAll()
        //
        // res.render('index', { categories, products, toThousand});

module.exports = indexController;

