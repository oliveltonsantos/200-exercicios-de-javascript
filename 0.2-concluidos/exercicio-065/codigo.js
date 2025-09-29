/* Descrição do exercício:

Escreva uma função que aceite um array de números e uma função de callback e retorne a soma de todos os números do array após a aplicação da função de callback. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de números e uma função de callback como argumentos, e retorne a soma de todos os números do array depois de aplicar a função de callback a cada número.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para adicionar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `<p>Números adicionados: ${listaNumeros.join(' > ')}</p>`

    inputNumero.value = ''
    inputNumero.focus()
}


function chamarCallback(callback) {
    if (listaNumeros.length < 2) {
        alert('Adicione mais números à lista.')
        inputNumero.focus()
        return
    }

    callback(listaNumeros)

}


function callbackSomar(listaNumerosPassada) {

    let somaNumeros = 0

    for (let i = 0; i < listaNumerosPassada.length; i++) {
        somaNumeros += listaNumerosPassada[i]
    }

    resposta.innerHTML = `<p>Soma da lista: ${somaNumeros}</p>`

    inputNumero.disabled = true

    btnAdicionarNumero.style.display = 'none'
    btnChamarCallback.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}


function novaSoma() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnAdicionarNumero.style.display = 'inline-block'
    btnChamarCallback.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    listaNumeros.length = 0

    resposta.innerHTML = ''
}


// Eventos dos botões (em vez de colocar "onclick" direto no HTML)
btnAdicionarNumero.addEventListener('click', adicionarNumero)
btnChamarCallback.addEventListener('click', () => chamarCallback(callbackSomar))
btnNovaSoma.addEventListener('click', novaSoma)
