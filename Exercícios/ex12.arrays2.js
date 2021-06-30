// MAP
let numeros = [2, 4, 6];
let dobro = numeros.map(function (n) {
  return n * 2;
});
console.log(dobro);

const names = ["mario", "malu", "beto", "zeth"];
const nameUpper = names.map((name) => name.toUpperCase());
console.log(nameUpper);

//FILTER
let idades = [22, 8, 17, 14, 30];
let maior = idades.filter((idade) => idade > 18);
console.log(maior);

//REDUCE
let numbers = [5, 7, 16];
let soma = numbers.reduce((acc, cur) => acc + cur);
console.log(soma);

//forEach
const paises = ["Brasil", "Cuba", "Peru"];
paises.forEach((pais) => {
  if (pais[0] === "B") {
    console.log(pais);
  }
});

//SORT
let numerinhos = [2, 6, 18, 54, 23, 1, 66, 128, 99];
numerinhos.sort((a, b) => a - b);
console.log(numerinhos);

//DESAFIO
//1.Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.

const par = [2, 4, 6, 8];
const impar = par.map((n) => n + 1);
console.log(impar); // [ 3, 5, 7, 9 ]


//2.Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

const nomes = ["Beto", "Maria", "Elenice", "Maria", "João"];
const marias = nomes.filter((nome, i) => nome === "Maria");
console.log(marias); // [ 'Maria', 'Maria' ]

//3.Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados. Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

const nums = [5, 4, 3, 2, 1];
const fatorial5 = nums.reduce((acc, n) => acc * n);
console.log(fatorial5); //  120

//4.Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

const animais = ["Cachorro", "Gato", "Peru"];
animais.forEach((an) => console.log(`O animal é um ${an}`));
console.log(animais);
// O animal é um Cachorro
// O animal é um Gato
// O animal é um Peru
// [ 'Cachorro', 'Gato', 'Peru' ]
