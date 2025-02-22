document.getElementById("calcularArea").addEventListener("click", function () {
  calcular("area");
});

document
  .getElementById("calcularVolumen")
  .addEventListener("click", function () {
    calcular("volumen");
  });

function calcular(tipo) {
  var figura = document.getElementById("figura").value;
  var resultado = "";

  if (figura === "") {
    alert("Seleccione una figura primero.");
    return;
  }

  if (tipo === "area") {
    if (figura === "cuadrado") {
      var lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
      if (!isNaN(lado) && lado > 0) {
        resultado = "Área: " + lado * lado;
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    } else if (figura === "rectangulo") {
      var base = parseFloat(prompt("Ingrese la base del rectángulo:"));
      var altura = parseFloat(prompt("Ingrese la altura del rectángulo:"));
      if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
        resultado = "Área: " + base * altura;
      } else {
        alert("Ingrese números válidos.");
        return;
      }
    } else if (figura === "triangulo") {
      var base = parseFloat(prompt("Ingrese la base del triángulo:"));
      var altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
      if (!isNaN(base) && base > 0 && !isNaN(altura) && altura > 0) {
        resultado = "Área: " + (base * altura) / 2;
      } else {
        alert("Ingrese números válidos.");
        return;
      }
    } else if (figura === "circulo") {
      var radio = parseFloat(prompt("Ingrese el radio del círculo:"));
      if (!isNaN(radio) && radio > 0) {
        resultado = "Área: " + (Math.PI * radio * radio).toFixed(2);
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    } else if (figura === "esfera") {
      var radio = parseFloat(prompt("Ingrese el radio de la esfera:"));
      if (!isNaN(radio) && radio > 0) {
        resultado = "Área: " + (4 * Math.PI * radio * radio).toFixed(2);
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    } else if (figura === "cubo") {
      var lado = parseFloat(prompt("Ingrese el lado del cubo:"));
      if (!isNaN(lado) && lado > 0) {
        resultado = "Área: " + 6 * lado * lado;
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    }
  } else if (tipo === "volumen") {
    if (figura === "esfera") {
      var radio = parseFloat(prompt("Ingrese el radio de la esfera:"));
      if (!isNaN(radio) && radio > 0) {
        resultado =
          "Volumen: " + ((4 / 3) * Math.PI * radio * radio * radio).toFixed(2);
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    } else if (figura === "cubo") {
      var lado = parseFloat(prompt("Ingrese el lado del cubo:"));
      if (!isNaN(lado) && lado > 0) {
        resultado = "Volumen: " + lado * lado * lado;
      } else {
        alert("Ingrese un número válido.");
        return;
      }
    } else {
      resultado = "Esta figura no tiene volumen.";
    }
  }

  document.getElementById("resultado").innerText = resultado;
}
