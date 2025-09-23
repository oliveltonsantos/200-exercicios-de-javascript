/* Descrição do exercício:

Escreva uma função de alta ordem que aceite um array de números e uma função de callback, e retorne um novo array que contém apenas os números do array original que satisfazem a condição da função de callback. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de números e uma função de callback como argumentos, e retorne um novo array que contenha apenas os números do array original que passam no teste implementado pela função de callback.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar à lista.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


// Função de alta ordem
function altaOrdem(listaNumerosPassada, callbackFiltrarImpares) {
    return listaNumerosPassada.filter(callbackFiltrarImpares)
}


// Função de callback (filtra os números ímpares da lista)
function filtrarImpares(numeroDaLista) {
    return numeroDaLista % 2 != 0
}


function chamarCallback() {
    if (listaNumeros.length === 0) {
        alert('Adicione números à lista antes de analisar.')
        inputNumero.focus()
        return
    }

    let resultado = altaOrdem(listaNumeros, filtrarImpares)

    resposta.innerHTML = `<p>Números ímpares: ${resultado.join(' > ')}</p>`

    inputNumero.disabled = true

    btnAdicionar.style.display = 'none'
    btnChamarCallback.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'

}


function novaAnalise() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionar.style.display = 'inline-block'
    btnChamarCallback.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}


// Eventos dos botões (em vez de colocar "onclick" direto no HTML)
btnAdicionar.addEventListener('click', adicionarNumero)
btnChamarCallback.addEventListener('click', chamarCallback)
btnNovaAnalise.addEventListener('click', novaAnalise)