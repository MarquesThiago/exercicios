const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require("sequelize")

const port = 3031

//config
//configured template engine handlebars 
app.engine("handlebars", handlebars({defaultLayouts: 'main'}))
app.set("view engine", "handlebars")


//configured conection with database
const sequelize = new Sequelize ("test", "root", "Python123", {
    host: "localhost",
    dialect: "mysql"
})






app.listen(port, (err) => {
    if (!err){
        console.log(`esta funcionando http://localhost:${port}`)
    }else{
        console.log(err)
    }
})