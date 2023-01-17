const vagas = [];
let opcao = 0;
candidato = "";
indiceVaga = 0;

do {
  opcao = prompt("Sistema de Vagas de Emprego - Menu\n\nEscolha uma opção:\n1 - Listar vagas disponíveis\n2 - Criar uma nova vaga\n3 - Visualizar uma vaga\n4 - Inscrever um candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair");
  switch (opcao) {
    case "1":
      for (let i = 0; i < vagas.length; i++) {
        alert(
          "Vagas disponíveis\n\nNome: " + vagas[i].nome + 
          "\nData limite: " + vagas[i].data + 
          "\nCandidatos: " + vagas[i].numeroCandidatos);
      }
      break;

    case "2":
      let vaga = {
        nome: prompt("Nome da vaga:"),
        descricao: prompt("Descrição da vaga:"),
        data: prompt("Data limite da vaga:"),
        numeroCandidatos: 0,
        nomeCandidatos: "",
      };
      confirm("Salvar informações?");
      if (confirm) {
        vagas.push(vaga);
      }
      break;

    case "3":
      indiceVaga = prompt("Índice da vaga:");
      alert(
        "Vaga selecionada: " + vagas[indiceVaga].nome +
        "\nÍndice: " + indiceVaga +
        "\nDescrição: " + vagas[indiceVaga].descricao +
        "\nData limite: " + vagas[indiceVaga].data +
        "\nCandidatos: " + vagas[indiceVaga].numeroCandidatos +
        "\nNome dos candidatos: " + vagas[indiceVaga].nomeCandidatos
      );
      break;

    case "4":
      candidato = prompt("Nome do candidato:") + "; ";
      indiceVaga = prompt("Índice da vaga:");
      confirm(
        "Vaga selecionada:\n\nNome: " + vagas[indiceVaga].nome + 
        "\nDescrição: " + vagas[indiceVaga].descricao + 
        "\nData limite: " + vagas[indiceVaga].data + 
        "\n\nSalvar informações?");
      if (confirm) {
        vagas[indiceVaga].numeroCandidatos += 1;
        vagas[indiceVaga].nomeCandidatos += candidato;
      }
      break;
    
    case "5":
      indiceVaga = prompt("Índice da vaga:");
      confirm(
        "Vaga selecionada:\n\nNome: " + vagas[indiceVaga].nome + 
        "\nDescrição: " + vagas[indiceVaga].descricao + 
        "\nData limite: " + vagas[indiceVaga].data + 
        "\n\nExcluir vaga?");
      if (confirm) {
        vagas.pop(indiceVaga);
      }
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao != 6);