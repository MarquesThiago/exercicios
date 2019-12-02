var http = require('http')
var fs = require("fs")
const port = 3500


http.createServer((req,res)=> {

    res.end("esta funcionando")

}).listen(port)