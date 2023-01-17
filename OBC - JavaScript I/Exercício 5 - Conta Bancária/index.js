let dinheiro = prompt("Digite a quantidade inicial de dinheiro disponível:");
let opcao = 0;
let adicionar = 0;
let remover = 0;

do {
  opcao = prompt("Dinheiro atual: R$" + dinheiro + "\n\nSelecione uma opção (pelo número):" + "\n1 - Adicionar\n2 - Remover\n3 - Sair");
  if (opcao == 1) {
    adicionar = prompt("Quantos reais você deseja adicionar?");
    dinheiro -= -adicionar;
  } else if (opcao == 2) {
    remover = prompt("Quantos reais você deseja remover?");
    dinheiro -= remover;
  }
} while (opcao != 3);
