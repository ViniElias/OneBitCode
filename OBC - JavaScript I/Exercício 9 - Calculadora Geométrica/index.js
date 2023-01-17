let opcao = prompt("Calculadora Geométrica\nSelecione uma área a ser calculada:\n1 - Triângulo\n2 - Retângulo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo");
let area = 0;

function triangulo(base, altura) {
  area = (base * altura) / 2;
  return area;
}

function retangulo(base, altura) {
  area = base * altura;
  return area;
}

function quadrado(lado) {
  area = lado * lado;
  return area;
}

function trapezio(baseMaior, baseMenor, altura) {
  area = ((baseMaior - -baseMenor) * altura) / 2;
  return area;
}

function circulo(raio, pi = 3.14) {
  area = pi * raio * raio;
  return area;
}

switch (opcao) {
  case "1":
    base = prompt("Base: ");
    altura = prompt("Altura: ");
    alert(triangulo(base, altura));
    break;
  case "2":
    base = prompt("Base: ");
    altura = prompt("Altura: ");
    alert(retangulo(base, altura));
    break;
  case "3":
    lado = prompt("Lado: ");
    alert(quadrado(lado));
    break;
  case "4":
    baseMaior = prompt("Base maior: ");
    baseMenor = prompt("Base menor: ");
    altura = prompt("Altura: ");
    alert(trapezio(baseMaior, baseMenor, altura));
    break;
  case "5":
    raio = prompt("Raio: ");
    alert(circulo(raio));
    break;
  default:
    alert("Opção inválida.");
}
