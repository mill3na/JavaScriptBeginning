//destructuring
// objeto: use chaves; array: use colchetes

const [a] = [10]
// console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]

// console.log(n1, n3, n5, n6) // 10 9 undefined 0. Pulando elementos de um array, também funciona, usando uma única atribuição

// desestruturação aninhada

// vamos ignorar os dois primeiros elementos aqui
const [ , [, nota]] = [[, 2, 3], [9, 6, 12]]

// console.log(nota) // 6