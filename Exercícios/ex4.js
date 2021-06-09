// ARRAYS

const compras = ["Macarrão", "Arroz", "Feijão"];

const retirada = compras.pop(); // O pop retira o últ elemento do array e também o retorna
console.log(compras); // [ 'Macarrão', 'Arroz' ]
console.log(retirada); // Feijão

compras.push("Água"); // O push adiciona o elemento entre parênteses ao final do array
console.log(compras); // [ 'Macarrão', 'Arroz', 'Água' ]

compras.shift(); // retira o primeiro elemento do array
console.log(compras); // [ 'Arroz', 'Água' ]

compras.unshift("Tigela", "Copo"); // Add ao inicio do arr os elementos dentro dos parenteses
console.log(compras); // [ 'Tigela', 'Copo', 'Arroz', 'Água' ]

console.log(compras.join(" - ")); // junta os elementos do array em uma string e recebe o separador // Tigela - Copo - Arroz - Água
