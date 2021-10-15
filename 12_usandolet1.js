var numero = 1

{
    let numero = 2
    console.log('Dentro: '+ numero) // 2
}
console.log('Fora: '+ numero) // 1

// Let respects the scope! Uhu 

//Whatch out: 
var numero = 1

{
    console.log('Dentro: '+ numero) // 1
}
console.log('Fora: '+ numero) // 1

// RESUME: var {scope: global, function}; let{scope: global, function, block}!

