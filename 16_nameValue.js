const nome = `Opa` // context 1

function exec(){
    const nome = `Falaaa` // context 2
    return nome
}

// this doesnt return a error, because of the conext, the scope

// objects are groups of couples [key, value]

const cliente = {
    nome: `Pedro`,
    idade : 23,
    filho: {
        nome : `Jonas`,
        idade : 1
    }
}
console.log(nome) // opa
console.log(exec()) // falaaa
console.log(cliente) // all the attributes



const test = {
    print : `Oi`
}

test.print =`Oi não`

console.log(test.print)