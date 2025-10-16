/* Descrição do exercício:

Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7). 

Descrição: Neste exercício, você precisa criar um objeto que represente um cachorro. Este objeto deve ter propriedades para raça, nome e idade. Em seguida, adicione um método que converta a idade do cachorro em anos humanos (multiplique a idade do cachorro por 7).

*/

const inputNome = document.getElementById('nome')
const inputRaca = document.getElementById('raca')
const inputIdade = document.getElementById('idade')
const btnCadastrar = document.querySelector('button.btnCadastrar')
const btnNovoCadastro = document.querySelector('button.btnNovoCadastro')
const resposta = document.querySelector('div.resposta')

function cadastro() {
    if (inputNome.value.trim() === '') {
        alert('Digite o nome do cão para cadastrar.')
        inputNome.focus()
        return
    }

    if (inputRaca.value.trim() === '') {
        alert('Digite a raça do cão para cadastrar.')
        inputRaca.focus()
        return
    }

    if (inputIdade.value === '') {
        alert('Digite a idade do cão para cadastrar.')
        inputIdade.focus()
        return
    }

    const nome = inputNome.value
    const raca = inputRaca.value
    const idade = Number(inputIdade.value)

    if (idade <= 0) {
        alert('A idade do cão deve ser maior que zero.')
        inputIdade.value = ''
        inputIdade.focus()
        return
    }

    let dadosDoCao = {
        nome: nome,
        raca: raca,
        idade: idade,

        idadeConvertida() {
            return this.idade * 7
        }
    }

    resposta.innerHTML = `
        <p><strong>Cadastro realizado com sucesso!</strong></p>
        <p>Nome: ${dadosDoCao.nome}</p>
        <p>Raça: ${dadosDoCao.raca}</p>
        <p>Idade: ${dadosDoCao.idade} anos</p>
        <p>Idade convertida para humana: ${dadosDoCao.idadeConvertida()} anos</p>
    `

    inputNome.disabled = true
    inputRaca.disabled = true
    inputIdade.disabled = true

    btnCadastrar.style.display = 'none'
    btnNovoCadastro.style.display = 'inline-block'
}


function novoCadastro() {
    inputNome.disabled = false
    inputRaca.disabled = false
    inputIdade.disabled = false

    inputNome.value = ''
    inputRaca.value = ''
    inputIdade.value = ''
    inputNome.focus()

    btnCadastrar.style.display = 'inline-block'
    btnNovoCadastro.style.display = 'none'

    resposta.innerHTML = ''
}
