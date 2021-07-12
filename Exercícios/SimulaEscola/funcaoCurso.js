class Curso {
  constructor(nome, notaAprov, faltasMax, listaAlunos) {
    this.nome = nome;
    this.notaAprov = notaAprov;
    this.faltasMax = faltasMax;
    this.listaAlunos = listaAlunos;

    this.addAluno = function addAluno(aluno) {
      listaAlunos.push(aluno);
      return this.listaAlunos;
    };

    this.resultadoFinal = function resultadoFinal() {
      return this.listaAlunos.map((aluno) => {
        if (
          aluno.calcMedia() >= this.notaAprov &&
          aluno.faltas <= this.faltasMax
        ) {
          return `${aluno.nome}: Aprovado`;
        } else if (
          (aluno.calcMedia() >= this.notaAprov * 1,
          1 && aluno.qtdFaltas == this.faltasMax)
        ) {
          return `${aluno.nome}: Aprovado`;
        } else {
          return `${aluno.nome}: Reprovado`;
        }
      });
    };

    // this.aprovado = function aprovado(aluno) {
    //   if (
    //     aluno.calcMedia() >= this.notaAprov &&
    //     aluno.faltas <= this.faltasMax
    //   ) {
    //     return true;
    //   } else if (
    //     (aluno.calcMedia() >= this.notaAprov * 1,
    //     1 && aluno.qtdFaltas == this.faltasMax)
    //   ) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // };
  }
}

module.exports = Curso;
