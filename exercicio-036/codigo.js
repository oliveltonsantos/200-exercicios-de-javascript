/* Descrição do exercício:

Usando um laço for, imprima todos os números perfeitos de 1 a 100 (um número é perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número).

Descrição:  Neste exercício, você deve imprimir todos os números perfeitos de 1 a 100. 

Um número é considerado perfeito se a soma de seus divisores, incluindo 1 mas não ele mesmo, é igual ao próprio número. 

Por exemplo, o número 6 é perfeito, porque seus divisores são 1, 2 e 3, e 1 + 2 + 3 = 6.

*/

const inputInicial = document.getElementById('inicial')
const inputFinal = document.getElementById('final')
const btnAnalisar = document.querySelector('button.btnAnalisar')
const btnNovaAnalise = document.querySelector('button.btnNovaAnalise')
const resposta = document.querySelector('div.resposta')

function analisarNumeros() {
    if (inputInicial.value === '') {
        alert('Digite o número inicial para continuar.')
        inputInicial.focus()
        return
    }

    if (inputFinal.value === '') {
        alert('Digite o número final para continuar.')
        inputFinal.focus()
        return
    }

    const inicial = Number(inputInicial.value)

    if (inicial <= 0) {
        alert('Não são aceitos valores menores ou iguais a zero.')
        inputInicial.value = ''
        inputInicial.focus()
        return
    }

    const final = Number(inputFinal.value)

    if (final <= 0) {
        alert('Não são aceitos valores menores ou iguais a zero.')
        inputFinal.value = ''
        inputFinal.focus()
        return
    }

    let resultado = ''

    for (let numero = inicial; numero <= final; numero++) {

        let soma = 0

        for (let divisor = 1; divisor < numero; divisor++) {
            if (numero % divisor === 0) {
                soma += divisor
            }
        }

        if (soma === numero) {
            resultado += `${numero} > `
        }
    }

    resposta.innerHTML += `<p>Números perfeitos: ${resultado} ACABOU!</p>`

    btnAnalisar.style.display = 'none'
    btnNovaAnalise.style.display = 'inline-block'
}

function novaAnalise() {
    inputInicial.value = ''
    inputFinal.value = ''
    inputInicial.focus()

    btnAnalisar.style.display = 'inline-block'
    btnNovaAnalise.style.display = 'none'

    resposta.innerHTML = ''
}
