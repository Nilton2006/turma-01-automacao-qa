import {expect, test} from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function createUser(nome: string, idade: number): User{
    return {nome, idade}
}

test('Criar um usuário com nome e idade', () =>{
    const user = createUser('Alice', 30)

    expect(user).toEqual({nome: 'Alice', idade: 30})
    expect(user.nome).toBe('Alice')
});