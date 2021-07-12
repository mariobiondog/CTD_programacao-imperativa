// const aluno = {
//   nome: "Mario",
//   numeroArq: 22,
//   listaNotas: [10, 8, 4, 9, 7],
// };

// // de JS para JSON -> stringfy
// const alunoJSON = JSON.stringify(aluno);
// console.log(alunoJSON); // {"nome":"Mario","numeroArq":22,"listaNotas":[10,8,4,9,7]} //arquivo

// // Escrevendo um arquivo json (ele já cria o arquivo E passamos a informação JSON que vai dentro)

// fs.writeFileSync("escola.json", alunoJSON);

// Adicionando mais um aluno na escola
// Já escrevendo esse aluno em JSON
// Se eu add com o writeFileSync, ele ia substituir, então usa appendFileSync pra add
// const fs = require("fs");
// const aluno2JSON = '{"nome":"Guilherme", "numeroArq":23}';
// fs.appendFileSync("escola.json", aluno2JSON);

// Lendo o arquivo
const fs = require("fs");
const lendoEscola = fs.readFileSync("escola.json", "utf-8");
console.log(lendoEscola);
