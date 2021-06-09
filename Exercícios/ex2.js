function podeSubir(altura, acomp) {
  if (altura > 1.4 && altura < 2.0) {
    return "Acesso autorizado";
  } else if (altura >= 1.2 && altura < 1.4 && acomp === true) {
    return "Acesso permitido somente com acompanhante";
  } else if (altura < 1.2) {
    return "Acesso negado";
  } else {
    return "Acesso negado";
  }
}

console.log(podeSubir(1.5)); // Acesso autorizado
console.log(podeSubir(2.0)); // Acesso negado
console.log(podeSubir(1.3, true)); // Acesso permitido somente com acompanhante
console.log(podeSubir(1.25, false)); // Acesso negado
console.log(podeSubir(1.25, true)); // Acesso permitido somente com acompanhante
console.log(podeSubir(1.2, false)); // Acesso negado
console.log(podeSubir(1.1, true)); // Acesso negado

