const http = require('http');

const server = http.createServer((request, response)=>{
    if (request.url== '/teste') {
        response.setHeader('Content-type', 'text/html');
        response.end('<h1> Ola mundo </h1>');
        
    }
    if (request.url == '/json') {
        response.setHeader('Content-type', 'application/json');
        const data = {
            id: 1,
            name: "user"
        };
        response.end(JSON.stringify(data));
        
    }
})
console.log("Servidor iniciado!")
server.listen(3000);