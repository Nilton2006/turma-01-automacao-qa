import { title } from "node:process";

interface Postagem {
    id: number;
    title: string;
    body: string;
}

// GET: Buscar postagem
async function buscarPostagem(id: number): Promise<Postagem> {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:');
    console.log(res.status);

    const resGet = await res.json() as Postagem;
    return resGet;
}

// POST: Criar uma nova postagem
async function criarPostagem(): Promise<Postagem> {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Minha primeira postagem',
                body: 'Aqui existe uma descrição',
                userId: 1
            })
        }
    );

    console.log('STATUS:');
    console.log(res.status);

    const resPost = await res.json() as Postagem;
    return resPost;
}

async function atualizarPostagemCompleta(id: number): Promise<Postagem>{
    const corpoEnviado = {
        title: 'Atualização da minha primeria potagem',
        body: 'Aqui tem uma nova descrição',
        userId: 2
    }
}

 const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    console.log('STATUS:');
    console.log(res.status);

    const resGet = await res.json() as Postagem;
    return resGet;
}

async function deletar(id: number): Promisse<Response>
        const

        console. log('Status:')

   cont
// // Executar GET
// buscarPostagem(1).then((post) => {
//     console.log('POSTAGEM:');
//     console.log(post);
// });

// // Executar POST
// criarPostagem().then((post) => {
//     console.log('NOVA POSTAGEM:');
//     console.log(post);
// });


