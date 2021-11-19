var number = 1

{
    var number = 2
    console.log('Dentro: '+ number)
}
console.log('Fora: '+ number) // number has the same value: in and out => 2

// RUN AWAY FROM THE GLOBAL SCOPE! Especially in the front end context. Use var type in functions!