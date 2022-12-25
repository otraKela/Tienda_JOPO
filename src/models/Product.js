const fs = require ('fs');

const Product = {
    fileName: './src/data/productsDataBase.json',

    findAll: function () {
        return JSON.parse ( fs.readFileSync (this.fileName), 'utf-8');  
    },
    filterByCategory: function (category)  {
        let products = this.findAll();

        let productsByCategory =  products.filter (product => {
            return product.category == category;
        });
        
        return productsByCategory;
    },
    findById: function (id) {
        let products = this.findAll();

        let product = products.find(valor => {
            return valor.id == id;
        });
        return product;
    },
    findSpecial: function() {
        let products = this.findAll();

        let specialProducts = products.filter (product => {
            product.special == 1;
        })

        return specialProducts;
    },

    writeFile: function (products) {
        fs.writeFileSync (this.fileName, JSON.stringify (products, null, ' ' ) );
        return true;
    },

    addProduct: function (newProduct) {
        let products = this.findAll();
        products.push (newProduct);
        this.writeFile (products);
    }
}

module.exports = Product;