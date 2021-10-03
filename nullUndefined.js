// Null and undefined

// the assignment (value or reference) are important things to know to understand this

const a = {name: 'teste'} // reference to {name: 'teste'}

console.log(a)

const b = a // reference to a

console.log(b)

b.name = 'opa'

console.log(a) // name = opa, because it keeps the reference, not the value


let c = 3 // ptimitive type 

let d = c // copy the value of c

d++

console.log(c) // 3
console.log(d) // 4
 
//using objects, the attribution is by reference. With primitive types, it is by value

let valor

console.log(valor) // undefined

//console.log(valor2) // its not defined

valor = null // ausence of value, doesnt keep a memory reference and it is defined. Its empty

// let valor = undefined. Please, dont do this. The language is responsible for that, ok?

//console.log(valor.toString()) // TypeError: Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) // undefined

//console.log(produto.preco.a) // This returns a error. If preco was defined, it would work, but is not.

console.log(produto)// {} undefined
produto.preco = 3.5

console.log(produto)
produto.preco = undefined // not cool

console.log(!!produto.preco) // !!convert to boolean. In this case, false, because of the undefined

console.log(produto) // { preco: undefined }. Preco is an existent attribute, but it is undefined

// delete produto.preco

// console.log(produto) // {}

// null >>>>> undefined (attribuition, when necessary)
