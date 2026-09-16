type Pessoa = { nome: string; idade: number }; // model/contrato/modelo

function criarPessoa(nome: string, idade: number): Pessoa {
    return { nome, idade };
}

const p = criarPessoa("Kathlyn", 24);
console.log(p);


type Produto = { nome: string; preco: number; estoque: number };

function criarProduto(nome: string, preco: number, estoque: number): Produto {
    return { nome, preco, estoque };
}

const produto = criarProduto("Teclado com led", 150, 59);
console.log(produto);