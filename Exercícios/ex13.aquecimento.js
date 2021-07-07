const produtos = [
  { nome: "TV1", valor: 2800, qualidade: "70", status: true },
  { nome: "TV2", valor: 1200, qualidade: "30", status: true },
  { nome: "Celular1", valor: 4900, qualidade: "100", status: false },
  { nome: "Celular2", valor: 700, qualidade: "70", status: true },
  { nome: "Fone de ouvido1", valor: 250, qualidade: "60", status: false },
  { nome: "Fone de ouvido2", valor: 1200, qualidade: "80", status: true },
];

const carrinho = produtos.filter((prod) => {
  if (
    prod.valor >= 482 &&
    prod.valor <= 1600 &&
    prod.qualidade > 60 &&
    prod.status === true
  ) {
    return prod;
  }
});

console.log(carrinho);

carrinho.forEach((prod) => {
  console.log(prod.nome, prod.valor);
});

const soma = carrinho.reduce((acc, cur) => acc.valor + cur.valor);
console.log(soma);
