/* Descrição do exercício:

Escreva uma função que aceite um número e uma função de callback, e execute a função de callback o número de vezes especificado. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número e uma função de callback como argumentos, e execute a função de callback o número de vezes especificado.

*/

const inputMensagem = document.getElementById('mensagem')
const inputRepeticao = document.getElementById('repeticao')
const btnGerarMensagem = document.querySelector('button.btnGerarMensagem')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function chamarCallback() {
    if (inputMensagem.value.trim() === '') {
        alert('Digite uma mensagem para ser gerada.')
        inputMensagem.focus()
        return
    }

    if (inputRepeticao.value === '') {
        alert('Digite a quantidade de repetições.')
        inputRepeticao.focus()
        return
    }

    const mensagem = inputMensagem.value
    const repeticao = Number(inputRepeticao.value)

    if (repeticao <= 0) {
        alert('Digite valores maiores que zero em "Repetições".')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    executarCallback(repeticao, () => gerarRepeticoes(mensagem))

    inputMensagem.disabled = true
    inputRepeticao.disabled = true

    btnGerarMensagem.style.display = 'none'
    btnNovaMensagem.style.display = 'inline-block'
}


// Função de alta ordem
function executarCallback(repeticaoPassada, callbackRepeticoes) {
    for (let i = 0; i < repeticaoPassada; i++) {
        callbackRepeticoes(i)
    }
}


// Função de callback
function gerarRepeticoes(mensagemPassada) {
    resposta.innerHTML += `<p>${mensagemPassada}</p>`
}


function novaMensagem() {
    inputMensagem.disabled = false
    inputRepeticao.disabled = false

    inputMensagem.value = ''
    inputRepeticao.value = ''
    inputMensagem.focus()

    btnGerarMensagem.style.display = 'inline-block'
    btnNovaMensagem.style.display = 'none'

    resposta.innerHTML = ''
}