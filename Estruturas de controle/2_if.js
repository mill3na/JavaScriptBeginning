function teste1 (numero){
    if (numero > 7)
    console.log(numero)
    console.log('Final')
}

teste1(8)
teste1(6)
// 8, final, final.
// O JS, diferente do python, não é baseado em identação. Um bloco if sem {} funciona para somente uma linha de comando associada, por isso não apresentou erro e imprimiu final duas vezes, pois este comando foi executado nas duas execuções da função.

function teste2(numero){
    if (numero > 7);{
        console.log(numero)

    }
}
teste2(6)
teste2(8)