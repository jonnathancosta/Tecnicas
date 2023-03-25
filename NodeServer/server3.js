const http = require('http');

const server = http.createServer((request, response)=>{
    if (request.url== '/teste') {
        response.setHeader('Content-type', 'text/html');
        response.end('<h1> Ola mundo </h1>');
        
    }
})
console.log("Servidor iniciado!")
server.listen(3000);