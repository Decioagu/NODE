const http = require("http");
const fs = require("fs");

const port = 3000;

// chama arqivo HTML pelo servidor
const server = http.createServer((req, res) => {
  // altre nome "mensagem.html" e receba um "err"
  fs.readFile("mensagem.html", function (err, data) {
    if (data){
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end(data);
    } else if(err){
      return res.end('<h1>Arquivo não encotrado!</h1>');
    }
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
