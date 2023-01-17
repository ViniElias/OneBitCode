const palavra = prompt("Digite uma palavra:");
let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  alert("A palavra é um palíndromo.");
} else {
  alert("A palavra não é um palíndromo.\n\nPalavra normal: " + palavra + "\nPalavra invertida: " + palavraInvertida);
}
