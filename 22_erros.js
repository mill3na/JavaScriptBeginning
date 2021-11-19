// function imprimirNomeGritado(obj){
//     console.log(obj.name.toUpperCase()+'!!!')
// }

// const obj = {nome : 'Roberto'}

// imprimirNomeGritado(obj)

// função que gera erro, pois obj é undefined (nome != name, né?). Para consertar:

function tratarErroELancar(erro) {
    // throw new Error('Sua função não funcionou, bb.')
    throw false;

}

function imprimirNomeGritado(obj){
    try{
        
        console.log(obj.name.toUpperCase()+'!!!')}
        catch (e) {
            tratarErroELancar(e) 
        }
        finally {
            console.log('Final da função.')
        }
    
}

const obj = {nome : 'Roberto'}

const obj2 = {name: 'Mileninha'}

//imprimirNomeGritado(obj)

// agora ele ainda dá erro, mas imprime a nossa mensagem.

imprimirNomeGritado(obj2)
