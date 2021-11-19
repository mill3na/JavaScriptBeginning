// vamos lembrar de alguns conceitos:
/*
* A web funciona muito baseada em um escopo que é global, quando falamos em código. Dessa forma, tome muito cuidado ao usar let, var e constantes, tendo em vista as limitações e até mesmo as liberdades de cada tipo.
* Lembre-se que algumas alterações com var, por exemplo, não retornam erros, mas podem comprometer (e muito) o seu código.
* As funções também podem entrar no escopo global, o que não é a melhor opção, já que o acesso é muito livre. Sendo assim, você pode criar objetos que contém atributos: os objetos serão globais, mas os atributos não.
* É sempre bom estudar as arquiteturas e padrões da web, bem como os conceitos de clean code, para manter suas aplicações seguras, funcionais e limpas. */


let a = 3

console.log(this.a) // undefined
console.log(global.a) // undefined

global.b = 123
console.log(b) // 123

this.c = 456

console.log(this.c) // 456

console.log(module.exports.c)
console.log(module.exports === this) // true

// em node: cada arquivo representa um módulo, por isso temos essas diferenças de acesso em relação a outras linguagens

this.c = false
this.d = 'teste'
console.log(module.exports)
// { c: false, d: 'teste' }

// let: local
// variaveis sem var e let: no escopo global

abc = 123
console.log(global.abc)