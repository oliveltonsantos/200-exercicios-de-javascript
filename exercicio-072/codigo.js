 /* Descrição do exercício:

Escreva uma função que aceite um número, um array de funções de callback e um valor inicial, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba um número, um array de funções de callback e um valor inicial como argumentos, e retorne o resultado final após a aplicação de todas as funções de callback no valor inicial, o número de vezes especificado.

 */

const inputHabitantes = document.getElementById('habitantes')
const inputAnos = document.getElementById('anos')
const btnCallback = document.querySelector('button.btnCallback')
const btnNovaSimulacao = document.querySelector('button.btnNovaSimulacao')
const resposta = document.querySelector('div.resposta')

function chamarCallback() {
    if (inputHabitantes.value === '') {
        alert('Digite a quantidade de habitantes para continuar.')
        inputHabitantes.focus()
        return
    } 

    if (inputAnos.value === '') {
        alert('Digite quantos anos para fazer a simulação.')
        inputAnos.focus()
        return
    }


const habitantes = Number(inputHabitantes.value)

    if (habitantes <= 0) {
        alert('Não são aceitos valores menores que zero no campo "HABITANTES".')
        inputHabitantes.value = ''
        inputHabitantes.focus()
        return
    }
    
    const anos = Number(inputAnos.value)

    



    






}

