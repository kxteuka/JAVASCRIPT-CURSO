preguntas = prompt("Inserte el número de preguntas del test.");
aciertos = prompt("Inserte cuantas preguntas ha acertado.");
preguntas = parseInt(preguntas);
aciertos = parseInt(aciertos);

calificacion = (aciertos / preguntas) * 10;
console.log(calificacion);

if (calificacion < 2) {
  
	document.write("Muy deficiente.");
} else if (calificacion >= 2 && calificacion < 5) {
  document.write("Insuficiente.");
} else if (calificacion >= 5 && calificacion < 6) {
  document.write("Suficiente.");
} else if (calificacion >= 6 && calificacion < 7) {
  document.write("Bien.");
} else if (calificacion >= 7 && calificacion < 9) {
  document.write("Notable.");
} else {
  document.write("Sobresaliente.");
}
