const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

postagens = sequelize.define("postagens",{

    titulo: {
       type:  Sequelize.STRING
    },
    post: {
        type: Sequelize.TEXT
    }
    
});


module.exports = postagens
