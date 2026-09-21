import { expect, test, describe } from 'vitest'

function login(username: string, password: string): boolean{
    return username === 'patati' && password === '123456' && password === '123456';
}

test('Permitir fazer login com credenciais validas', () =>{
    const efetuandoLogin = login ('patati', '123456')
    expect(efetuandoLogin).toBe(true)
});

describe('Negar login com credenciais inválidas', () =>{

    test('Negar login com senha incorreta', () =>{
        const esfetuandoLogin = login('patati', '2563')
        expect(esfetuandoLogin).toBe(false)
    })

     test('Negar login com usuário incorreto', () =>{
        const esfetuandoLogin = login('patata', '123456')
        expect(esfetuandoLogin).toBe(false)
    })

    test('Negar login com usuário e senha incorreta', () =>{
        const esfetuandoLogin = login('patata', '2563')
        expect(esfetuandoLogin).toBe(false)
    })

    test('Negar login com campos vazios', () =>{
        const esfetuandoLogin = login('', '')
        expect(esfetuandoLogin).toBe(false)
    })
    


})