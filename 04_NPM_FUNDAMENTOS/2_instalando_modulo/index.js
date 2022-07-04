// npm init -y
// npm install lodash
// https://blog.betrybe.com/desenvolvimento-web/lodash-o-que-e-como-usar/
// https://lodash.com/docs/4.17.15
const _ = require("lodash");

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 5, 6, 7, 8];

// resposta é a diferença entre dois Array
const diff = _.difference(a, b);

console.log(diff);
