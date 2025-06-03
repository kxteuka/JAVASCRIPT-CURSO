$().ready(function () {
  $("input:checkbox").change(function (event) {
    if ($(this).prop("checked")) {
      $("button").click(function (event) {
        alert("BOTON PULSADO!");
      });
    } else {
      $("button").off("click");
    }
  });
  $("div").on({
    mouseenter: function () {
      alert("El puntero del ratón entra en la capa");
    },
    mouseleave: function () {
      alert("El puntero del ratón sale de la capa");
    },
  });
  $("body").on("click", function () {
    alert("Registrado click en el cuerpo del documento");
  });
});
