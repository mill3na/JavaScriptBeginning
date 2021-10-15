for (var i = 0; i<10; i++){
     console.log(i)
    
}

// console.log('i = '+i)

// i was set using a var type, so it can be read in the global scope. The value print is , because it is the condition that stops the loop
console.log('\n')
for (let k = 0; k < 10; k++){
    console.log(k)
}

//console.log('k = '+k) // error: k is not defined. The var k is visible just in that block

console.log('\n\n\n')
//Another example:

const funcs = [] 

for (var j = 0; j < 10; j++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // 10
funcs[8]() // 10

// remember that var has GLOBAL scope!
// using let...
console.log('\n\n\n')


const funcs2 = [] 

for (let m = 0; m < 10; m++){
    funcs2.push(function(){
        console.log(m)
    })
}

funcs2[2]() // 2
funcs2[8]() // 8

// let really works as we wanted. :) (and this is because of the scope, "knows" where it was declared)