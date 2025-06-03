$().ready(function () {
  $("#confirmarpago").click(function () {
    comprobarRegistro();
  });
});

function comprobarRegistro() {
  var idiomaseleccionado = $("#idiomas option:selected").text();
  var metodoPago = $("#metodosPago option:selected").text();
  if (metodoPago) {
    alert(
      "Se ha completado el registro. Has seleccionado el idioma: " +
        idiomaseleccionado +
        ". Metodo de pago: " +
        metodoPago +
        "."
    );
  } else {
    alert("No has seleccionado ningun metodo de pago");
  }
}
