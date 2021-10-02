//OBJECT

const prod = {} // {} representa um objeto

prod.nome = 'Celular ultramega' // dynamic attribute
//objects can contain other objects
//objects are groups of pairs of type [key, value] (almost like dictionaries in python: the keys must be unique)

prod.preco = 4998.90
prod['desconto legal'] = 0.40 // its also a attribute. This goes against clean code. Try to avoid attributes with space in the middle

console.log(prod)

//declaring all at once:const prod2 = {
    nome: 'Camisa Cropped',
    preco: 35.90,
    ['descontinho básico']: 0.50,
    obj: { // unique in that block, so the name doesn't give a error
        blabla: 1,
        obj: { // unique in that block, so the name doesn't give a error
            blabla: 2
        }
    }
}
console.log(prod2)

const prod3 = {
    nome: 'Camisa Cropped',
    preco: 35.90,
    ['descontinho básico']: 0.50,
    categorias: { 
        idCamisas: 1,
        idCalcas: 2,
        codigoPorCategoria: {
            1: 0123456,
            2: 987654
        }
    }
}

console.log(prod3)


// from an object, you can generate a JSON. They are similar, but not the same thing. JSON has a textual format, ok? Don't get it confused.
