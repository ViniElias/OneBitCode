const baralho = ["carta1", "carta2", "carta3"];
let opcao = 0;
let carta = "";

do {
  opcao = prompt("Baralho: " + baralho + "\nSelecione uma opção (pelo número):\n1 - Adicionar uma carta\n2 - Puxar uma carta\n3 - Sair");
  if (opcao === "1") {
    nome = prompt("Digite o nome da carta:");
    baralho.unshift(nome);
  } else if (opcao === "2") {
    alert("Carta retirada: " + baralho[0]);
    baralho.shift();
  } else {
    alert("Menu encerrado.");
  }
} while (opcao !== "3");
