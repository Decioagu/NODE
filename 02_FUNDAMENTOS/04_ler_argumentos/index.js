// <node ./index.js nome=Décio idade=40> DIGITE NO TERMINAL

// "process.argv" ler argumentos passados ​​para o processo node.js quando executado na linha de comando
console.log(process.argv) 

const argumento = process.argv.slice(2)

console.log(argumento)

const nome = argumento[0].split('=')[1]

console.log(argumento[0].split('='))

console.log('====== '+ nome + ' ======')

const idade = argumento[1].split('=')[1]

console.log(argumento[1].split('='))

console.log('====== '+ idade + ' ======')

console.log(`Meu nome é ${nome}, tenho ${idade}!`)