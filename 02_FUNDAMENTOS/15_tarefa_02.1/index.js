// npm init -y
// npm install chalk
// npm install inquirer
// Este módulo chalk não permite utilização de do médoto "const chalk = require(chalk)"
// OBS:  "type": "module" no package.json,
//https://bobbyhadz.com/blog/javascript-error-err-require-esm-require-of-es-module-not-supported
//import chalk from 'chalk'; 
import inquirer from 'inquirer';

function avaliacao() {
    inquirer.prompt([
        {name: 'nome', message: 'Qual é o seu nome?'},
        {name: 'idade', message: 'Qual a sua idade?'},
    ]).then(res =>{
        if (!res.nome || !res.idade){
            console.log('Nome e idades são obrigatórios!')
            avaliacao()
        } else if (res.idade){
            console.log(`Meu nome é ${res.nome} e tenho ${res.idade} anos de idade.`);
        } else {
            console.log(`Meu nome é ${res.nome} e tenho ${res.idade} anos de idade.`);
        }
    }).catch((erro)=>{
        console.log('Falha de execução => ', erro);
    })
}
avaliacao()