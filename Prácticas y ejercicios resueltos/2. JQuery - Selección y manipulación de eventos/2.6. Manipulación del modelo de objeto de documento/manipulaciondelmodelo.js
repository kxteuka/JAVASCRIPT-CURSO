$().ready(function () {
  var opcion = 1;
  $("button").click(function () {
    $nueva_opcion = $("<li>", { text: opcion });
    $("ul").append($nueva_opcion);
    opcion++;
  });
  var opciones = ["1", "2", "3", "4", "5"];
  var elementos = ["Fuego", "Agua", "Luz", "Oscuridad", "Viento"];
  for (var i = 0; i < opciones.length; i++) {
    $nueva_opcion = $("<option>", { value: i, text: opciones[i] });
    $("#opciones").append($nueva_opcion);
  }
  $("#opciones").change(function () {
    var $opcion = $(this).val();
    $("#elementos").empty();
    for (var i = 0; i < elementos.length; i++) {
      if (i == $opcion) {
        $nueva_opcion = $("<option>", { value: i, text: elementos[i] });
        $("#elementos").append($nueva_opcion);
      }
    }
  });
  $("#eliminar").click(function () {
    $("#elementos option").remove();
    $("ul").empty();
    opcion = 1;
  });
});
