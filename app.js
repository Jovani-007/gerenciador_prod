// Importação das funções e dados do arquivo produto.js
import produto from "./produtos.js";

// Chamada das funções
console.log("SISTEMA DE GERENCIAMENTO DE PRODUTOS");
console.log(produto.gerarLinha(70));
console.log("Lista de Todos os Produtos");
console.log(produto.todosProdutos());

console.log(produto.gerarLinha(70));
console.log("Produtos Acima de R$400");
console.log(`${produto.valorProduto()}`);

console.log(produto.gerarLinha(70));
console.log("Quantidade Total de Produtos");
console.log(produto.totalProdutos());

console.log(produto.gerarLinha(70));
console.log("Produtos de Fornecedor Especifíco");
console.log("Dell");
console.log(`${produto.fornecedorProduto("Dell")}`);

console.log(produto.gerarLinha(70));
console.log("Valor Total do Estoque");
console.log("R$ " + produto.valorTotalProdutos());