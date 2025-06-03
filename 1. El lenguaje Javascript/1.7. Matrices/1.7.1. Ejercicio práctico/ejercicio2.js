var alumnos = new Array();
var continuar = true;
var numAlumnos = prompt("Introduce el número de alumnos a registrar:");
if (numAlumnos == null) {
  alert("Accion cancelada por el usuario.");
  continuar = false;
} else {
  while (isNaN(numAlumnos) || numAlumnos <= 0) {
    alert("Número de alumnos inválido. Introduce un número positivo.");
    numAlumnos = prompt("Introduce el número de alumnos a registrar:");
    if (numAlumnos == null) {
      continuar = false;
      break;
    }
  }
}
if (continuar == true) {
  var i = 0;
  while (continuar == true && i < numAlumnos) {
    var nombre = prompt("Introduce el nombre del alumno:");
    var calificacion = parseFloat(
      prompt("Introduce la calificación final del alumno:")
    );

    if (nombre && !alumnos.some((alumno) => alumno.nombre === nombre)) {
      alumnos.push({ nombre: nombre, calificacion: calificacion });
      i++;
    } else {
      alert("Alumno ya registrado o nombre inválido. Inténtalo de nuevo.");
    }
  }
  var nombreBuscar = prompt("Introduce el nombre del alumno a buscar:");
  var alumnoEncontrado = alumnos.find(
    (alumno) => alumno.nombre === nombreBuscar
  );
  if (alumnoEncontrado) {
    document.write(
      "<h1>Calificación de " +
        nombreBuscar +
        ": " +
        alumnoEncontrado.calificacion +
        "</h1>"
    );
  } else {
    alert("Alumno no registrado.");
  }
  if (alumnos.length === 0) {
    alert("No se han introducido nombres.");
  }
}
