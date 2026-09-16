// function somar(a: number, b: number): number {
//     return a + b;
// }

//import { convertProcessSignalToExitCode } from "node:util";

// const resultado = somar(10,5);
// console.log(resultado);

// function mostrarNome(nome: string): void{
//     console.log(`Olá, ${nome}!`);

// }
// mostrarNome("Nilton");


// function = pegarIdade();
// console. log









// function mostrarMensagem(): void {
//     console. log("Olá! Seja bem-vindo!");
// }

// mostrarMensagem()




type Pessoa = {nome:string; idade:number};
function criarPessoa(n:string, idade:number): Pessoa{
    return{nome: n, idade:idade};
}
const p = criarPessoa("Kathlyn", 24);
console.log(p)
