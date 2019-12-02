const Express = require('express')
const App = Express()
const port = 3030

App.get("/", (req, res) => {
    res.send(`<h1>Entred</h1><br/><h2>in server:${port}`)
})

App.get("/about", (req, res) => {
    res.end("<h1 style='background-color: blue; color:white;'>you entry in about</h1>")
})

App.get("/contact", (req,res)=> {
    res.end("<p style='color:red; font-size:20px'>entred in contact </p>")
})
 

App.listen(port, ()=> {
    console.log(`running server in port: ${port}`)
})