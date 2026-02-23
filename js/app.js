let primeiroNumero = parseInt(Math.random()*1000);
let segundoNumero = parseInt(Math.random()*500);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);

// exibindo na página - para isso criamos uma variável que recebe o elemento html

document.getElementById('elPrimeiroNumero').textContent = `Primeireo número sorteado = ${primeiroNumero}`;
document.getElementById('elSegundoNumero').textContent = `Segundo número sorteado = ${segundoNumero}`;
document.getElementById('elResultado').textContent = `${primeiroNumero} + ${segundoNumero} = ${resultado} `;

