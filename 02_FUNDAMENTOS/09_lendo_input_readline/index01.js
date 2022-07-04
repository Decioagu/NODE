const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Qual a sua liguagem de programação preferida? ', (languagem) => {
    console.log(`A minha liguagem preferida é ${languagem}.`);
    readline.close();
});