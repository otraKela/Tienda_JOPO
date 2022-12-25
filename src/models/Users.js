const fs = require('fs');

const users = {
    fileName: './src/data/usersDataBase.json',

    findAll: function () {
        return JSON.parse(fs.readFileSync(this.fileName), 'utf-8');
    },


    writeFile: function (user) {
        fs.writeFileSync(this.fileName, JSON.stringify(user, null, ' '));
        return true;
    },
//
    generateId: function(){
        let users = this.findAll();
        let lastUser = users.pop();
        if (lastUser){
            return lastUser.id + 1;
        }
        return 1;   
    },

    findByPk: function (id) {
        let users = this.findAll();

        let user = users.find(user => {
            return user.id == id
        })

        return user;
    },
//
    findByField: function (field, text) {
        let users = this.findAll();

        let user = users.find(user => user[field] == text);
        return user;
    },
    create: function(userData){
        let users = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        users.push(newUser),
        fs.writeFileSync(this.fileName, JSON.stringify(users, null, ' '));
        return newUser;
    },

    delete: function(id){
        let users = this.findAll();
        let finalUsers = users.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }

}

module.exports = users;


