$().ready(function () {
  var opcion = 4;
  $("button").click(function () {
    $nueva_opcion = $("<li>", { text: "opcion" + opcion });
    $("ul").append($nueva_opcion);
    opcion++;
  });
});
