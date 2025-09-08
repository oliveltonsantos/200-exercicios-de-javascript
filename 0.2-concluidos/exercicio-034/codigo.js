/* Descrição do exercício:

Neste exercício, você precisa imprimir os números de 1 a 100 usando um laço while, mas com uma condição especial:

- Se um número for múltiplo de 3, deve imprimir "Fizz" em vez do número.
- Se for múltiplo de 5, deve imprimir "Buzz".
- E se for múltiplo de ambos (3 e 5), deve imprimir "FizzBuzz" (Problema FizzBuzz)
 
*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnAnalisarNumeros = document.querySelector('button.btnAnalisarNumeros')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisarNumeros() {
    if (inputInicial.value === '') {
        alert('Digite o número inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite o número final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)
    const final = Number(inputFinal.value)

    let contador = inicial

    let resultado = ''

    while (contador <= final) {

        if (contador % 3 === 0 && contador % 5 === 0) {
            resultado += 'FizzBuzz > '
        } else if (contador % 3 === 0) {
            resultado += 'Fizz > '
        } else if (contador % 5 === 0) {
            resultado += 'Buzz > '
        } else {
            resultado += `${contador} > `
        }
        contador++
    }

    resposta.innerHTML = `<p>${resultado} ACABOU!</p>`

    btnAnalisarNumeros.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'

}

function novaAnalise() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnAnalisarNumeros.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}


