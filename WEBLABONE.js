
const url = require('url') // import node url module 
const http= require ('http')
const { kill } = require('process')

const serverHandle = function(req,res) {


    const path = url.parse(req.url).pathname
    console.log(path)
  
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(path)
    res.end()

}

http

.createServer(serverHandle)
.listen(8080)

