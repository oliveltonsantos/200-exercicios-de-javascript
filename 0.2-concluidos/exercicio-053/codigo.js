/* Descrição do exercício:

Escreva uma função que verifique se um número é primo. 

Descrição: Um número é primo se for maior do que 1 e tiver apenas dois divisores distintos: 1 e ele mesmo. 

Neste exercício, você deve escrever uma função que recebe um número e retorna true se o número for primo e false caso contrário.

*/

const inputNumero = document.getElementById('numero')
const btnPassarNumero = document.querySelector('button.btnPassarNumero')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

function passarNumero() {
    if (inputNumero.value === '') {
        alert('Digite um número para continuar.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    verificarNumero(numero)
}


function verificarNumero(numeroPassado) {

    let resultado = `${numeroPassado} é primo.`

    if (numeroPassado <= 1) {
        resultado = `${numeroPassado} não é primo.`
    }

    /*
        O i começa em 2 porque estamos procurando divisores de "numeroPassado" que não sejam triviais.

        Razão:
            - Todo número é divisível por 1 e por ele mesmo (numeroPassado).
            - Isso não prova nada, porque qualquer número natural maior que 1 vai passar nesse teste.
            - O que diferencia um primo de um composto é se ele tem outros divisores além de 1 e dele mesmo.
            - Por isso, o laço só precisa testar a partir do 2 e termina um número antes do dado (i < numeroPassado).
    */

    for (let i = 2; i < numeroPassado; i++) {
        if (numeroPassado % i === 0) {
            resultado = `${numeroPassado} não é primo.`
        }
    }

    resposta.innerHTML = `<p>${resultado}</p>`

    inputNumero.disabled = true

    btnPassarNumero.style.display = 'none'
    btnNovaVerificacao.style.display = 'inline-block'
}


function novaVerificacao() {
    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnPassarNumero.style.display = 'inline-block'
    btnNovaVerificacao.style.display = 'none'

    resposta.innerHTML = ''
}





