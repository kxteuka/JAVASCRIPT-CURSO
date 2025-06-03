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
  });
  $("#ocultar").click(function (event) {
    $("#imagen").hide("explode", { pieces: 50 }, 1000, function () {
      alert("La imagen se ha ocultado");
    });
  });
  $("#mostrar").click(function (event) {
    $("#imagen").show("bounce", { times: 5 }, 1500, function () {
      alert("La imagen se ha mostrado");
    });
  });
  $("#pulsate").click(function (event) {
    $("#imagen").effect("pulsate", { times: 3 }, 5000, function () {
      alert("La imagen ha pulsado");
    });
  });
});
