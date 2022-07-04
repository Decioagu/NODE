// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
// OBS:  "type": "module" no package.json,
// npm init -y
// npm install chalk
import chalk from 'chalk'; // https://www.npmjs.com/package/chalk
import fs from 'fs';

const arquivo = 'arquivo.txt'

// deletar arquivo de nome 'arquivo.txt', caso contrario retorna erro
fs.unlink(arquivo, function (err) {
  if (err) {
    console.log(chalk.red.bold(`Arquivo de nome ${arquivo} NÃO EXISTE!`))
    return
  } else{
    console.log(chalk.green.bold(`Arquivo ${arquivo} REMOVIDO!`))
  }
  
})
