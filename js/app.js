let primeiroNumero = parseInt(Math.random()*10);
let segundoNumero = parseInt(Math.random()*10);
let resultado = primeiroNumero + segundoNumero;
console.log(primeiroNumero, segundoNumero);
console.log(resultado);

// exibindo na página - para isso criamos uma variável que recebe o elemento html

document.getElementById('elPrimeiroNumero').textContent = `Primeireo número sorteado = ${primeiroNumero}`;
document.getElementById('elSegundoNumero').textContent = `Segundo número sorteado = ${segundoNumero}`;
document.getElementById('elResultado').textContent = `${primeiroNumero} + ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero - segundoNumero
document.getElementById('ResultadoSubtracao').textContent = `${primeiroNumero} - ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero * segundoNumero
document.getElementById('ResultadoMultiplicacao').textContent = `${primeiroNumero} * ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero / segundoNumero
document.getElementById('ResultadoDivisao').textContent = `${primeiroNumero} / ${segundoNumero} = ${resultado.toFixed(1)} `;

resultado = primeiroNumero % segundoNumero
document.getElementById('ResultadoModulo').textContent = `${primeiroNumero} % ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero === segundoNumero
document.getElementById('Igualdade').textContent = `${primeiroNumero} === ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero !== segundoNumero
document.getElementById('Desigualdade').textContent = `${primeiroNumero} !== ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero >= segundoNumero
document.getElementById('MaiorIgual').textContent = `${primeiroNumero} >= ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero <= segundoNumero
document.getElementById('MenorIgual').textContent = `${primeiroNumero} <= ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero > segundoNumero
document.getElementById('Maior').textContent = `${primeiroNumero} > ${segundoNumero} = ${resultado} `;

resultado = primeiroNumero < segundoNumero
document.getElementById('Menor').textContent = `${primeiroNumero} < ${segundoNumero} = ${resultado} `;

resultado = (primeiroNumero >= segundoNumero) || (segundoNumero > 3);
document.getElementById('OperadorOU').textContent = `${primeiroNumero} > ${segundoNumero} || ${segundoNumero} > 3  = ${resultado} `;

resultado = (primeiroNumero >= segundoNumero) && (segundoNumero > 3);
document.getElementById('OperadorE').textContent = `${primeiroNumero} >= ${segundoNumero} && ${segundoNumero} > 3  = ${resultado} `;

resultado = !((primeiroNumero >= segundoNumero) && (segundoNumero > 3));
document.getElementById('OperadorNAO').textContent = `!(${primeiroNumero} >= ${segundoNumero} && ${segundoNumero} > 3)  = ${resultado} `;

resultado = primeiroNumero ** segundoNumero
document.getElementById('Potencia').textContent = `${primeiroNumero} ** ${segundoNumero} = ${resultado} `;