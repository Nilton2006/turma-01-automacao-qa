type CasoDeTeste = {
    id: number;
    titulo: string;
    descrição: string;
    automatizado: boolean;
};

function criarCasoDeTeste(
    id: number,
    titulo: string,
    descrição: string,
    automatizado: boolean
): CasoDeTeste {
    return {
        id: id,
        titulo: titulo,
        descrição: descrição,
        automatizado: automatizado
    };
}

function descrever(variavel: CasoDeTeste): string {
    return `Id: ${variavel.id} - Título: ${variavel.titulo} - Descrição: ${variavel.descrição} - Automatizado: ${variavel.automatizado}`;
}

function marcarAutomatizado(variavel: CasoDeTeste): CasoDeTeste {
    variavel.automatizado = true;
    return variavel;
}

const primeiroCasoDeTeste = criarCasoDeTeste(
    1,
    "Login com usuário válido",
    "Verificar se o usuário consegue fazer login com dados corretos.",
    false
);

const segundoCasoDeTeste = criarCasoDeTeste(
    2,
    "Login com senha inválida",
    "Verificar se o sistema mostra uma mensagem de erro.",
    false
);

const casoAutomatizado = marcarAutomatizado(primeiroCasoDeTeste);

console.log(descrever(primeiroCasoDeTeste));
console.log(descrever(segundoCasoDeTeste));
console.log(descrever(casoAutomatizado));

const casoComErro = criarCasoDeTeste(
    "3",
    "Cadastro de usuário",
    "Verificar o cadastro de um novo usuário.",
    false
);