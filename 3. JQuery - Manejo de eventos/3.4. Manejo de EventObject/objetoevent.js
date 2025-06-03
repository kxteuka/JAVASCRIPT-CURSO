$().ready(function () {
  $("input:text")
    .keydown(function (event) {
      $(this).css({ "background-color": "yellow" });
      $("#imagen").prop("src", "gato2.png");
    })
    .keyup(function (event) {
      $(this).css({ "background-color": "white" });
      $("#imagen").prop("src", "gato1.png");
    })
    .keypress(function (event) {
      if (event.key == "Enter") {
        var valor = document.getElementById("text").value;
        $(this).css({ "background-color": "red" });
        $("body").append("<p>" + valor + "</p>");
        $("input:text").val("");
      }
    });
  $("#imagen").mousedown(function (event) {
    $("#coordenadas").text(event.pageX + ", " + event.pageY);
    $("#imagen").prop("src", "gato2.png");
  });
  $("#imagen").mouseup(function (event) {
    $("#imagen").prop("src", "gato1.png");
  });
});
