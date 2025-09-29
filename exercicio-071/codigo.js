 /* Descrição do exercício:

Escreva uma função que aceite uma função de callback e um número, e execute a função de callback após um certo número de milissegundos especificados pelo número. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um número como argumentos, e execute a função de callback após um certo número de milissegundos especificado pelo número. Isso é conhecido como programação assíncrona.

 */

const inputMensagem = document.getElementById('mensagem')
const inputTempo = document.getElementById('tempo')
const btnGerarMensagem = document.querySelector('button.btnGerarMensagem')
const btnNovaMensagem = document.querySelector('button.btnNovaMensagem')
const resposta = document.querySelector('div.resposta')

function chamarCallback() {
    if (inputMensagem.value === '') {
        alert('Digite uma mensagem para prosseguir.')
        inputMensagem.focus()
        return
    }

    if (inputTempo.value === '') {
        alert('Digite o tempo para prosseguir.')
        inputTempo.focus()
        return
    }

    const mensagem = inputMensagem.value
    const tempoDigitado = Number(inputTempo.value) 
    const tempoEmSegunddos = tempoDigitado * 1000

    if (tempo <= 0) {
        alert('Digite um tempo maior que zero para continuar.')
        inputTempo.value = ''
        inputTempo.focus()
        return
    }

    executarCallback(tempoEmSegunddos, mensagem)

}


// Função de alta ordem

function executarCallback(tempoPassado, mensagemPassada) {

    setTimeout(() => {
        gerarMensagem(tempoPassado, mensagemPassada)
    }, tempoPassado)


}


// Função de callback

function gerarMensagem(tempo, texto) {
    resposta.innerHTML = `
        <p>Essa mensagem se autodestruirá em ${tempoDigitado} segundos.</p>
        <p>Mensagem: ${texto}</p>
    `

    setTimeout(() => {
        resposta.innerHTML = '<p>Mensagem destruída!</p>'
    }, tempo)
}

