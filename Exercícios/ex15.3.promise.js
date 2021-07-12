const fs = require("fs");

console.log(1);

const lerArq = (arq) =>
  new Promise((resolve, reject) => {
    fs.readFile(arq, (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });

console.log(2);

// chamando a função lerArq com o arquivo como parâmetro u chamando o método .then se der bom e o .catch se der ruim

lerArq(
  "./ex15.letras.txt"
    .then((contents) => {
      console.log(String(contents));
    })
    .catch((err) => {
      console.log(err);
    })
);
