 function somar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 + num2);
 }

    function subtrair() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 - num2);
}

    function multiplicar() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado").innerHTML = "Resultado: " + (num1 * num2);
}

function dividir() { 
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

      if (num2 == 0) {
        document.getElementById("resultado").innerHTML = "Erro: Divisão por zero não é permitida.";
      } else {
        document.getElementById("resultado").innerHTML = "Resultado: " + (num1 / num2);
      }
}
    