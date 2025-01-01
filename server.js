const http = require('http')
const server = http.createServer((req,res)=>{
    res.end("hii i am homepage")
})
server.listen(3000)