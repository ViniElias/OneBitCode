const pacientes = [];
let opcao = 0;
let nome = "";

do {
  opcao = prompt("Fila de espera: " + pacientes + "\nSelecione uma opção (pelo número):\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair");
  if (opcao === "1") {
    nome = prompt("Digite o nome do paciente:");
    pacientes.push(nome);
  } else if (opcao === "2") {
    pacientes.shift();
  } else {
    alert("Menu encerrado.");
  }
} while (opcao !== "3");
