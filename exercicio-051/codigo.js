/* Descrição do exercício:

Escreva uma função que calcule o fatorial de um número. 

Descrição: O fatorial de um número é o produto de todos os números inteiros positivos de 1 até o número. 

Por exemplo, o fatorial de 5 é 5*4*3*2*1 = 120. Neste exercício, você deve criar uma função que calcule o fatorial de um número.

*/

const inputNumero = document.getElementById('numero')
const btnPassarNumero = document.querySelector('button.btnPassarNumero')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function passarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    if (numero <= -1) {
        alert('Não existe fatorial para números negativos. Por favor, digite um número inteiro e positivo.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    calcularFatorial(numero)
}


function calcularFatorial(numeroPassado) {

    let fatorialNumero = 1

    for (let i = 1; i <= numeroPassado; i++) {
        fatorialNumero = fatorialNumero * i
    }

    resposta.innerHTML = `<p>${numeroPassado}! = ${fatorialNumero}</p>`

    btnPassarNumero.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}


function novoCalculo() {
    inputNumero.value = ''
    inputNumero.focus()

    btnPassarNumero.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}
