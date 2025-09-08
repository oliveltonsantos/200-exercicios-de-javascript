/* Descrição do exercício:

Usando um laço for, imprima a tabuada de multiplicação do número 5. 

Descrição: Neste exercício, você deve criar um loop usando a estrutura de repetição for que percorra de 1 a 10 e imprima a tabuada de multiplicação do número 5.

*/

const inputNumero = document.getElementById('numero')
const btnCalculo = document.querySelector('button.btnCalculo')
const btnNovoCalculo = document.querySelector('button.btnNovoCalculo')
const resposta = document.querySelector('div.resposta')

function calcularTabuada() {
    if (inputNumero.value === '') {
        alert('Digite um número para calcular.')
        inputNumero.focus()
        return
    }

    const numero = Number(inputNumero.value)

    for (let contador = 0; contador <= 10; contador++) {
        let calculo = contador * numero
        resposta.innerHTML += `<p>${numero} x ${contador} = ${calculo}</p>`
    }

    btnCalculo.style.display = 'none'
    btnNovoCalculo.style.display = 'inline-block'
}

function novoCalculo() {
    inputNumero.value = ''
    inputNumero.focus()

    btnCalculo.style.display = 'inline-block'
    btnNovoCalculo.style.display = 'none'

    resposta.innerHTML = ''
}




