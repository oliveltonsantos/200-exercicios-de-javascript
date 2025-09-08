/* Descrição do exercício:

Usando um laço for, imprima os números de 1 a 10. 

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição for que percorra de 1 a 10 e imprima cada número no console.

*/

const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const btnContar = document.querySelector('button.btnContar')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function contarNumeros() {
    if (inputInicio.value === '') {
        alert('Insira o valor do número inicial para continuar.')
        inputInicio.focus()
        return
    }

    if (inputFim.value === '') {
        alert('Insira o valor do número final para continuar.')
        inputFim.focus()
        return
    }

    const inicio = Number(inputInicio.value)
    const fim = Number(inputFim.value)

    if (inicio > fim) {
        for (let contador = inicio; contador >= fim; contador--) {
            resposta.innerHTML += `${contador} > `
        }
    } else {
        for (let contador = inicio; contador <= fim; contador++) {
            resposta.innerHTML += `${contador} > `
        }
    }

    resposta.innerHTML += 'ACABOU!'

    btnContar.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'

}

function novaContagem() {
    inputInicio.value = ''
    inputFim.value = ''
    inputInicio.focus()

    btnContar.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}

