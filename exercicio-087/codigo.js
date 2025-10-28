/* Descrição do exercício:

Dado dois arrays, um com vários números pares e outro com números ímpares, combine-os e, em seguida, filtre apenas os números que são múltiplos de 5. 

Descrição: Você deve criar uma função que aceite dois arrays como argumento e retorne um novo array resultante da combinação dos dois, mas filtrado para conter apenas múltiplos de 5.

*/

const inputPar = document.getElementById('par')
const inputImpar = document.getElementById('impar')
const parDesaparece = document.querySelector('p.parDesaparece')
const imparAparece = document.querySelector('p.imparAparece')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnFiltrar = document.querySelector('button.btnFiltrar')
const resposta = document.querySelector('div.resposta')

let listaPares = []
let listaImpares = []


function adicionarNumero() {

    const par = Number(inputPar.value)
    const impar = Number(inputImpar.value)


    if (inputPar.value === '') {
        alert('Digite um número par para adicionar.')
        inputPar.focus()
        return
    }



    if (listaPares.length < 5) {
        listaPares.push(par)
        resposta.innerHTML = `<p>Pares adicionados: ${listaPares.join(' > ')}<p>`
    } else {
        alert('Agora adicione 5 números ímpares.')
        parDesaparece.style.display = 'none'
        imparAparece.style.display = 'inline-block'
        inputImpar.focus()
        resposta.innerHTML = ''

        if (listaImpares.length < 5) {
            listaImpares.push(impar)
            resposta.innerHTML = `<p>Pares adicionados: ${listaImpares.join(' > ')}<p>`
        }
    }


}





// Eventos
btnAdicionar.addEventListener('click', adicionarNumero)
//btnFiltrar.addEventListener('click', filtrarMultiplos5)

