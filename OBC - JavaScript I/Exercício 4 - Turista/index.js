let nome = prompt("Digite o seu nome:");
let nomeCidade = "";
let nomeCidades = "";
let numeroCidades = 0;
let visita = prompt("Você já visitou alguma cidade?");

while (visita === "Sim") {
  nomeCidade = prompt("Digite o nome da cidade: ");
  nomeCidades += "-" + nomeCidade + "\n";
  numeroCidades += 1;
  visita = prompt("Você visitou mais alguma cidade?");
}

alert("Nome do turista: " + nome + "\nNome das cidades: \n" + nomeCidades + "\nNúmero de cidades: " + numeroCidades);
