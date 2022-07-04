const http = require("http");
const fs = require("fs");
const url = require("url");


const server = http.createServer((req, res) => {
  let urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  console.log(urlInfo);

  // senão tiver "nome" em "const name = urlInfo.query.name;"
  if (!name) {
    fs.readFile("index.html", function (err, data) {
      // Exibe informações do "index.html"
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  } else {
    // cria ou atualiza <nome> no "arquivo.txt" no endereço (http://localhost:3007/?name=<nome>)
    fs.appendFile("arquivo.txt", name + '\n', function (err, data) {
      // retorna para "http://localhost:3007"
      res.writeHead(302, {Location: "/"});
      return res.end();
    });
  }
}).listen(3007, () => {
  console.log(`Servidor rodando na porta: http://localhost:3007`);
});
