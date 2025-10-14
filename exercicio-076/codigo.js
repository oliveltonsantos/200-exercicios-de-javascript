/* Descrição do exercício:

Crie um objeto vazio e adicione três propriedades a ele, cada uma com diferentes tipos de valores. 

Descrição: O JavaScript permite que objetos sejam criados e modificados dinamicamente. Neste exercício, crie um objeto vazio. Em seguida, adicione uma propriedade numérica, uma propriedade string e uma propriedade booleana.

*/

const inputNomeProduto = document.getElementById('nomeProduto')
const inputValor = document.getElementById('valor')
const radios = document.getElementsByName('estoque')
const btnAdicionarProduto = document.querySelector('button.btnAdicionarProduto')
const btnNovoProduto = document.querySelector('button.btnNovoProduto')
const resposta = document.querySelector('div.resposta')


function adicionarProduto() {
    if (inputNomeProduto.value.trim() === '') {
        alert('Digite o nome do produto para adicionar.')
        inputNomeProduto.focus()
        return
    }

    if (inputValor.value === '') {
        alert('Digite o preço do produto para adicionar.')
        inputValor.focus()
        return
    }

    const nomeProduto = inputNomeProduto.value
    const valor = Number(inputValor.value)

    if (valor <= 0) {
        alert('Digite um valor maior que zero para adicionar.')
        inputValor.value = ''
        inputValor.focus()
        return
    }

    // Verificação se tem o produto no estoque
    let emEstoque = false

    for (const cadaRadio of radios) {
        if (cadaRadio.checked) {
            emEstoque = cadaRadio.value === 'true'
        }
    }

    // Cria o objeto dinâmico com os dados do formulário
    let produtoAdicionado = {
        nome: nomeProduto,
        preco: valor,
        emEstoque: emEstoque
    }

    resposta.innerHTML = `
        <p><strong>Produto adicionado:</strong></p>
        <p>Nome: ${produtoAdicionado.nome}</p>
        <p>Preço: R$${produtoAdicionado.preco.toFixed(2)}</p>
        <p>Tem no estoque: ${produtoAdicionado.emEstoque ? 'Sim' : 'Não'}</p>
    `

    inputNomeProduto.disabled = true
    inputValor.disabled = true

    btnAdicionarProduto.style.display = 'none'
    btnNovoProduto.style.display = 'inline-block'
}


function adicionarNovoProduto() {
    inputNomeProduto.disabled = false
    inputValor.disabled = false

    inputNomeProduto.value = ''
    inputValor.value = ''
    inputNomeProduto.focus()

    // Limpa os rádios
    for (const cadaRadio of radios) {
        cadaRadio.checked = false
    }

    btnAdicionarProduto.style.display = 'inline-block'
    btnNovoProduto.style.display = 'none'

    resposta.innerHTML = ''
}