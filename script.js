// Programa para selecionar aleatoriamente números da MEGASENA

function generateNumber(numLottery) {

    var numbers = [];
    for (var i = 0; i < numLottery; i++) {

        numbers[i] = Math.floor(Math.random() * (60 - 1) ) + 1;

        console.log(numbers)
    }
    return numbers;

    
}

console.log(generateNumber(6))

function mostrarResultado() {
    // Chame a função que retorna o resultado desejado
    var resultado = minhaFuncao();

    // Acesse o elemento HTML onde deseja exibir o resultado
    var resultadoElemento = document.getElementById('resultado');

    // Atualize o conteúdo do elemento com o resultado
    resultadoElemento.innerHTML = resultado;
  }

  function minhaFuncao() {
    // Função que retorna o resultado desejado
    return generateNumber(6);
  }

// alert(generateNumber(6))




