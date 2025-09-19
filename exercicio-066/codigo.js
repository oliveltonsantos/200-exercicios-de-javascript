/* Descrição do exercício:

Escreva uma função que aceite uma função de callback que retorne verdadeiro ou falso e um array, e retorne um novo array que contém apenas os elementos para os quais a função de callback retornou verdadeiro. 

Descrição: Neste exercício, você deve criar uma função de alta ordem que receba uma função de callback e um array como argumentos, e retorne um novo array que contenha apenas os elementos para os quais a função de callback retornou verdadeiro.

*/

const inputIdade = document.getElementById('idade')
const btnAdicionarIdade = document.querySelector('button.btnAdicionarIdade')
const btnChamarCallback = document.querySelector('button.btnChamarCallback')
const btnNovaVerificacao = document.querySelector('button.btnNovaVerificacao')
const resposta = document.querySelector('div.resposta')

let listaIdades = []

function adicionarIdades() {
    if (inputIdade.value === '') {
        alert('Digite uma idade para adicionar.')
        inputIdade.focus()
        return
    }

    const idade = Number(inputIdade.value)

    listaIdades.push(idade)

    resposta.innerHTML = `<p>Idades adicionadas: ${listaIdades.join(' > ')}</p>`

    inputIdade.value = ''
    inputIdade.focus()
}


// Função de alta ordem que filtra com base em um callback
function filtroMaioresDeIdade(listaIdadesPassadas, callbackVerificacaoIdades) {

    let listaMaioresDeIdade = []

    for (let i = 0; i < listaIdadesPassadas.length; i++) {
        // Se a callback "verificacaoIdades" retornar true (igual ou maior 18 anos ), adiciona a idade no array "listaMaioresDeIdade"
        if (callbackVerificacaoIdades(listaIdadesPassadas[i])) {
            listaMaioresDeIdade.push(listaIdadesPassadas[i])
        }
    }

    return listaMaioresDeIdade
}


// Callback que verifica idades iguais ou maiores que 18
function verificacaoIdades(idade) {
    return idade >= 18
}


function chamarCallback() {
    if (listaIdades.length === 0) {
        alert('Adicione idades a lista antes de verificar.')
        inputIdade.focus()
        return
    }

    // Aplicação da função de alta ordem
    let maioresDeIdade = filtroMaioresDeIdade(listaIdades, verificacaoIdades)

    resposta.innerHTML += `<p>Maiores de idade: ${maioresDeIdade.join(' > ')}</p>`
}


// Eventos dos botões (em vez de colocar "onclick" direto no HTML)
btnAdicionarIdade.addEventListener('click', adicionarIdades)
btnChamarCallback.addEventListener('click', chamarCallback)

