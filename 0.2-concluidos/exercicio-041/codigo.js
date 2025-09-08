/* Descrição do exercício:

Usando um laço do-while, crie um programa que transforme um número decimal em binário.

Descrição: Neste exercício, você precisa criar um programa que transforma um número decimal em um número binário. 

Por exemplo, o número decimal 10 transformado em binário é 1010.

*/

const inputNumero = document.getElementById('numero')
const btnConversaoBinario = document.querySelector('button.btnConversaoBinario')
const btnNovaConversao = document.querySelector('button.btnNovaConversao')
const resposta = document.querySelector('div.resposta')

function conversaoBinario() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numeroOriginal = Number(inputNumero.value)

    let numeroCopia = numeroOriginal

    let listaBinario = []

    do {
        let restoDivisao = numeroCopia % 2
        listaBinario.push(restoDivisao)
        numeroCopia = Math.floor(numeroCopia / 2)
    } while (numeroCopia > 0)

    resposta.innerHTML = `<p>${numeroOriginal} = ${listaBinario.reverse().join('')}</p>`

    btnConversaoBinario.style.display = 'none'
    btnNovaConversao.style.display = 'inline-block'
}

function novaConversao() {
    inputNumero.value = ''
    inputNumero.focus()

    btnConversaoBinario.style.display = 'inline-block'
    btnNovaConversao.style.display = 'none'

    resposta.innerHTML = ''
}





