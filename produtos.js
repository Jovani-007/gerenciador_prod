const produtos = [
    {"cod": 1, "nome": "celular", "preco": 1399.99, "estoque": 50, "fornecedor": "Motorola"},
    {"cod": 2, "nome": "tv", "preco": 2499.99, "estoque": 30, "fornecedor": "LG"},
    {"cod": 3, "nome": "fone de ouvido", "preco": 20.00, "estoque": 100, "fornecedor": "Tomate"},
    {"cod": 4, "nome": "relogio smart", "preco": 399.90, "estoque": 50, "fornecedor": "Samsung"},
    {"cod": 5, "nome": "notebook", "preco": 2999.99, "estoque": 60, "fornecedor": "Samsung"},
    {"cod": 6, "nome": "fone bluetooth", "preco": 149.99, "estoque": 70, "fornecedor": "Tanya"},
    {"cod": 7, "nome": "pc montado", "preco": 4999.99, "estoque": 20, "fornecedor": "Dell"},
    {"cod": 8, "nome": "caixinha de som", "preco": 199.99, "estoque": 50, "fornecedor": "Tomate"}
];


function gerarLinha(tamanho) {
    let linha = '';
    for (let i = 0; i < tamanho; i++) {
        linha+='-'
    }
    return linha
}

// Função para retornar todos os produtos
function todosProdutos() {
    return produtos
}

// Função para retornar os nomes dos produtos acima de 100 reais
function valorProduto() {
    return produtos
    .filter(
        produto => produto.preco >= 400.00
    )
    .map(
        produto => produto.nome
    )
}

// Função para retornar os nomes dos produtos de um fornecedor indicado pelo usuário
function fornecedorProduto(provedor) {
    return produtos
    .filter(
        produto => produto.fornecedor == provedor
    )
    .map(
        produto => produto.nome
    )
}

// Função para retornar a quantidade total de produtos no estoque
function totalProdutos() {
    return produtos
    .reduce(
        (total, produto) => total + produto.estoque, 0
    )
}

// Função para retornar o valor total do estoque
function valorTotalProdutos() {
    return produtos
    .reduce(
        (total, produto) => total + (produto.estoque * produto.preco), 0
    )
}

// Exportação das funções e dos dados dos produtos
export default {
    gerarLinha,
    todosProdutos,
    valorProduto,
    totalProdutos,
    fornecedorProduto,
    valorTotalProdutos,
    produtos
}