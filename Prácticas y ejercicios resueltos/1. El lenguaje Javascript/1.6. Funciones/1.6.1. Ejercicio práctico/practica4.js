function calcular(a, b, op) {
  if (op == "suma") {
    return a + b;
  } else if (op == "resta") {
    return a - b;
  } else if (op == "producto") {
    return a * b;
  } else if (op == "división") {
    return a / b;
  } else {
    return null;
  }
}

let a = parseInt(prompt("Inserte valor a."));
let b = parseInt(prompt("Inserte valor b."));
let op = prompt("Inserte la operación a realizar.");

if (calcular(a, b, op) !== null) {
  document.write(calcular(a, b, op));
} else {
  document.write("Operación no válida.");
}
