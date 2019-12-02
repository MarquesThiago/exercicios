const db = require('./db')

const Post = db.sequelize.define('postagem', {
    titulo:{
        type: db.Sequelize.STRING
    },
    post:{
        type: db.Sequelize.STRING
    }
})

module.exports = Post