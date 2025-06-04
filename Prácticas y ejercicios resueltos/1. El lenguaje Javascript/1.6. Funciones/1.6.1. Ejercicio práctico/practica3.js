function enumerador(valor1, valor2) {
  let inicio = Math.min(valor1, valor2);
  let fin = Math.max(valor1, valor2);

  for (let i = inicio + 1; i < fin; i++) {
    document.write(i + "<br />");
  }
}

function solicitarValores() {
  let valor1 = parseInt(prompt("Introduce el primer valor:"));
  let valor2 = parseInt(prompt("Introduce el segundo valor:"));

  if (isNaN(valor1) || isNaN(valor2)) {
    document.write("Por favor, introduce valores numéricos válidos.");
  } else if (valor1 === valor2 || Math.abs(valor1 - valor2) === 1) {
    document.write("No hay valores comprendidos entre los introducidos.");
  } else {
    enumerador(valor1, valor2);
  }
}

solicitarValores();
