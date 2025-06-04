var aciertos = 0;
valor = prompt("Inserte un valor entre el 1 y el 10.");
if (valor >= 1 && valor <= 10) {
  for (var i = 1; i < 11; i++) {
    respuesta = prompt("¿Cuanto es " + valor + "*" + i + "?");
    var respuestacorrecta = valor * i;
    if (respuesta == respuestacorrecta) {
      alert("CORRECTO");
      aciertos++;
    } else {
      alert("Incorrecto. El valor correcto es : " + respuestacorrecta + ".");
    }
  }
  document.write("Tu porcentaje de aciertos es " + aciertos * 10 + "%");
} else {
  document.write("El valor introducido no está entre el 1 y el 10.");
}
