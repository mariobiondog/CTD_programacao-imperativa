class Aluno {
  constructor(nome, notas, faltas) {
    this.nome = nome;
    this.notas = notas;
    this.faltas = faltas;

    this.calcMedia = function calcMedia() {
      return this.notas.reduce((acc, cur) => acc + cur) / this.notas.length;
    };

    this.addFaltas = function addFaltas() {
      return (this.faltas += 1);
    };
  }
}
module.exports = Aluno;
