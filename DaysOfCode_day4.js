var numeroSecreto = parseInt(Math.random() * 101);
var tentativas = 4;

function chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Parabéns! Voce acertou.";
  } else if (chute > 100 || chute < 0) {
    resultado.innerHTML =
      "❕ Atenção, você deve digitar um número de 0 a 100 ❕";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = chute + " é um valor abaixo do número que estou pensando";
    tentativas -= 1;
    document.getElementById("texto-tentativas").innerHTML = "Número de tentativas: " + tentativas;
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = chute + " é um valor acima do número em que estou pensando";
    tentativas -= 1;
    document.getElementById("texto-tentativas").innerHTML = "Número de tentativas: " + tentativas;
  }
  
          if (chute > 100 || chute < 0) {
            resultado.innerHTML =
              "❕ Atenção, você deve digitar um número de 0 a 100 ❕";
          } else if(tentativas <1) {
                resultado.innerHTML = `Você esgotou suas tentativas. O número no qual eu estava pensando era ${numeroSecreto}.`;
  
  }

}

function reiniciar() {
  numeroSecreto = parseInt(Math.random() * 101);
  tentativas = 4;
  document.getElementById("resultado").innerHTML = " ";
  document.getElementById("valor").innerHTML = " ";
  document.getElementById("texto-tentativas").innerHTML = "Número de tentativas: 4"
}
