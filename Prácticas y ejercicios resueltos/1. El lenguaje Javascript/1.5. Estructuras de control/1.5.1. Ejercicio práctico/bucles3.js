let media = 0;
let numvalores = 0;
let sumvalores = 0;
valor = prompt("Inserte un valor entre el 1 y el 10.");

if (valor == null) {
  document.write("No se ha introducido un valor.");
} else if (isNaN(valor)) {
  document.write("El valor introducido no es un número.");
} else {
  while (confirm("¿Desea introducir un nuevo valor?")) {
    numvalores++;
    sumvalores += parseInt(valor);
    document.write(valor + ", ");
    valor = prompt("Inserte un nuevo valor entre el 1 y el 10.");
  }
}
numvalores++;
sumvalores += parseInt(valor);
media = sumvalores / numvalores;

if (numvalores == 1) {
  document.write(valor + ". Solo se ha introducido " + numvalores + " valor.");
} else {
  document.write(
    valor +
      ". Se han introducido " +
      numvalores +
      " valores. La media es " +
      media +
      "."
  );
}
