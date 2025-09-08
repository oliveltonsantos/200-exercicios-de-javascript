/* Descrição do exercício:

Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa.

Descrição:  Nesse exercício, você vai criar uma função que recebe o peso (em kg) e a altura (em m) de uma pessoa, calcula o IMC e verifica em qual faixa o valor se encaixa. As faixas são: 

- Abaixo do peso (IMC < 18.5)
- Normal (18.5 ≤ IMC < 25)
- Sobrepeso (25 ≤ IMC < 30)
- Obesidade (IMC ≥ 30)

*/

const inputPeso = document.getElementById('peso')
const inputAltura = document.getElementById('altura')
const btnVerificacao = document.querySelector('button.btnVerificacao')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function verificarIMC() {
    if (inputPeso.value === '') {
        alert('Digite o peso para continuar.')
        inputPeso.focus()
        return
    }

    if (inputAltura.value === '') {
        alert('Digite a altura para continuar.')
        inputAltura.focus()
        return
    }

    const peso = Number(inputPeso.value)

    if (peso <= 0) {
        alert('Valores iguais ou menores que zero não são aceitos.')
        inputPeso.value = ''
        inputPeso.focus()
        return
    }

    const altura = Number(inputAltura.value)

    if (altura <= 0) {
        alert('Valores iguais ou menores que zero não são aceitos.')
        inputAltura.value = ''
        inputAltura.focus()
        return
    }

    const calculoIMC = peso / (altura ** 2)

    let resultado = ''

    if (calculoIMC < 18.5) {
        resultado = 'Abaixo do peso (IMC < 18.5)'
    } else if (calculoIMC >= 18.5 && calculoIMC < 25) {
        resultado = 'Normal (18.5 ≤ IMC < 25)'
    } else if (calculoIMC >= 25 && calculoIMC < 30) {
        resultado = 'Sobrepeso (25 ≤ IMC < 30)'
    } else {
        resultado = 'Obesidade (IMC ≥ 30)'
    }

    resposta.innerHTML = `
        <p>Seu peso ${peso} KG se enquadra em:</p> 
        <p>IMC = ${calculoIMC.toFixed(2)}</p>
        <p>Resultado: ${resultado}</p>
    `

    btnVerificacao.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}

function novaVerificacao() {
    inputPeso.value = ''
    inputAltura.value = ''
    inputPeso.focus()

    btnVerificacao.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}


