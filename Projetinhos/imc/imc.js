
const calcular = document.getElementById('calcular')

const resultado = document.getElementById('peso')

function classifica (valorIMC) {

    if (valorIMC < 18.5){
        mensagem = 'abaixo do peso.'
    }
    else if (valorIMC < 25){
        mensagem = 'com peso ideal.'
    }
    else if (valorIMC < 30){
        mensagem = 'levemente acima do peso.'
    }
    else if (valorIMC < 35){
        mensagem = 'obesidade grau 1.'
    }
    else if (valorIMC < 40){
        mensagem = 'obesidade grau 2.'
    }
    else{
        mensagem = 'obesidade grau 3. Cuidado!'
    }

    return mensagem
}

function imc(){
    const nome = document.getElementById('nome').value

    const altura = document.getElementById('altura').value
    
    const peso = document.getElementById('peso').value
    
    const resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== ''){
        
        // toFixed para fixar o valor em duas casas decimais

        const valorIMC = (peso / (Math.pow(altura, 2))).toFixed(2)
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classifica(valorIMC)}`
    }


    else{
        resultado.textContent = 'Preencha todos os campos em branco para calcular o IMC.'
    }
    }

calcular.addEventListener('click', imc)

