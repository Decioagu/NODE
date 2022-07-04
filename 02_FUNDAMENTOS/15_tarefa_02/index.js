// npm init -y
// npm install chalk
// npm install inquirer
// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
// OBS:  "type": "module" no package.json,
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
import chalk from 'chalk'; 
import inquirer from 'inquirer';

inquirer.prompt([
    {name: 'nome', message: chalk.bgYellow.black('Qual é o seu nome?')},
    {name: 'idade', message: chalk.bgYellow.black('Qual a sua idade?')},
]).then(res =>{
    if (!res.nome || !res.idade){
        throw new Error('Nome e idades são obrigatórios!')
    }
    console.log(chalk.bgGreen.black(`Meu nome é ${res.nome} e tenho ${res.idade} anos de idade.`));
}).catch((erro)=>{
    console.log(chalk.bgRed.black('Falha de execução => ', erro) );
})