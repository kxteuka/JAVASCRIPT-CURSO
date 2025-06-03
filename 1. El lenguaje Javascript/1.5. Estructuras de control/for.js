var valor;

valor = prompt("Introduce un valor mayor que 0.");
valor = parseInt(valor);

if (valor > 0) {
  for (var numero = valor; numero >= 0; numero--) {
    document.write(numero + "<br >");
  }
} else {
  document.write("El valor indicado no es mayor que 0.");
}
