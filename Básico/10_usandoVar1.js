//JS doenst have a scope (python, as example, has), so the variable will be visible all over the code (using VAR, ok? And out of a function)
{{{{var sera = 'será?'}}}}

console.log(sera)

// {{{{ let sera2  = 'Será 2?'}}}}

//console.log(sera2) //error

function teste(){
    var local = 123
    console.log(local)
}

teste()
// console.log(local) error (local is not defined)
console.log(teste.local) // undefined

teste.local = 1234
// console.log(local) // error
console.log(teste.local) // 1234. You can use the function to access 'local', but just like that, because of the function scope  

sera = "Mudei!"
console.log(sera)

// about var type: it is global, and thats ok (kind of), but its value can be modified at ANY point, so its vunerable, ok? Var types are dangerous

// Var type only has 2 possible scopes: global level, function level