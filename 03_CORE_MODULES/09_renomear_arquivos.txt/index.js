// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
// OBS:  "type": "module" no package.json,
// npm init -y
// npm install chalk
import chalk from 'chalk'; // https://www.npmjs.com/package/chalk
import fs from 'fs';

const velho = 'arquivo.txt'
const novo = 'novo_arquivo.txt'

// renomeia arquivo de nome 'arquivo.txt', caso contrario retorna erro
fs.rename(velho, novo,function (err) {
  if (err) {
    console.log(chalk.red.bold(`Arquivo ${velho} não existe!`))
    return
  } else{
    console.log(chalk.green.bold(`Arquivo ${velho} renomeado para ${novo}!`))
  }
  
})
