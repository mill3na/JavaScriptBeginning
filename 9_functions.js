// almost everything is function
// console.log(typeof Object) // function

// class Produto{}

// console.log(typeof Produto) // function
 
// function: code block that has a name, steps and do something (clean code says that it should do just ONE thing. Thats a good function). Can recieve many parameters or none, can return many thing or none.

//functions MUST HAVE good names. It should explain exactly what it does.

function imprimirSoma(numero1, numero2){
    console.log(numero1 + numero2)
}

// imprimirSoma(2, 3)

// imprimirSoma(2, 'a') // concatenate

// imprimirSoma(2) // NaN = sum(2 + undefined)

// imprimirSoma(2, 6, 10, 12, 55) // you have defined 2 parameters for the sum, so it will print 2 + 6 and it will ignore the others

//imprimirSoma() // NaN

function soma(a, b = 0){
    //b = 0 is de default value, if b is not defined when we call the function
    return a + b
}

// console.log(soma(2, 3))
// console.log(soma(2))
// console.log(soma(2)) // NaN

//function basics 2 

//keep a function in a variable


const imprimirSoma2 = function(a, b){
    console.log(a + b)
}

imprimirSoma2(2, 3)

// keep a arrow function in a variable

const soma2 = (a, b) => {
    return a + b
}

console.log(soma2(2, 3))

//implicit return
//without the {}, it means that my function has just 1 line, do just one thing (literally)
const subtracao = (a, b) => a - b

console.log(subtracao(5, 2))

const imprimea = a => console.log(a)

imprimea('2') // 2
console.log(imprimea('2')) // undefined