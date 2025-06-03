valor1 = prompt("Inserte el primer valor numérico.");
valor2 = prompt("Inserte el segundo valor numérico.");
operacion = prompt("Inserte el nombre de la operación matemática.");

valor1 = parseFloat(valor1);
valor2 = parseFloat(valor2);

if (operacion == "suma") {
  resultado = valor1 + valor2;
  document.write("El resultado es " + resultado + ".");
} else if (operacion == "resta") {
  resultado = valor1 - valor2;
  document.write("El resultado es " + resultado + ".");
} else if (operacion == "producto") {
  resultado = valor1 * valor2;
  document.write("El resultado es " + resultado + ".");
} else if (operacion == "división") {
  resultado = valor1 / valor2;
  document.write("El resultado es " + resultado + ".");
} else {
  document.write("Operación incorrecta.");
}
