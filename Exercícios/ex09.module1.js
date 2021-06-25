// Fazendo a requisição do m1

let jogo = require("./modulos/fizzbuzz");

jogo.fizzBuzz(2, 5);

// Se tivesse exportado com o mudole.exports = fizzBuzz, aí bastaria colocar jogo(2,5) ao invés de jogo.fizzBuzz(2, 5)

// Fazendo a requisição do ex11

const funcao = require("./ex11.module2");

console.log(funcao.mais(5, 5)); // 10
console.log(funcao.menos(5, 5)); // 0
console.log(funcao.maiuscula("mario")); // MARIO
