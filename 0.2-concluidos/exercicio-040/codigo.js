/* Descrição do exercício:

Usando um laço while, crie um programa que inverta uma string. 

Descrição: Neste exercício, você precisa criar um programa que inverte uma string. Por exemplo, a string "Hello" invertida se torna "olleH".

*/

const inputPalavra = document.getElementById('palavra')
const btnInverterPalavra = document.querySelector('button.btnInverterPalavra')
const btnNovaPalavra = document.querySelector('button.btnNovaPalavra')
const resposta = document.querySelector('div.resposta')

function inverterPalavra() {
    if (inputPalavra.value.trim() === '') {
        alert('Digite uma palavra para continuar.')
        inputPalavra.value = ''
        inputPalavra.focus()
        return
    }

    const palavra = inputPalavra.value

    let contador = palavra.length - 1
    let palavraInvertida = ''

    while (contador >= 0) {
        palavraInvertida += palavra[contador]
        contador--
    }

    resposta.innerHTML = `<p>Palavra invertida: ${palavraInvertida}</p>`

    btnInverterPalavra.style.display = 'none'
    btnNovaPalavra.style.display = 'inline-block'
}

function novaPalavra() {
    inputPalavra.value = ''
    inputPalavra.focus()

    btnInverterPalavra.style.display = 'inline-block'
    btnNovaPalavra.style.display = 'none'

    resposta.innerHTML = ''
}
