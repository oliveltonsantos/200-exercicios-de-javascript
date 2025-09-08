/* Descrição do exercício:

Escreva uma função que aceite dois números como argumentos e retorne sua soma. 
 
Descrição: Você deve escrever uma função que receba dois números como argumentos e retorne a soma desses números.

*/

const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const btnPassarNumeros = document.querySelector('button.btnPassarNumeros')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')


function passarNumeros() {
    if (inputNumero1.value === '') {
        alert('Digite o número 1 para continuar.')
        inputNumero1.focus()
        return
    } else if (inputNumero2.value === '') {
        alert('Digite o número 2 para continuar.')
        inputNumero2.focus()
        return
    }

    const numero1 = Number(inputNumero1.value)
    const numero2 = Number(inputNumero2.value)

    somarNumeros(numero1, numero2)

}


function somarNumeros(numero1Passado, numero2Passado) {
    const soma = numero1Passado + numero2Passado

    resposta.innerHTML = `<p>Soma: ${numero1Passado} + ${numero2Passado} = ${soma}</p>`

    inputNumero1.disabled = true
    inputNumero2.disabled = true

    btnPassarNumeros.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'

}


function novaSoma() {
    inputNumero1.disabled = false
    inputNumero2.disabled = false
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero1.focus()

    btnPassarNumeros.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}

