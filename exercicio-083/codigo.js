/* Descrição do exercício:

Crie um objeto "tempo" que possui propriedades para horas, minutos e segundos, e um método para converter o tempo para segundos.

Descrição: Neste exercício, você precisa criar um objeto que represente um tempo. O tempo deve ter propriedades para horas, minutos e segundos. Em seguida, adicione um método ao objeto que converta o tempo para segundos.

*/

const inputHoras = document.getElementById('horas')
const inputMinutos = document.getElementById('minutos')
const inputSegundos = document.getElementById('segundos')
const todosInputs = document.querySelectorAll('.todosInputs')
const btnConverterTempo = document.querySelector('button.btnConverterTempo')
const btnNovaConversão = document.querySelector('button.btnNovaConversão')
const resposta = document.querySelector('div.resposta')


function converterTempo() {
    for (const cadaInput of todosInputs) {

        // Verifica se todos campos foram preenchidos
        if (cadaInput.value === '') {
            alert('Preencha todos os campos para converter.')
            cadaInput.focus()
            return
        }


        // Verifica se não foi digitado valores negativos
        const tempoDigitado = Number(cadaInput.value)

        if (tempoDigitado < 0) {
            alert('Não são aceitos valores negativos.')
            cadaInput.value = ''
            cadaInput.focus()
            return
        }
    }


    const horas = Number(inputHoras.value)
    const minutos = Number(inputMinutos.value)
    const segundos = Number(inputSegundos.value)


    let tempo = {
        horas: horas,
        minutos: minutos,
        segundos: segundos,

        // Mêtodo do objeto
        converterParaSegundos() {
            return (this.horas * 3600) + (this.minutos * 60) + this.segundos
        }
    }


    resposta.innerHTML = `
        <p>Dados informados:</p>
        <p>Hora(s): ${tempo.horas}</p>
        <p>Minuto(s): ${tempo.minutos}
        <p>Segundo(s): ${tempo.segundos}</p>
        <p>-----------------------------------------------------</p>
        <p>Conversão: ${tempo.converterParaSegundos()} segundos.</p>
    `


    // Desabilita todos os campos
    for (const cadaInput of todosInputs) {
        cadaInput.disabled = true
    }


    btnConverterTempo.style.display = 'none'
    btnNovaConversão.style.display = 'inline-block'
}


function novaConversao() {
    for (const cadaInput of todosInputs) {
        cadaInput.disabled = false
        cadaInput.value = ''
    }

    inputHoras.focus()

    resposta.innerHTML = ''

    btnConverterTempo.style.display = 'inline-block'
    btnNovaConversão.style.display = 'none'
}


// Eventos
btnConverterTempo.addEventListener('click', converterTempo)
btnNovaConversão.addEventListener('click', novaConversao)

