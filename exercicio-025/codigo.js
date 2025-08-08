/* Descrição do exercício:

Usando um laço while, imprima os números de 10 a 1 (em ordem decrescente). 

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição while que percorra de 10 a 1 (em ordem decrescente) e imprima cada número no console.

*/

const inputFinal = document.getElementById('final')
const inputInicial = document.getElementById('inicial')
const btnContar = document.querySelector('button.btnContar')
const btnNovaContagem = document.querySelector('button.btnNovaContagem')
const resposta = document.querySelector('div.resposta')

function contarNumeros() {
    if (inputFinal.value === '') {
        alert('Insira o número final  para continuar.')
        inputFinal.focus()
        return
    }

    const final = Number(inputFinal.value)

    if (final <= 0) {
        alert('Para o número final não são aceitos valores menores que zero.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    if (inputInicial.value === '') {
        alert('Insira o número inicial para continuar.')
        inputInicial.focus()
        return
    }


    const inicial = Number(inputInicial.value)

    if (inicial > final) {
        alert('O número inicial deve ser menor que o número final.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    let contador = final

    while (contador >= inicial) {
        resposta.innerHTML += `${contador} > `
        contador--
    }

    resposta.innerHTML += 'ACABOU!'

    btnContar.style.display = 'none'
    btnNovaContagem.style.display = 'inline-block'
}

function novaContagem() {
    inputFinal.value = ''
    inputInicial.value = ''
    inputFinal.focus()

    btnContar.style.display = 'inline-block'
    btnNovaContagem.style.display = 'none'

    resposta.innerHTML = ''
}


