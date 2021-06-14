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
