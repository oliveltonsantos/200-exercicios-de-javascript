/* Descrição do exercício:

Escreva uma função de alta ordem que aceite um array de funções de callback e um valor, e retorne um array de resultados de aplicar cada função de callback ao valor. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um array de funções de callback e um valor como argumentos, e retorne um array que contenha os resultados de aplicar cada função de callback ao valor.

*/

const inputTexto = document.getElementById('texto')
const btnTransformar = document.querySelector('button.btnTransformar')
const btnNovoTexto = document.querySelector('button.btnNovoTexto')
const resposta = document.querySelector('div.resposta')

function transformarTexto() {
    if (inputTexto.value.trim() === '') {
        alert('Digite um texto para processar.')
        inputTexto.focus()
        return
    }

    const texto = inputTexto.value

    let resultado = texto

    callbacks.forEach(callback => {
        resultado = callback(resultado) // Encadeamento das funções de callback
    })

    resposta.innerHTML = `<p>${resultado}</p>`

    inputTexto.disabled = true

    btnTransformar.style.display = 'none'
    btnNovoTexto.style.display = 'inline-block'
}


// Array de funções de callback
const callbacks = [textoMaiusculo, textoInvertido, textoSemEspacos]


// Funções de callback
function textoMaiusculo(textoPassado) {
    return textoPassado.toUpperCase()
}

function textoInvertido(textoPassado) {
    return textoPassado.split('').reverse().join('')
}

function textoSemEspacos(textoPassado) {
    // Essa função varre a string e remove todos os espaços em branco ("/\s+/g" é uma expressão regular), deixando o texto colado.
    return textoPassado.replace(/\s+/g, '')
}


function novoTexto() {
    inputTexto.disabled = false
    inputTexto.value = ''
    inputTexto.focus()

    btnTransformar.style.display = 'inline-block'
    btnNovoTexto.style.display = 'none'

    resposta.innerHTML = ''
}