const imprimirResultado = function(nota){
    // if (typeof(nota) != Number){
    //     console.log('O parâmetro deve ser do tipo número!')
    //     return;
    // }

    if (nota >=7){
        console.log('Aprovado!')
    }else {
        console.log('Reprovado!')
    }
}

imprimirResultado(8)
imprimirResultado(10)
imprimirResultado(6)
imprimirResultado('Epa!') // Reprovado, JS é fracamente tipada!

