/* Descrição do exercício:

Escreva uma função que receba um número e retorne uma string repetida aquele número de vezes. 

Descrição:  Neste exercício, você deve criar uma função que receba um número como argumento e retorne uma string que é repetida aquele número de vezes.

*/

const inputRepeticao = document.getElementById('repeticao')
const inputTexto = document.getElementById('texto')
const btnPassarTexto = document.querySelector('button.btnPassarTexto')
const btnNovoTexto = document.querySelector('button.btnNovoTexto')
const resposta = document.querySelector('div.resposta')

function passarTexto() {
    if (inputRepeticao.value === '') {
        alert('Digite a quantidade de repetições que deseja.')
        inputRepeticao.focus()
        return
    }

    const repeticao = Number(inputRepeticao.value)

    if (repeticao <= 0) {
        alert('O número de repetições deve ser maior que zero.')
        inputRepeticao.value = ''
        inputRepeticao.focus()
        return
    }

    if (inputTexto.value.trim() === '') {
        alert('Digite o texto para continuar.')
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    gerarTexto(repeticao, texto)
}


function gerarTexto(repeticaoPassada, textoPassado) {

    let contador = 1

    while (contador <= repeticaoPassada) {
        resposta.innerHTML += `<p>Texto ${contador} > ${textoPassado}</p>`
        contador++
    }

    inputRepeticao.disabled = true
    inputTexto.disabled = true

    btnPassarTexto.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


function novoTexto() {
    inputRepeticao.disabled = false
    inputTexto.disabled = false

    inputRepeticao.value = ''
    inputTexto.value = ''
    inputRepeticao.focus()

    btnPassarTexto.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    resposta.innerHTML = ''
}


