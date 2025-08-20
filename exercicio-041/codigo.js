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

    const numero = Number(inputNumero.value)

    do {
        let quociente = numero / 2
    }
}

