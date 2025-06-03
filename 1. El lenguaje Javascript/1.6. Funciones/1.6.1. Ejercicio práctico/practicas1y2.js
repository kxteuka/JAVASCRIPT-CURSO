function valornumerico(valor) {
  valor = prompt("Inserta un valor numérico.");
  if (valor == null) {
    return valor;
  } else {
    while (isNaN(valor)) {
      alert("No es un valor numérico");
      valor = prompt("Inserta un valor numérico.");
      if (valor == null) {
        break;
      }
    }
  }
  return valor;
}

function esAdulto(edad) {
  if (edad == null) {
    alert(null);
    return null;
  } else {
    alert(edad >= 18 ? "Es mayor." : "Es menor.");
    return edad >= 18 ? true : false;
  }
}

console.log(esAdulto(valornumerico()));
