var meses = {
  Enero: 0,
  Febrero: 0,
  Marzo: 0,
  Abril: 0,
  Mayo: 0,
  Junio: 0,
  Agosto: 0,
  Septiembre: 0,
  Octubre: 0,
  Noviembre: 0,
  Diciembre: 0,
};
var mes = prompt("Introduce un mes a registrar:");
var continuar = true;
if (mes == null) {
  alert("Accion cancelada por el usuario.");
  continuar = false;
} else {
  while (mes in meses == false) {
    alert("Mes inválido. Introduce un mes válido.");
    var mes = prompt("Introduce un mes a registrar:");
  }
}

if (mes in meses) {
  while (continuar == true) {
    var precipitaciones = parseFloat(
      prompt(
        "Introduce la cantidad de precipitaciones en litros/m2 del mes " +
          mes +
          ":"
      )
    );
    while (isNaN(precipitaciones) || precipitaciones < 0) {
      alert(
        "Cantidad de precipitaciones inválida. Introduce un número positivo."
      );
      var precipitaciones = parseFloat(
        prompt(
          "Introduce la cantidad de precipitaciones en litros/m2 del mes " +
            mes +
            ":"
        )
      );
    }
    meses[mes] = precipitaciones;
    var mes = prompt("Introduce otro mes a registrar:");
    while (mes in meses == false && mes != null) {
      alert("Mes inválido. Introduce un mes válido.");
      var mes = prompt("Introduce otro mes a registrar:");
    }
    if (mes == null) {
      continuar = false;
    }
  }
}
document.write(
  "<h1>Precipitaciones registradas</h1>" +
    "<table border='1'>" +
    "<tr><th>Mes</th><th>Precipitaciones</th></tr>"
);
for (mes in meses) {
  if (meses[mes] > 0) {
    document.write(
      "<tr><td>" + mes + "</td><td>" + meses[mes] + " litros/m2" + "</td></tr>"
    );
  }
}
("</table>");
