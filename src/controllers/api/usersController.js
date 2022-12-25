const db = require('../../database/models')
const Sequelize = require('sequelize');


const controller={  
    

    list: function(req,res){
        let usersArray = [];
        db.Users.findAll()
        .then(users=>{
           users.forEach(user => {
           let data={
            id:user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone: user.phone,
            image: user.image,
            url: 'http://localhost:3040/api/users/' + user.id
           }
           usersArray.push(data)
        });

        const count= usersArray.length;
           
        return res.json({
            meta:{
                    status : 200,
                    url: 'api/users',
            },
           
            data:{
                count:count,
                users:usersArray
            }
        });
        })
        .catch ( e => console.log (e))
    },

    detail: function(req, res){
        db.Users.findByPk(req.params.id)
        .then(user=>{
            let data={
                id:user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone: user.phone,
                image: user.image,
               }
            return res.status(200).json (
                {
                    meta: {
                        status: 200,
                        url: 'api/users/:' + req.params.id,
                        user_id: req.params.id,
                    },
                    data: data
                }
            )
        })
        .catch ( e => console.log (e))
    }
}

module.exports= controller