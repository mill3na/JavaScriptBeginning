// atribuicao

const a = 7

let b = 3

// atribuicao aditiva
b += a // 10

b -= 4 // 6 

b *= 2 //12

b /= 2

b %= 2 // b = b % 2 (resto da divisão) 

// sintaxe: ['operação' '=' ]

// destructuring: operador de desestruturação

// recurso introdux=zido no ES 2015

const pessoa = {
    nome: 'Ana',
    idade: 22,
    endereço: {
        rua: 'Rua ABC',
        numero: 220
    }
}

// 'tire de dentro do objeto os atributos nome e idade'
const {nome, idade} = pessoa

// console.log(nome, idade)

//retirando as variáveis do objeto pessoa e alterando o nome da variável de armazenamento
const {nome: n, idade: i} = pessoa
// console.log(n, i)

//retirar um atributo não definido de dentro de 'pessoa' não retorna um erro. Como sempre, ele vem como undefined.
const {logradouro} = pessoa

// Para evitar esse tipo de valor, podemos atribuir um valor padrão, caso o atributo não exista.

const {emprego = 'Não informado.'} = pessoa

//console.log(emprego)


// Para retirar dados mais internos, faça assim: 
const {endereço: {rua, numero, cep = 'NC'}} = pessoa

console.log(rua, numero, cep)

const {rua: r, numero: nu} = pessoa
// console.log(r, nu) // undefined, undefined, por não estarem definidos diretamente em pessoa, mas em pessoa -> endereço

// OBS: quando for tentar desestruturar um dado aninhado, tenha certeza de que o caminho está livre, senão haverá um erro.

const {conta : {agencia, num}} = pessoa

console.log(agencia, num)