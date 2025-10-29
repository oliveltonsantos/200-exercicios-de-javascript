/* Descrição do exercício:

Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5. 

Descrição: Você deve criar uma função que aceite dois arrays como argumento e retorne um novo array resultante da combinação dos dois, mas filtrado para conter apenas múltiplos de 5.

*/

const inputNumero = document.getElementById('numero')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnFiltrar = document.querySelector('button.btnFiltrar')
const btnNovoFiltro = document.querySelector('button.btnNovoFiltro')
const resposta = document.querySelector('div.resposta')


let listaPares = []
let listaImpares = []


function adicionarNumero() {

    const numero = Number(inputNumero.value)

    if (inputNumero.value === '') {
        alert('Digite um número.')
        inputNumero.focus()
        return
    }


    // Verifica se é par ou ímpar
    if (numero % 2 === 0) {
        if (listaPares.length < 5) {
            listaPares.push(numero)
            resposta.innerHTML = `<p>Pares: ${listaPares.join(' > ')}</p>`
        } else {
            alert('Você já adicionou 5 números pares! Agora adicione os ímpares.')
        }
    } else {
        if (listaImpares.length < 5) {
            listaImpares.push(numero)
            resposta.innerHTML = `<p>Ímpares: ${listaImpares.join(' > ')}</p>`
        } else {
            alert('Você já adicionou 5 números ímpares.')
        }
    }


    // Quando os arrays estiverem completos
    if (listaPares.length === 5 && listaImpares.length === 5) {
        resposta.innerHTML = `
            <p>Todos os números foram adicionados.</p>
            <p>Clique em <strong>"Filtrar múltiplos de 5"</strong>.</p>
        `

        inputNumero.disabled = true

        btnAdicionar.style.display = 'none'
        btnFiltrar.style.display = 'inline-block'
    }


    // Limpa o input
    inputNumero.value = ''
    inputNumero.focus()

}


function filtrarMultiplos5() {
    // Mêtodo "spread" cria um novo array combinando os dois arrays
    const arraysCombinados = [...listaPares, ...listaImpares]

    // O "filter()" percorre cada número do novo array e aplica a função de teste (múltiplos de 5)
    const numerosMultiplos5 = arraysCombinados.filter(cadaNumero => cadaNumero % 5 === 0)

    resposta.innerHTML = `<p><strong>Múltiplos de 5: ${numerosMultiplos5.join(' > ')}</strong></p>`

    btnFiltrar.style.display = 'none'
    btnNovoFiltro.style.display = 'inline-block'
}


function novoFiltro() {

    listaPares.length = 0
    listaImpares.length = 0

    inputNumero.disabled = false
    inputNumero.value = ''
    inputNumero.focus()

    btnNovoFiltro.style.display = 'none'
    btnAdicionar.style.display = 'inline-block'

    resposta.innerHTML = ''
}


// Eventos
btnAdicionar.addEventListener('click', adicionarNumero)
btnFiltrar.addEventListener('click', filtrarMultiplos5)
btnNovoFiltro.addEventListener('click', novoFiltro)
