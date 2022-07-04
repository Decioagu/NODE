const readline = require('readline');

const res = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

res.question('Qual a sua liguagem de programação preferida? ', (languagem) => {
    console.log(`A minha liguagem preferida é ${languagem}.`);
    res.close();
});