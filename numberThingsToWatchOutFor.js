
// strange things that, in JS, work

console.log(7/0)
console.log("12"/6)

//obs: that does not work > console.log('10,2' / 5)

//obs: that neither > console.log('Hello' * 2). Retorna NaN > Not a Number  

console.log(0.1 + 0.7) // this returns 0.7999999999999999. The language has some inaccuracies, according to the IEEE standard, so this is not 0.8 in, in fact, several languages

//console.log(10.toString) // doesn't work

console.log((10.35).toString) // it work
