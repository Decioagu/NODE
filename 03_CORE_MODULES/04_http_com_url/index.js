const http = require("http");
const url = require("url");

const port = 3004;

const server = http.createServer((req, res) => {
  let urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name;

  res.statusCode = 200;
  // utilizar "Tag" do "HTML" na resposta da Pagina
  res.setHeader("Content-Type", "text/html");
  
  console.log(urlInfo);
  if (!name) {
    res.end(
      `<h1>Preencha seu nome:</h1>
      <form method='GET'>
        <input type='text' name='name'/>
        <input type='submit' value='Enviar'>
      </form>`
    );
  } else {
    res.end(`<h1>Seja bem-vindo ${name}!</h1>`); 
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}`);
});
