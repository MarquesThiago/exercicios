const sequelize = require("./sequelize")
const Sequelize = require('sequelize')

const usuarios = sequelize.define("usuarios",{

       nome: {
        type:  Sequelize.STRING
        },
        sobrenome: {
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        idade: {
            type: Sequelize.TINYINT
        }  
        
    });

module.exports = usuarios
    