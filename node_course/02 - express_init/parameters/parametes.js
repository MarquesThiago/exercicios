const Express = require('express')
const App = Express()
const port = 3030

App.get("/", (req, res) => {
    res.send(`<h1>Entred</h1><br/><h2>in server:${port}`)
})

App.get("/about", (req, res) => {
    res.end("<h1 style='background-color: blue; color:white;'>you entry in about</h1>")
})

// O parametro tem que ser  atribuito junto a rota e te mque ser especificado logo em segui na URL:
// com oesse, http://localhost:3030/about/thiago_silva
// e ´pode ser acesssado pelo req.params 
// se for acessar algo especifico tende utilizar o 'req.params.<nome_do_parametro>'


App.get("/about/:nome", (req, res) => {
    res.send("you entred " + req.params.nome)
    console.log(req.params)
})




App.get("/contact", (req,res)=> {
    res.end("<p style='color:red; font-size:20px'>entred in contact </p>")
})
 

App.listen(port, ()=> {
    console.log(`running server in port: ${port}`)
})