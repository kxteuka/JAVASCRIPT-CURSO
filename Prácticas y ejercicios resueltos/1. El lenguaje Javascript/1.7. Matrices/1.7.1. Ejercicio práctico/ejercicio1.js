var socios = new Array();
var continuar = true;
while (continuar) {
  var nombre = prompt("Introduce el nombre del socio:");
  if (nombre) {
    socios.push(nombre);
    continuar = confirm("¿Desea continuar introduciendo nombres?");
  } else {
    continuar = false;
  }
}
let totalSocios = socios.length;
let tabla = "<table border='1'><tr><th>Nombre</th></tr>";
for (let i = 0; i < totalSocios; i++) {
  tabla += "<tr><td>" + socios[i] + "</td></tr>";
}
tabla += "</table>";
document.write("<h1>Lista de Socios</h1>");
document.write(tabla);
document.write("<p>Total de socios: " + totalSocios + "</p>");
if (totalSocios === 0) {
  document.write("<p>No se han introducido nombres.</p>");
} else {
  document.write("<p>Se han introducido " + totalSocios + " nombres.</p>");
}
