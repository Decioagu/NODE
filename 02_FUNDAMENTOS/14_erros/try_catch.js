const x = 10;

// O programa informa o erro caso "x" não seja um número
try {
  x = 2;
} catch (err) {
  console.log(`Erro: ${err}`);
}

console.log('Fim!!!');