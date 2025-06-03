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
    $("#imagen").parent().toggleClass("fondoimagen");
    $("#coordenadas")
      .text(event.pageX + ", " + event.pageY)
      .animate(
        {
          width: "175px",
          height: "100px",
          backgroundColor: "#ff0000",
          fontSize: "40px",
        },
        500,
        function () {
          $("#imagen").effect(
            "shake",
            {
              times: 3,
              distance: 20,
            },
            function () {
              alert("La imagen ha temblado");
            }
          );
        }
      );
  });
  $("#imagen").mouseup(function (event) {
    $("#coordenadas")
      .text(event.pageX + ", " + event.pageY)
      .animate(
        {
          width: "175px",
          height: "150px",
          backgroundColor: "#ffffff",
          fontSize: "20px",
        },
        500,
        function () {
          $("#imagen").effect(
            "bounce",
            {
              times: 3,
              distance: 20,
            },
            function () {
              alert("La imagen ha rebotado");
            }
          );
        }
      );
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
    $("#imagen").effect("pulsate", { times: 3 }, 1000, function () {
      alert("La imagen ha pulsado");
      $("#coordenadas").effect(
        "shake",
        {
          times: 3,
          distance: 20,
        },
        function () {
          alert("El texto ha temblado");
        }
      );
    });
  });
  $("#añadirestilo").click(function (event) {
    $("#imagen").addClass("newClass");
  });
  $("#eliminarestilo").click(function (event) {
    $("#imagen").removeClass("newClass");
  });
});
