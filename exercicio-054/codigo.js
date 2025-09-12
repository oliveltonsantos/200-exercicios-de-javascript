 /* Descrição do exercício:

Escreva uma função que ordene um array de números em ordem decrescente. 

Descrição: Neste exercício, você deve escrever uma função que receba um array de números como argumento e retorne um novo array com os números ordenados em ordem decrescente.

 */

const inputNumero = document.getElementById('numero')
const btnAdicionarNumero = document.querySelector('button.btnAdicionarNumero')
const btnPassarListaNumeros = document.querySelector('button.btnPassarListaNumeros')
const resposta = document.querySelector('div.resposta')

let listaNumeros = []

function adicionarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    listaNumeros.push(numero)

    resposta.innerHTML = `Números adicionados: ${listaNumeros.join(' > ')}`
}


function passarListaNumeros() {
    if (listaNumeros.length <= 0) {
        alert('Adicione números antes de ordenar.')
        inputNumero.focus()
        return
    }

    







}
