import { describe, expect, it } from "vitest";

type Teste = {

  id: number;

  nome: string;

  status: string;

};

const testes: Teste[] = [

  { id: 1, nome: "Login", status: "passou" },

  { id: 2, nome: "Cadastro", status: "passou" },

  { id: 3, nome: "Pesquisa", status: "falhou" },

  { id: 4, nome: "Pagamento", status: "passou" },

  { id: 5, nome: "Logout", status: "falhou" }

];

// map pega somente os nomes

const nomes = testes.map((teste) => teste.nome);

// filter pega somente os testes que passaram

const testesPassaram = testes.filter(

  (teste) => teste.status === "passou"

);

// reduce conta quantos testes existem

const totalTestes = testes.reduce(

  (total) => total + 1,

  0

);

// Função para buscar um teste pelo id

async function buscarTeste(id: number): Promise<Teste> {

  // Simulando o tempo de resposta de uma API

  const resposta = new Promise<Teste>((resolve, reject) => {

    setTimeout(() => {

      const teste = testes.find((item) => item.id === id);

      if (teste) {

        resolve(teste);

      } else {

        reject(new Error("Teste não encontrado"));

      }

    }, 500);

  });

  // await espera a Promise terminar

  return await resposta;

}


// Testes unitários

describe("Testes de QA", () => {

  it("deve ter 5 testes cadastrados", () => {

    expect(testes).toHaveLength(5);

  });

  it("deve pegar os nomes dos testes", () => {

    expect(nomes).toContain("Login");

    expect(nomes).toContain("Pagamento");

  });

  it("deve mostrar os testes que passaram", () => {

    expect(testesPassaram).toHaveLength(3);

  });

  it("deve contar os testes", () => {

    expect(totalTestes).toBe(5);

  });

  it("deve buscar um teste pelo id", async () => {

    const resultado = await buscarTeste(1);

    expect(resultado.nome).toBe("Login");

    expect(resultado.status).toBe("passou");

  });

  it("deve dar erro quando o teste não existe", async () => {

    await expect(buscarTeste(10)).rejects.toThrow(

      "Teste não encontrado"

    );

  });

});
