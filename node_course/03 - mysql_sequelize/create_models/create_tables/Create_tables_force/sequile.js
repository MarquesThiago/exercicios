const Sequelize = require("sequelize")


const sequelize = new Sequelize('test', 'root', 'Python123',{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() =>{
    console.log("funcionando")
}).catch((err) => {
    console.log(err)
})

const postagens = sequelize.define("postagens",{

    titulo: {
       type:  Sequelize.STRING
    },
    post: {
        type: Sequelize.TEXT
    }
    
});

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

//codigo responsavel por forçar a criação de uma table:

//postagens.sync({force:true}) 

//usuarios.sync({force:true})





