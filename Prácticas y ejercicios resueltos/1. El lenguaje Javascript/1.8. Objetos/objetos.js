function guineaUser(
  _trabajador,
  _numempleado,
  _sueldo,
  _vacaciones,
  _horasextra
) {
  this.trabajador = _trabajador;
  this.numempleado = _numempleado;
  this.sueldo = _sueldo;
  this.vacaciones = _vacaciones;
  this.horasextra = _horasextra;

  this.subidasueldo = function (subida) {
    this.sueldo = this.sueldo + subida;
  };
  this.sumarhoras = function (horasasumar) {
    this.horasextra = this.horasextra + horasasumar;
  };
  this.restarhoras = function (horasarestar) {
    this.horasextra = this.horasextra + horasarestar;
  };
  this.sumarvacaciones = function (vacacionesasumar) {
    this.vacaciones = this.vacaciones + vacacionesasumar;
  };
  this.restarvacaciones = function (vacacionesarestar) {
    this.vacaciones = this.vacaciones - vacacionesarestar;
  };
}

var trabajadores = new Array();
trabajadores[0] = new guineaUser("Ivan", 0, 9999.99, 30, 0);
trabajadores[1] = new guineaUser("Juan", 1, 1000, 30, 0);

trabajadores[0].sumarhoras(100);
trabajadores[1].restarvacaciones(2);

console.log(trabajadores[0].vacaciones);
console.log(trabajadores[1].horasextra);

var i = 0;
var obj;

document.write("<table border='1'>");
document.write("<tr>");
document.write("<td>Trabajador</td>");
document.write("<td>Numero de empleado</td>");
document.write("<td>Sueldo</td>");
document.write("<td>Vacaciones</td>");
document.write("<td>Horas extra</td>");
document.write("</tr>");

for (i = 0; i < trabajadores.length; i++) {
  obj = trabajadores[i];

  document.write("<tr>");
  document.write("<td>" + obj.trabajador + "</td>");
  document.write("<td>" + obj.numempleado + "</td>");
  document.write("<td>" + obj.sueldo + "</td>");
  document.write("<td>" + obj.vacaciones + "</td>");
  document.write("<td>" + obj.horasextra + "</td>");
  document.write("</tr>");
}
document.write("</table>");
