const Express = require('express')
const App = Express()
const port = 3030

App.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html")
    
})



 

App.listen(port, ()=> {
    console.log(`running server in port: ${port}`)
})