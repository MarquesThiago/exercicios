const Sequelize = require('sequelize')

//configured conection with database
const sequelize = new Sequelize ("test", "root", "Python123", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}