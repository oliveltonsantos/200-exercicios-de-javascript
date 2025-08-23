 /* Descrição do exercício:

Usando um laço for, crie um programa que transforme um número binário em decimal. 

Descrição: Neste exercício, você deve criar um programa que converte um número binário em um número decimal. 

Por exemplo, o número binário 1010 convertido em decimal é 10.

 */

const inputNumero = document.getElementById('numero')
const btnBinario = document.querySelector('button.btnBinario')
const btnNovoBinario = document.querySelector('button.btnNovoBinario')
const resposta = document.querySelector('div.resposta')

function conversaoBinario() {
    if (inputNumero.value.trim() === '') {
        alert('Digite um número para continuar.')
        inputNumero.value = ''
        inputNumero.focus()
        return
    }

    let binario = inputNumero.value
    let arrayBinario = binario.split('')
    let totalAnterior = 0

    for (let contador = 0; contador < arrayBinario.length; contador++) {
        // O método utilizado na conversão chama-se "método da duplicação"
        calculoDuplicacao = (totalAnterior * 2) + Number(arrayBinario[contador])
        totalAnterior = calculoDuplicacao
    }

    resposta.innerHTML += `<p>Número binário: ${binario} > Número decimal: ${calculoDuplicacao}</p>`

    btnBinario.style.display = 'none'
    btnNovoBinario.style.display = 'inline-block'
}

function novoBinario() {
    inputNumero.value = ''
    inputNumero.focus()

    btnBinario.style.display = 'inline-block'
    btnNovoBinario.style.display = 'none'

    resposta.innerHTML = ''
}




