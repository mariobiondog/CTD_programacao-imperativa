const fs = require("fs");

// LEITURA SÍNCRONA (de cima pra baixo, na ordem da execução)
// O sistema executa na ordem e naquele momento, então ele fica carregando até ler pra poder continuar. Tem que esperar terminar o passo1 pra ir pro passo2 ...

console.log(1);
console.log(2);
const lerArq = fs.readFileSync("./ex15.letras.txt", "utf-8");
console.log(lerArq);
console.log(3);
console.log(4);

// 1 2 a b c d e 3 4
