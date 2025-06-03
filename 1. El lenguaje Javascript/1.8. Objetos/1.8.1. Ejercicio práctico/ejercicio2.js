function Corredor(_nombre, _tiempo) {
  this.nombre = _nombre;
  this.tiempo = _tiempo;
  this.calcularGanador = function () {
    var ganador = this[0];
    for (i = 1; i < this.length; i++) {
      if (this[i].tiempo < ganador.tiempo) {
        ganador = this[i];
      }
    }
    return ganador.nombre + " con " + ganador.tiempo + " segundos";
  };
}

var i = 0;
var corredores = new Array();
for (i = 0; i < 5; i++) {
  var nombre = prompt("Introduce el nombre del corredor " + (i + 1));
  var tiempo = prompt("Introduce el tiempo del corredor " + (i + 1));
  corredores[i] = new Corredor(nombre, tiempo);

  while (corredores[i].nombre == "" || corredores[i].tiempo == "") {
    alert("El nombre y el tiempo no pueden estar vacios.");
    nombre = prompt("Introduce el nombre del corredor " + (i + 1));
    tiempo = prompt("Introduce el tiempo del corredor " + (i + 1));
    corredores[i] = new Corredor(nombre, tiempo);
  }
}
corredores.calcularGanador = function () {
  var ganador = this[0];
  for (i = 1; i < this.length; i++) {
    if (this[i].tiempo < ganador.tiempo) {
      ganador = this[i];
    }
  }
  return ganador.nombre + " con " + ganador.tiempo + " segundos";
};

var i = 0;
document.write("<table border='1'>");
document.write("<tr>");
document.write("<td>Nombre del corredor</td>");
document.write("<td>Tiempo registrado</td>");
document.write("</tr>");

for (i = 0; i < corredores.length; i++) {
  document.write("<tr>");
  document.write("<td>" + corredores[i].nombre + "</td>");
  document.write("<td>" + corredores[i].tiempo + " segundos </td>");
  document.write("</tr>");
}
document.write("</table>");
document.write("El ganador es " + corredores.calcularGanador());
