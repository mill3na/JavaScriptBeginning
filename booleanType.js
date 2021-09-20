//Some tests
let isAtivo = true

isAtivo = -2
console.log(isAtivo)
console.log(!isAtivo) // [!] is a denial
console.log(!!isAtivo) // [!!] double denial is always true


console.log('os verdadeiros...') // all the next ones are true

console.log(!!" ")
console.log(!![]) // list
console.log(!!Infinity)
console.log(!!{}) // math operation that results true
console.log(!!"texto")
console.log(!!(isAtivo = true)) // any atribuition that results true


console.log('os falsos...') // all the next ones are false
console.log(!!0)
console.log(!!'') // empty string
console.log(!!null)
console.log(!!NaN) // not a number
console.log(!!undefined)
console.log(!!(isAtivo = false)) // any atribuition that results false

console.log('' || null || 0 || '' || 123) // >> 123. This will print the true value. The [ || ] is a *or* operation.

let nome = ''
console.log(nome || 'Não informado')


nome = 'Lucas'
console.log(nome || 'Não informado')



