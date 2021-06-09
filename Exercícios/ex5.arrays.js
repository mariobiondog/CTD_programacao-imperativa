let filmes = [
  "star wars",
  "clube da luta",
  "o poderoso chefão",
  "top gun",
  "interestelar",
];

let filmesMaiuscula = function (arr) {
  for (const filme of arr) {
    console.log(filme.toUpperCase());
  }
};

filmesMaiuscula(filmes);

let cartoons = [
  "toy story",
  "Procurando Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];

cartoons.pop(cartoons[4]);
console.log(cartoons);

let addCartoons = function (i) {
  filmes.push(cartoons[i]);
};

addCartoons(0);
addCartoons(1);
addCartoons(2);
addCartoons(3);

filmesMaiuscula(filmes);
console.log(filmes);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

let compare = function (arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      console.log("É igual");
    } else {
      console.log("É diferente");
    }
  }
};

compare(asiaScores, euroScores);
