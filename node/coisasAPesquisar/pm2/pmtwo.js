const express = require ("express")
var app = express()

app.get("/", function(req,res){
    res.send("hora de log" + new Date().getTime())
})

app.listen(3030)