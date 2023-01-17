let name1 = prompt("Nome do primeiro veículo:");
let speed1 = prompt("Velocidade do primeiro veículo:");
let name2 = prompt("Nome do segundo veículo:");
let speed2 = prompt("Velocidade do segundo veículo:");

if (speed1 > speed2) {
  alert("O veículo mais rápido é: " + name1);
} else if (speed2 > speed1) {
  alert("O veículo mais rápido é: " + name2);
} else {
  alert("Os veículos tem velocidades iguais.");
}
