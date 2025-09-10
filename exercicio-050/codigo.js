/* Descrição do exercício:

Escreva uma função que aceite uma string como argumento e retorne a string invertida. 
 
Descrição: Neste exercício, você precisa escrever uma função que receba uma string como argumento e retorne a string com seus caracteres na ordem inversa.

*/

const inputTexto = document.getElementById('texto')
const btnPassarTexto = document.querySelector('button.btnPassarTexto')
const btnNovoTexto = document.querySelector('button.btnNovoTexto')
const resposta = document.querySelector('div.resposta')

function passarTexto() {
    if (inputTexto.value.trim() === '') {
        alert('Digite uma palavra ou frase para continuar.')
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    inverterTexto(texto)

}


function inverterTexto(textoPassado) {
    let textoInvertido = ''

    // O "i = textoPassado.length - 1" serve para iniciar no último índice do texto
    for (let i = textoPassado.length - 1; i >= 0; i--) {
        textoInvertido += textoPassado[i]
    }

    resposta.innerHTML = `<p>Inversão: ${textoPassado} > ${textoInvertido}<p>`

    inputTexto.disabled = true

    btnPassarTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function novoTexto() {
    inputTexto.disabled = false
    inputTexto.value = ''
    inputTexto.focus()

    btnPassarTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    resposta.innerHTML = ''
}


