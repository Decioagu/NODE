const x = "10";

// O programa encerra "x" não seja um número
if (!Number.isInteger(x)) {
  throw new Error("O valor de x não é um número inteiro");
}

console.log('Fim!!!');