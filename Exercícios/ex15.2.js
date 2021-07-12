const fs = require("fs");

// LEITURA ASSÍNCRONA (fora do tempo de execução. Peço no presente e recebo no futuro)
// Aqui o sistema continua rodando enquanto ta lendo o arquivo solicitado e retonra depois a resposta (NÃO fica aguardando a resposta pra continuar)

console.log(1);

fs.readFile("./ex15.letras.txt", (err, contents) => {
  console.log(2);
  console.log(String(contents));
  console.log("Erro:", err);
});

console.log(3);
console.log(4);

//  1 3 4 2 a b c d e
