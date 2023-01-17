let numero = prompt("Digite um valor para ser calculado: ");
let resultado = 0;
let resultadoString = "";
let i = 1;

for (i = 1; i <= 20; i++) {
  resultado = numero * i;
  resultadoString += " vezes " + i + " = " + resultado + " | ";
}

alert("Tabuada do " + numero + ":\n" + resultadoString);
