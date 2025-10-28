/* Descrição do exercício:

Crie um objeto "livro" que possui propriedades para o título, autor e número de páginas, e um método para exibir o livro na console. 
 
Descrição:  Neste exercício, você precisa criar um objeto que represente um livro. O livro deve ter propriedades para o título, autor e número de páginas. Em seguida, adicione um método ao objeto que exiba o livro na console no formato "Título, escrito por Autor, com Páginas páginas".

*/

const inputNome = document.getElementById('nome')
const inputAutor = document.getElementById('autor')
const inputPaginas = document.getElementById('paginas')
const todosInputs = document.querySelectorAll('input.todosInputs')
const btnAdicionar = document.querySelector('button.btnAdicionar')
const btnNovoLivro = document.querySelector('button.btnNovoLivro')
const resposta = document.querySelector('div.resposta')


function adicionarLivro() {

    const nome = inputNome.value
    const autor = inputAutor.value
    const paginas = Number(inputPaginas.value)

    // Verifica se tem algum campo vazio
    for (const cadaInput of todosInputs) {
        if (cadaInput.value.trim() === '') {
            alert('Preencha todos os campos para adicionar o livro.')
            cadaInput.focus()
            return
        }
    }

    if (paginas <= 0) {
        alert('Digite um número de páginas maior que zero.')
        inputPaginas.value = ''
        inputPaginas.focus()
        return
    }


    const livro = {
        nome: nome,
        autor: autor,
        paginas: paginas,

        // Mêtodo do objeto
        mensagemDeExibicao() {
            return `
                <p><strong>Livro adicionado com sucesso!</strong></p>
                <p>Nome: ${this.nome}</p>
                <p>Autor: ${this.autor}</p>
                <p>Páginas: ${this.paginas}</p>
            `
        }
    }


    resposta.innerHTML = livro.mensagemDeExibicao()


    for (const cadaInput of todosInputs) {
        cadaInput.disabled = true
    }


    btnAdicionar.style.display = 'none'
    btnNovoLivro.style.display = 'inline-block'
}


function novoLivro() {
    for (const cadaInput of todosInputs) {
        cadaInput.disabled = false
        cadaInput.value = ''
    }

    inputNome.focus()

    btnAdicionar.style.display = 'inline-block'
    btnNovoLivro.style.display = 'none'

    resposta.innerHTML = ''
}


// Eventos
btnAdicionar.addEventListener('click', adicionarLivro)
btnNovoLivro.addEventListener('click', novoLivro)