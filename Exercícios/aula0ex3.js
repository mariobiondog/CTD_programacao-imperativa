// FUNÇÕES

//EX1

function calcularIndiceDeMassaCorporal(peso, altura) {
  return (peso / (altura / 100) ** 2).toFixed(2);
}

console.log(calcularIndiceDeMassaCorporal(70, 168));
console.log(calcularIndiceDeMassaCorporal(80, 160));

// EX2

const soma = function (n1, n2) {
  return n1 + n2;
};

console.log(soma(2, 2));

const subt = function (n1, n2) {
  return n1 - n2;
};

console.log(subt(2, 2));

const mult = function (n1, n2) {
  return n1 * n2;
};

console.log(mult(2, 2));

const div = function (n1, n2) {
  return n1 / n2;
};

console.log(div(2, 2));

// EX3

let nomeJogador;
let golsJogador = 0;
let precoEmDolares = 0;

function fazerGol() {
  golsJogador++;
  precoEmDolares += 10000;
  console.log("GOL!!!!");
}

fazerGol();
console.log(golsJogador, precoEmDolares); // 1, 10000

// EX 4

function hatTrick() {
  fazerGol();
  fazerGol();
  fazerGol();
  precoEmDolares = precoEmDolares + precoEmDolares * 0.1;
}

hatTrick();
console.log(golsJogador, precoEmDolares); // 4, 44000 (já veio com um gol lá de cima)
