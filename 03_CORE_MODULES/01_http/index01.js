// O módulo HTTP pode criar um servidor que escute as portas do servidor 
const http = require ('http');

const porta = 3001;

// cria um servidor HTTP e envia uma resposta para pagina HTML => 'Oi HTTP 1.0!!!'
const server = http.createServer((req, res) =>{
    res.write('Oi HTTP 1.0!!!')
    res.end('\nOK')
});

server.listen(porta, ()=>{
    console.log(`Servidor rodando na porta: http://localhost:${porta}`);
});
