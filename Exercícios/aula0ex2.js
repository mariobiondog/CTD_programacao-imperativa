let soma = 2 + 2;
let div = 10 / 2;

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);

let soma2 = n1 + n2;
console.log(soma2);
soma2 = "1" + 1;
console.log(soma2); // 11

soma2 = "olá" + 23;
console.log(soma2);

//////////////////////////////////////////////////////////////////
// Exercício

const nome = [
  "José da Silva",
  "Carlos de Souza",
  "Aline Ferreira",
  "Ana Paula",
];
let idade = [27, 28, 33, 26];
let peso = [83.5, 80.1, 63.7, 55];
let altura = [1.7, 1.76, 1.53, 1.62];
let plano = ["Ouro", "Diamante", null, "Prata"];

console.log(
  `${nome[0]} tem ${idade[0]} anos e seu IMC é ${peso[0] / altura[0] ** 2}`
);
console.log(
  `${nome[1]} tem ${idade[1]} anos e seu IMC é ${peso[1] / altura[1] ** 2}`
);
console.log(
  `${nome[2]} tem ${idade[2]} anos e seu IMC é ${peso[2] / altura[2] ** 2}`
);
console.log(
  `${nome[3]} tem ${idade[3]} anos e seu IMC é ${peso[3] / altura[3] ** 2}`
);
