 /* Descrição do exercício:

Crie um objeto vazio e adicione três propriedades a ele, cada uma com diferentes tipos de valores. 

Descrição: O JavaScript permite que objetos sejam criados e modificados dinamicamente. Neste exercício, crie um objeto vazio. Em seguida, adicione uma propriedade numérica, uma propriedade string e uma propriedade booleana.

 */

const inputNomeProduto = document.getElementById('nomeProduto')
const inputValor = document.getElementById('valor')
const radios = document.getElementsByName('estoque')
const btnAdicionarProduto = document.querySelector('button.btnAdicionarProduto')
const btnNovoProduto = document.querySelector('button.btnNovoProduto')

function adicionarProduto() {
    if (inputNomeProduto.value === '') {
        alert('Digite o nome do produto para adicionar.')
        inputNomeProduto.focus()
        return
    }

    if (inputValor.value === '') {
        alert('Digite o preço do produto para adicionar.')
        inputValor.focus()
        return
    }

    











}