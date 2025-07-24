/* Descrição do exercício:

Declare uma variável chamada "númeroMáximo", atribua a ela o valor máximo que um número pode ter em JavaScript e imprima o valor na console.

*/

const numeroMaximo = Number.MAX_SAFE_INTEGER

const inputValor = document.getElementById('valor')
const resposta = document.querySelector('div.resposta')

function resultado() {
    const valorDigitado = inputValor.value
    const valor = Number(valorDigitado)

    if (valorDigitado === '') {
        alert('Digite um valor antes de enviar.')
        inputValor.focus()
        return
    }

    if (valor <= 0 || isNaN(valor)) {
        alert('Digite um valor válido ou maior que zero.')
        inputValor.value = ''
        inputValor.focus()
        return
    }

    if (valor === numeroMaximo) {
        resposta.innerHTML = `<p>Você acertou! O valor máximo é igual a ${numeroMaximo}</p>`
    } else {
        resposta.innerHTML = `<p>Você errou. O valor máximo é igual a ${numeroMaximo}</p>`
    }
}

