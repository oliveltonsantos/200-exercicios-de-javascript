/* Descrição do exercício:

Escreva uma função que aceite um número como argumento e retorne o seu quadrado. 

Descrição: Neste exercício, você precisa escrever uma função que receba um número como argumento e retorne o quadrado desse número (ou seja, o número multiplicado por ele mesmo).

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

    potencia(numero)
}


function potencia(numeroPassado) {
    const potencia = numeroPassado * numeroPassado

    resposta.innerHTML = `<p>Potência de ${numeroPassado}<sup>${2}</sup> = ${potencia}</p>`

    inputNumero.disabled = true
    btnPassarNumero.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'

}


function novoCalculo() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnPassarNumero.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''

}


