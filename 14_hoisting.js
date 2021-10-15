//hoisting -> "içamento": is JS's default behavior of moving declarations to the top.

console.log(a) // undefined

var a = 2

console.log(a) // 2

// ERROR: 
// console.log(a) // undefined

// //var a = 2

// console.log(a) // 2

////in secret, thats whats happening (for the first case, that works):
//var a
// console.log(a) // undefined

//a = 2

// console.log(a)

// Note that console.log(s) returns a error when alone, but if we put someting like var s above, this will make b undefined and wont return errors

// in functions, the effect is the same.

// remember that this is nothing like clean code!

/// Hoisting donst work with let, ok? This will crash your code.
//console.log(b)
//let b = 2