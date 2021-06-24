let lodash = require("lodash"); // Importando a biblioteca lodash inteira

console.log(lodash.first("Mario")); // M

// const isNumber = require("lodash").isNumber; // Outra forma de pegar
const { isNumber } = require("lodash"); // Estou pegando só a função isNumber que já existe no lodash. Desestruturo com o  { }

function maiuscula(texto) {
  if (isNumber(texto)) {
    return "Essa função só acc texto";
  }

  return texto.toUpperCase();
}

console.log(maiuscula(3)); // Essa função só acc texto
console.log(maiuscula("mario")); // MARIO
