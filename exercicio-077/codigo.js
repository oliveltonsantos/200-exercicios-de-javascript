/* Descrição do exercício:

Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro. 

Descrição: Neste exercício, você vai criar um objeto que represente um livro. O objeto deve ter propriedades para o título, autor e número de páginas. Além disso, o objeto deve ter um método que imprima uma descrição do livro.

*/

const inputNome = document.getElementById('nome')
const inputAutor = document.getElementById('autor')
const inputPaginas = document.getElementById('paginas')
const btnAdicionarLivro = document.querySelector('button.btnAdicionarLivro')
const btnAdicionarNovoLivro = document.querySelector('button.btnAdicionarNovoLivro')
const resposta = document.querySelector('div.resposta')

function adicionarLivro() {
    if (inputNome.value.trim() === '') {
        alert('Digite o nome do livro para adicionar.')
        inputNome.focus()
        return
    }

    if (inputAutor.value.trim() === '') {
        alert('Digite o nome do autor para adicionar.')
        inputAutor.focus()
        return
    }

    const nome = inputNome.value
    const autor = inputAutor.value
    const paginas = Number(inputPaginas.value)

    let dadosDoLivro = {
        nome: nome,
        autor: autor,
        paginas: paginas,

        // método do objeto
        mensagemLivroAdicionado() {
            return `
                 <p><strong>Livro adicionado!</strong></p>
                <p>Nome: ${this.nome}</p>
                <p>Autor: ${this.autor}</p>
                <p>Páginas: ${this.paginas}</p>
            `
        }
    }

    inputNome.disabled = true
    inputAutor.disabled = true
    inputPaginas.disabled = true

    btnAdicionarLivro.style.display = 'none'
    btnAdicionarNovoLivro.style.display = 'inline-block'

    resposta.innerHTML = `${dadosDoLivro.mensagemLivroAdicionado()}`
}


function adicionarNovoLivro() {
    inputNome.disabled = false
    inputAutor.disabled = false
    inputPaginas.disabled = false

    inputNome.value = ''
    inputAutor.value = ''
    inputPaginas.value = ''
    inputNome.focus()

    btnAdicionarLivro.style.display = 'inline-block'
    btnAdicionarNovoLivro.style.display = 'none'

    resposta.innerHTML = ''
}
