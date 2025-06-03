$().ready(function () {
  $("#btn_opcion_rojo").click(function (event) {
    $("ul").append(
      $("<li>", { text: "OPCION ROJO", class: "rojo" }).click(function (event) {
        console.log("ROJO");
      
      })
    );
  });
  $("#btn_opcion_azul").click(function (event) {
    $("ul").append(
      $("<li>", { text: "OPCION AZUL", class: "azul" }).on(
        "click",
        function (event) {
          console.log("AZUL");
        }
      )
    );
  });
  $("#btn_opcion_amarillo").click(function (event) {
    $("ul").append(
      $("<li>", { text: "OPCION AMARILLO", class: "amarillo" }).on(
        "click",
        function (event) {
          console.log("AMARILLO");
        }
      )
    );
  });
  $("#btn_opcion_morado").click(function (event) {
    $("ul").append(
      $("<li>", { text: "OPCION MORADO", class: "morado" }).on(
        "click",
        function (event) {
          console.log("MORADO");
        }
      )
    );
  });
});
