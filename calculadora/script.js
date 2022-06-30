var n1 = "0";
var n2 = "";
var operador = null;

function incluirDigito(digito) {
  if (n2 && operador && clicadoEmIgual) {
    clicadoEmIgual = false;
    limpar();
    n1 = digito;
    mostrarNoDisplay(n1);
    return;
  }
  if (operador !== null) {
    n2 = n2 + digito;
    mostrarNoDisplay(n2);
  } else {
    if (n1 === "0") {
      n1 = digito;
    } else {
      n1 = n1 + digito;
      //n1 = n1 + digito é o mesmo que n1 += digito
    }
    mostrarNoDisplay(n1);
  }
}

function calcular() {
  var _n1 = parseFloat(n1);
  var _n2 = parseFloat(n2);
  var numeroCalculado = 0;
  switch (operador) {
    case "+":
      numeroCalculado = _n1 + _n2;
      break;
    case "-":
      numeroCalculado = _n1 - _n2;
      break;
    case "*":
      numeroCalculado = _n1 * _n2;
      break;
    case "/":
      numeroCalculado = _n1 / _n2;
      break;
  }
  return numeroCalculado;
}

function mostrarNoDisplay(valor) {
  document.querySelector("#display").innerHTML = valor;
}

function iniciarCalculo(simbolo) {
  if (clicadoEmIgual) {
    clicadoEmIgual = false;
    n2 = "";
  }
  if (operador === null || n2 === "") {
    operador = simbolo;
  } else {
    var resultado = calcular();
    n1 = resultado;
    operador = simbolo;
    n2 = "";
    mostrarNoDisplay(n1);
  }
}
var clicadoEmIgual = false;
function finalizarCalculo() {
  clicadoEmIgual = true;
  var resultado = calcular();
  n1 = resultado;
  mostrarNoDisplay(n1);
}

function incluirPonto() {
  if (operador && n2 === "") {
    n2 = "0.";
  } else if (operador && n2) {
    n2 = n2 + ".";
  } else {
    n1 = n1 + ".";
  }
  mostrarNoDisplay(n1);
}

function limpar() {
  n1 = "0";
  operador = null;
  n2 = "";
  mostrarNoDisplay(n1);
}

function obterPorcento() {
  if (!n2) {
    limpar();
    mostrarNoDisplay(n1);
  } else {
    var porcento = (n1 * n2) / "100";
    n2 = porcento;
  }
  mostrarNoDisplay(n2);
}