let opcao = "";

do {
  opcao = prompt("Selecione uma opção:\nReiniciar\nContinuar\nRepetir\nVoltar\nEncerrar");
  alert("Opção escolhida: " + opcao);
} while (opcao !== "Encerrar");

alert("Programa encerrado.");
