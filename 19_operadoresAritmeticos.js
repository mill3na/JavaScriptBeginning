const [a, b, c, d] = [3, 5, 1, 15]


//sintaxe infixa np1 + np2 -- operador binario, segue uma ordem de precedência. SOma, subtracao, multiplicacao, divisao, modulo
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

// console.log(soma, subtracao, divisao,  multiplicacao, modulo)


// operadores relacionais: resultado T ou F


console.log("Primeiro teste")
console.log('01)', '1' == 1) // true
console.log('02)', '1' === 1) // false, verifica se é estritamente igual
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3) // estritamente diferentes: um string, outro number
console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <=2)
console.log('08)', 3 >=2)


const d1 = new Date(0) // data 0
const d2 = new Date(0)
console.log('09)', d1 === d2) // Não, compara endereço de memória! É uma variável de referência

console.log('11)', d1.getTime() === d2.getTime()) // sim, mesmo tipo e valor
console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false. Não misture tipos!!!
//Ao comparar, dê preferência aos estritamente iguais!



