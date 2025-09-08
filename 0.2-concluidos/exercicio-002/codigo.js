/* Descrição do exercício:

Declare uma constante chamada "PI", atribua o valor de Pi a ela e imprima o valor na console.

*/

const PI = 3.14159

const inputPI = document.getElementById('valorPI')
const resposta = document.querySelector('div.resposta')

function respostaPi() {
    const valorPIDigitado = inputPI.value
    const valorPI = Number(valorPIDigitado)

    if (valorPIDigitado === '') {
        alert('Insira um valor antes de enviar.')
        inputPI.focus()
        return
    }

    if (valorPI <= 0 || isNaN(valorPI)) {
        alert('Insira um valor válido ou maior que zero.')
        inputPI.value = ''
        inputPI.focus()
        return
    }

    if (valorPI === PI) {
        resposta.innerHTML = `<p>Você acertou! O valor de PI é igual a ${PI}</p>`
    } else {
        resposta.innerHTML = `<p>Você errou. O valor de PI é igual a ${PI}</p>`
    }
}







