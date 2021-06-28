exports.fizzBuzz = (n1, n2) => {
  let n = parseInt(Math.random() * 100);
  console.log(n);
  if (n % n1 === 0 && n % n2 === 0) {
    console.log("FizzBuzz");
  } else if (n % n1 === 0) {
    console.log("Fizz");
  } else if (n % n2 === 0) {
    console.log("Buzz");
  } else {
    console.log(
      `${n} não é divisível por ${n1} nem por ${n2}. Sorteie outro número.`
    );
  }
};

// poderia ter usado o const lá em cima e dado o module.exports = fizzBuzz;


