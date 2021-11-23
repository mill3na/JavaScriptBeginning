//switch: estrutura de seleção múltipla

const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra!') //10 ou 9: cai nesse case. Ele escapa pro de baixo.
            break
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
        case 3:
            console.log('Recuperação.')
            break
        case 2: 
        case 1: 
        case 0: 
        console.log('Reprovado.');
        break
        default:
            console.log('Nota inválida.')
    }
}

// todos os cases são efrtuados, por padrão.

imprimirResultado(10)
imprimirResultado(6.5)
imprimirResultado(7.9)
imprimirResultado(2)
imprimirResultado(11)

// coisas que não funcionam:
// case 1, 2, 3:
// case 1 - 3: