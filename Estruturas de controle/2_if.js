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
// imprime 6 e o 8. O ; separou os blocos, então o console.log() foi executado independente do código. É como se estivesse assim: 


function teste2(numero){
    if (numero > 7)
    ; // bloco de código vazio
    // não usar ; com as estruturas de controle!
    
    {
        console.log(numero)

    }
}