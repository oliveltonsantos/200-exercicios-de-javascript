/* Descrição do exercício:

Usando um laço do-while, imprima a soma dos cubos dos primeiros 10 números naturais. 

Descrição: Neste exercício, você deve calcular e imprimir a soma dos cubos dos primeiros 10 números naturais. 

Os números naturais são os números positivos começando em 1, então os primeiros 10 números naturais são 1, 2, 3, ..., 10, e os seus cubos são 1, 8, 27, ..., 1000.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnSomarCubos = document.querySelector('button.btnSomarCubos')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function somarCubos() {
    if (inputInicial.value === '') {
        alert('Digite o número inicial para continuar.')
        inputInicial.focus()
        return
    }

    const inicial = Number(inputInicial.value)

    if (inicial <= 0) {
        alert('Não são aceitos números menores ou iguais a zero.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite o número final para continuar.')
        inputFinal.focus()
        return
    }

    const final = Number(inputFinal.value)

    if (final <= 0 || final <= inicial) {
        alert('Não são aceitos números menores que zero ou iguais ao valor inicial.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    let numero = inicial
    let soma = 0

    do {
        let numeroCubo = numero ** 3
        soma += numeroCubo
        numero++
    } while (numero <= final)

    resposta.innerHTML = `<p>Soma total: ${soma}</p>`

    btnSomarCubos.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}

function novaSoma() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnSomarCubos.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}




