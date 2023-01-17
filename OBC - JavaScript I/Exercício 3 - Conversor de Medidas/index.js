let metro = prompt("Digite um valor em metros:");
let opcao = prompt("Escolha uma unidade para realizar a conversão:\nMilímetro (mm)\nCentímetro (cm)\nDecímetro (dm)\nDecâmetro (dam)\nHectômetro (hm)\nQuilômetro (km)");

switch (opcao) {
  case "mm":
    alert("Valor em milímetros: " + metro * 1000 + "mm");
    break;
  case "cm":
    alert("Valor em centímetros: " + metro * 100 + "cm");
    break;
  case "dm":
    alert("Valor em decímetros: " + metro * 10 + "dm");
    break;
  case "dam":
    alert("Valor em decâmetros: " + metro / 10 + "dam");
    break;
  case "hm":
    alert("Valor em hectômetros: " + metro / 100 + "hm");
    break;
  case "km":
    alert("Valor em quilômetros: " + metro / 1000 + "km");
    break;
  default:
    alert("Opção inválida.");
    break;
}
