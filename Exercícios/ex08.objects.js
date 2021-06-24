// 1
/*
const restaurant = {
  name: "ET",
  menu: ["Oi", "Tchau"],

  pedido: function () {
    return this.name;
  },
};

console.log(restaurant.pedido());

// FUNÇÃO CONSTRUTORA

function Gato(nome, idade, sexo, cor) {
  this.nome = nome;
  this.idade = idade;
  this.sexo = sexo;
  this.cor = cor;
  this.conta = function conta(n1, n2) {
    console.log(n1 + n2);
  };
}

let gato1 = new Gato("José", 10, "M", "Branco"); // Aqui ainda está criando o objeto
let gato2 = new Gato("Birdie", 4, "F", "Preto");
console.log(gato1); // Gato { nome: 'José', idade: 10, sexo: 'M', cor: 'Branco' }
console.log(gato2); // Gato { nome: 'Birdie', idade: 4, sexo: 'F', cor: 'Preto' }

console.log(gato1.conta(3, 3)); //6 -> só posso chamar a função depois que o objeto já estiver definido

// 2

let numerosPrimos = [2, 3, 5, 7, 11];
let numeros = [...numerosPrimos, 12, 13, 14, 15, 16];

console.log(numeros);

// 3

function menorNumero(...n) {
  return Math.min(...n);
}

console.log(menorNumero(...numeros));

// Conta bancária

const conta1 = {
  numero: 12345,
  saldo: 300,
  nome: "Mario",

  deposito: function (dinheiro) {
    return (this.saldo += dinheiro);
  },

  saque: function (dinheiro) {
    if (this.saldo >= dinheiro) {
      return (this.saldo -= dinheiro);
    } else {
      return "Saldo insuficiente";
    }
  },
};

console.log(conta1.deposito(200)); // 500
console.log(conta1.deposito(200)); // 700

console.log(conta1.saque(600)); // 100
console.log(conta1.saque(200)); // Saldo insuficiente

// FUNÇÃO CONSTRUTORA

function Conta(numero, saldo, nome) {
  this.numero = numero;
  this.saldo = saldo;
  this.nome = nome;
  this.deposito = function deposito(dinheiro) {
    return (this.saldo += dinheiro);
  };
  this.saque = function saque(dinheiro) {
    if (this.saldo >= dinheiro) {
      return (this.saldo -= dinheiro);
    } else {
      return "Saldo insuficiente";
    }
  };
}

let conta2 = new Conta(3344, 3000, "Malu");
console.log(conta2);
conta2.deposito(1000);
console.log(conta2.saldo);
*/
// CALCULAR NOTAS

const aluno = {
  nome: "Mario",
  numeroArq: 22,
  listaNotas: [10, 8, 4, 9, 7],

  media: function (listaNotas) {
    return listaNotas.reduce((acc, nota) => acc + nota, 0) / listaNotas.length;
  },
};

console.log(aluno.media(aluno.listaNotas));
