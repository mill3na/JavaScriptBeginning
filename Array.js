// Array

const valores = [7, 7.7, 8.9, 12.2] // the comma is the element separator

console.log(valores[0])
console.log(valores[1])
console.log(valores[4]) // undefined, does not return a error
valores[4] = 10
console.log(valores[4])
valores[10] = 10
console.log(valores) // >>[ 7, 7.7, 8.9, 12.2, 10, <5 empty items>, 10 ]
console.log(valores.length)

valores.push[{id: 3}, false, null, 'teste'] // adicionar valores
console.log(valores)

// //use values of the same type. This is clean code

console.log(valores.pop()) // removes the last element

delete valores[0] // removes the [0] element

console.log(typeof valores) // object type

