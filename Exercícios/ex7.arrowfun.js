// ARROW

let print = (mensagem) => console.log(mensagem);
print("Olá, bom dia");

let soma = (n1, n2) => n1 + n2;
console.log(soma(10, 10));

let calcIMC = (alt, peso) => {
  alt = alt / 100;
  return (peso / Math.pow(alt, 2)).toFixed(2);
};
console.log(calcIMC(181, 71));

// CALLBACK

function andar() {
  console.log("O carro está andando");
}

function parar() {
  console.log("O carro parou");
}

const acaoCarro = (callback) => callback();

acaoCarro(andar);
acaoCarro(parar);

// ARROW PARÂMETROS

const fizzBuzz = (n1, n2) => {
  let n = parseInt(Math.random() * 100);
  console.log(n);
  if (n % n1 === 0 && n % n2 === 0) {
    console.log("FizzBuzz");
  } else if (n % n1 === 0) {
    console.log("Fizz");
  } else if (n % n2 === 0) {
    console.log("Buzz");
  } else {
    console.log("Sorteie outro número");
  }
};

fizzBuzz(2, 3);
