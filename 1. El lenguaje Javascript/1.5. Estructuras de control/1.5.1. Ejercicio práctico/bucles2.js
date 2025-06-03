valor = prompt("Introduce un valor numérico.");

while (isNaN(valor)) {
  alert("No es un valor numérico.");
  valor = prompt("Introduce un valor numérico.");
}

document.write(valor + ".");
