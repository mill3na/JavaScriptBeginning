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

//destructuring.. still

function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max : 50, min : 40}

// console.log(rand(obj))

// console.log(rand({min : 955}))

// console.log(rand({min : 30, max : 60}))

// console.log(rand())

function rand2([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min]
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40])) // retorna um valor aleatório com esses limites passados como parâmetro

console.log(rand2([990])) // pega o valor padrão para o máximo, já que não foi passado como parâmetro

console.log(rand2([, 90])) // pega o valor padrão para o mínimo, já que não foi passado como parâmetro

console.log(rand2([])) // pega os dois valores padrão definidos

console,log(rand2())