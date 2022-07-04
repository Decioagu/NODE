const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3010

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true)
  //https://www.w3schools.com/nodejs/nodejs_url.asp
  //https://www.w3schools.com/jsref/jsref_substring.asp
  let filename = q.path.substring(1) //"pathname" ou "path" ou "href" = (rota) 

  console.log(q)
  console.log(filename)

  // "includes()" método retorna true se uma string contém uma string especificada (https://www.w3schools.com/jsref/jsref_includes.asp)
  if (filename.includes('html')) {
    // "existsSync()" verifica se existe um arquivo ou pasta (de forma sincrona)
    if (fs.existsSync(filename)) {
      fs.readFile(filename, function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    } else {
      fs.readFile('404.html', function (err, data) {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
      })
    }
  }
}).listen(port, () => {
  console.log(`Servidor rodando na porta: http://localhost:${port}/home.html`)
})

/* 
"let q = url.parse(req.url, true)" 

Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/home.html',
  path: '/home.html',
  href: '/home.html'
} 
*/