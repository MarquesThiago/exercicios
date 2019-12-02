const http = require('http')
const port = 3030

http.createServer((req, res)=> {
    res.end("<h1>esta funcionando</h1>")
}).listen(port)

console.log(`server running \nServer in localhost:${port}`)