const http = require('http').createServer((req, res) =>{
    res.end('Oi HTTP 2.0!!!')
}).listen(3002, ()=>{
    console.log(`Servidor rodando na porta: http://localhost:3002`);
});