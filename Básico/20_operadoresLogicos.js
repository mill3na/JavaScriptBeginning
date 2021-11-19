function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel} // crianção inteligente de objetos. A chave é atribuída automaticamente (com o mesmo nome do valor)

}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


// Operadores Unários

let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // precedência maior do que na pós fixada
console.log(num1)

console.log(++num1 === num2--) //true

console.log(num1 === num2)
// FAÇA UM CÓDIGO CLARO, LIMPO, SIMPLES
//esse tipo de operação pode confundir seu código desnecessariamente!
//Sempre refatore!

// Operadores Ternários

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

//3 valores : [expressao relacional que retorna verdadeiro ou falso] ? [valor para resultado verdadeiro] : [valor para resultado falso]


console.log(resultado(7.1))
console.log(resultado(6.7))

// a função também poderia ser escrita assim: 
const status = nota => {
    nota >=7 ? 'Aprovado' : 'Reprovado'
}
//nota já vai atuar como uma espécie de return por causa do uso do operador ternário. Lembrando que nota é um parâmetro