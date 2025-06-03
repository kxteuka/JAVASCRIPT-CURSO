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
    $("#imagen").animate(
      {
        down: "-=100px",
        opacity: 0.0,
      },
      1000
    );
  });
  $("#mostrar").click(function (event) {
    $("#imagen").animate(
      {
        left: "+=300px",
        opacity: 1.0,
      },
      1000,
      function () {
        alert("Animacion completada!");
      }
    );
  });
  $(window).mousedown(function (event) {
    var ancho_imagen = $("#imagen").width();
    var alto_imagen = $("#imagen").height();
    var x = event.pageX;
    var y = event.pageY;
    $("#imagen").animate(
      {
        top: y - alto_imagen / 2,
        left: x - ancho_imagen / 2,
      },
      1000
    );
  });
});
