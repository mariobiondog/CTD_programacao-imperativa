const Aluno = require("./funcaoAluno");
const Curso = require("./funcaoCurso");

let mario = new Aluno("Mario", [10, 8], 1);
let joao = new Aluno("João", [7.8, 7.8], 4);
let maria = new Aluno("Maria", [10, 10], 5);

let informatica = new Curso("Informática", 7, 4, [mario]);
informatica.addAluno(joao);
informatica.addAluno(maria);

// console.log(informatica.listaAlunos);
// mario.addFaltas();
// console.log(mario.faltas);

console.log(informatica.aprovado(mario));
console.log(informatica.aprovado(joao));
console.log(informatica.aprovado(maria));
