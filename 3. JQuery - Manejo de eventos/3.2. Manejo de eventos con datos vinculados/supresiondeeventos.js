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
  $("input:checkbox")
    .eq(1)
    .change(function (event) {
      if ($(this).prop("checked")) {
        $(document).mousemove(function (event) {
          $("p#mouse-coordinates").text(
            "Coordenadas del ratón: " + event.pageX + ", " + event.pageY
          );
        });
      } else {
        $(document).off("mousemove");
        $("p#mouse-coordinates").text("");
      }
    });
});
