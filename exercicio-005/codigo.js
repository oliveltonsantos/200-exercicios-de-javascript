/* Descrição do exercício:

Declare duas variáveis e atribua valores numéricos a elas. Use o operador de adição para realizar operações entre as duas variáveis. Imprima o resultado.

*/

const inputNumero1 = document.getElementById('numero1')
const inputNumero2 = document.getElementById('numero2')
const btnSomar = document.querySelector('button.btnSomar')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function somarNumeros() {
    const numero1Digitado = inputNumero1.value
    const numero1 = Number(numero1Digitado)

    if (numero1Digitado === '') {
        alert('Digite o primeiro valor.')
        inputNumero1.focus()
        return
    }

    if (isNaN(numero1)) {
        alert('Digite um número válido.')
        inputNumero1.value = ''
        inputNumero1.focus()
        return
    }

    const numero2Digitado = inputNumero2.value
    const numero2 = Number(numero2Digitado)

    if (numero2Digitado === '') {
        alert('Digite o segundo valor.')
        inputNumero2.focus()
        return
    }

    if (isNaN(numero2)) {
        alert('Digite um número válido.')
        inputNumero2.value = ''
        inputNumero2.focus()
        return
    }

    const soma = numero1 + numero2

    resposta.innerHTML = `<p>Soma de ${numero1} + ${numero2}  = ${soma}</p>`

    btnSomar.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'

}

function novaSoma() {
    inputNumero1.value = ''
    inputNumero2.value = ''
    inputNumero1.focus()

    btnSomar.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}




