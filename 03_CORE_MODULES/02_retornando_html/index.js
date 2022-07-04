const http = require ('http');

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    // utilizar "Tag" do "HTML" na resposta da Pagina
    res.setHeader('Contenty-Type', 'text/html')
    // "res.setHeader" = (Tag HTML)
    res.end('<h1>Agora posso usar Tag de HTML!!!</h1>')
});

server.listen(3003, ()=>{
    console.log(`Servidor rodando na porta: http://localhost:3003`);
});
