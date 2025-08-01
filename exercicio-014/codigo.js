/* Descrição do exercício:

Escreva um programa que verifica se um ano é bissexto. 
 
Descrição: Nesse exercício, você vai criar uma função que recebe um ano e verifica se ele é bissexto. 
 
Um ano é bissexto se for divisível por 4, exceto os que são divisíveis por 100 mas não por 400.

*/

const inputAno = document.getElementById('ano')
const btnVerificar = document.querySelector('button.btnVerificar')
const btnNovoAno = document.querySelector('button.btnNovoAno')
const resposta = document.querySelector('div.resposta')

function verificarAno() {
    if (inputAno.value === '') {
        alert('Insira um ano para verificar.')
        inputAno.focus()
        return
    }

    const ano = Number(inputAno.value)

    if (ano <= 0) {
        alert('São aceitos apenas valores maiores que zero.')
        inputAno.value = ''
        inputAno.focus()
        return
    }

    let resultado = ''

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        resultado = 'Ano bissexto'
    } else {
        resultado = 'Não é bissexto'
    }

    resposta.innerHTML = `<p>Ano: ${ano} > ${resultado}</p>`

    btnVerificar.style.display = 'none'
    btnNovoAno.style.display = 'inline-block'

}

function verificarNovoAno() {
    inputAno.value = ''
    inputAno.focus()

    btnVerificar.style.display = 'inline-block'
    btnNovoAno.style.display = 'none'

    resposta.innerHTML = ''
}




