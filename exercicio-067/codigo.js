/* Descrição do exercício:

Escreva uma função que aceite uma função de callback e um array de arrays, e retorne um novo array que contém os resultados de aplicar a função de callback a cada array. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array de arrays como argumentos, e retorne um novo array que contenha os resultados de aplicar a função de callback a cada array.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

let conjuntoDeArrays = [[], []]

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (conjuntoDeArrays[0].length < 5) {
        conjuntoDeArrays[0].push(numero)
    } else if (conjuntoDeArrays[1].length < 5) {
        conjuntoDeArrays[1].push(numero)
    } else {
        alert('As duas listas estão preenchidas. Clique em "Analisar"')
        inputNumero.disabled = true
        btnAdicionarNumero.style.display = 'none'
        btnChamarCallback.style.display = 'inline-block'
    }

    resposta.innerHTML = `
    <p>Lista A: ${conjuntoDeArrays[0].join(' > ')}</p>
    <p>Lista B: ${conjuntoDeArrays[1].join(' > ')}</p>
   `
    inputNumero.value = ''
    inputNumero.focus()
}


// Função de alta ordem 
function aplicarCallbackEmArrays(conjuntoDeArraysPassado, callbackFiltrarPares) {
    return conjuntoDeArraysPassado.map(subarray => callbackFiltrarPares(subarray))
}


// Função de callback (filtra os números pares)
function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0)
}


function chamarCallback() {

    let resultado = aplicarCallbackEmArrays(conjuntoDeArrays, filtrarPares)

    resposta.innerHTML = `
        <p>Números pares por listas:</p>
        <p>Lista A: ${resultado[0].join(' > ')}</p>
        <p>Lista B: ${resultado[1].join(' > ')}</p>
    `
}


// Eventos dos botões (em vez de colocar "onclick" direto no HTML)
btnAdicionarNumero.addEventListener('click', adicionarNumero)
btnChamarCallback.addEventListener('click', chamarCallback)