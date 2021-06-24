// 1

const pontos = [12, 34, 56, 34, 5, 8, 76, 4, 1, 90];

for (let i = 0; i < pontos.length; i++) {
  console.log(pontos[i]);
}

// 2
const pontos2 = [10, 45, 23, 26, 84, 8945, 23, 15, 98];

for (let i = 0; i < pontos2.length; i++) {
  pontos2[0] = 34;
  console.log(pontos2[i]);
}

// 3

function mudaValor(arr) {
  arr[i] = "chocolate";
}

function mostraValor(arr) {
  console.log(arr[i]);
}

for (var i = 0; i < pontos2.length; i++) {
  mudaValor(pontos2);
  mostraValor(pontos2);
}

// EXTRA 1

for (let i = 11; i <= 11 * 25; i += 11) {
  console.log(i);
}

// EXTRA 2

for (let i = 8; i <= 500; i += 8) {
  console.log(i);
}

// EXTRA 3

for (let a = 5; a < 6; a++) {
  for (let b = 1; b <= 10; b++) {
    console.log(`${a} * ${b} = ${a * b}`);
  }
}
