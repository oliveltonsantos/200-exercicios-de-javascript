/* Descrição do exercício:

Usando um laço while, calcule e imprima a soma de todos os números de 1 a 100.

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição while que percorra de 1 a 100 e calcule a soma de todos esses números.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnSomar = document.querySelector('button.btnSomar')
const btnNovaSoma = document.querySelector('button.btnNovaSoma')
const resposta = document.querySelector('div.resposta')

function somar() {
    if (inputInicial.value === '') {
        alert('Digite o valor inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite o valor final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)
    const final = Number(inputFinal.value)

    let contador = inicial
    let soma = 0

    while (contador <= final) {
        soma += contador
        contador++
    }

    resposta.innerHTML = `<p>Soma total: ${soma}</p>`

    btnSomar.style.display = 'none'
    btnNovaSoma.style.display = 'inline-block'
}

function novaSoma() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnSomar.style.display = 'inline-block'
    btnNovaSoma.style.display = 'none'

    resposta.innerHTML = ''
}