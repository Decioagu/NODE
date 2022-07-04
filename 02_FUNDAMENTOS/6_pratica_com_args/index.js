// npm init
// npm install minimist
const minimist = require ('minimist');

// módulo nativo
const args = minimist(process.argv.slice(2))

// módulo criado
const soma = require('../01_exportar_modulo_criado/exporta_modulo').soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a,b)
// node ./index.js --a=4 --b=6