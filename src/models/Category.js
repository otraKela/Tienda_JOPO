const fs = require ('fs');

const Category = {
    findAll: function () {
      return JSON.parse ( fs.readFileSync ('./src/data/categoriesDataBase.json'), 'utf-8');  
    },
    findById: function (id) {
      let categories = this.findAll();

      let selectedCategory = categories.find ( category => {
          return category.id == id;
      })

      return  selectedCategory;
    }
}

module.exports = Category;