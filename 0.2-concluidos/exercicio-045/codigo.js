/* Descrição do exercício:

Escreva uma função que imprima "Olá, Mundo!". 

Descrição: Neste exercício, você deve escrever uma função simples que não recebe argumentos e, quando chamada, imprime a frase "Olá, Mundo!".

*/

const inputMensagem = document.getElementById('mensagem')
const btnExibirMensagem = document.querySelector('button.btnExibirMensagem')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function passarMensagem() {
    if (inputMensagem.value === '') {
        alert('Digite sua mensagem para continuar.')
        inputMensagem.focus()
        return
    }

    exibirMensagem(inputMensagem.value)
}


function exibirMensagem(mensagemDoInput) {
    resposta.innerHTML = `<p>Sua mensagem é: ${mensagemDoInput}</p>`

    inputMensagem.disabled = true

    btnExibirMensagem.style.display = 'none'
    btnNovaMensagem.style.display = 'inline-block'
}


function novaMensagem() {
    inputMensagem.disabled = false
    inputMensagem.value = ''
    inputMensagem.focus()

    btnExibirMensagem.style.display = 'inline-block'
    btnNovaMensagem.style.display = 'none'

    resposta.innerHTML = ''
}










