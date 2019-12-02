const Sequelize = require("sequelize")


const sequelize = new Sequelize('test', 'root', 'Python123',{
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate().then(() =>{
//     console.log("funcionando")
// }).catch((err) => {
//     console.log(err)
// })

module.exports = sequelize


//postagens.sync({force:true})
//usuarios.sync({force:true})