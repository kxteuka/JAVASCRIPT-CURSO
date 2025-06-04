$().ready(function () {
  function manejadora(event) {
    if (event.target.id === "btn_azul") {
      $("body").css({ "background-color": "blue" });
    } else if (event.target.id === "btn_verde") {
      $("body").css({ "background-color": "green" });
    } else if (event.target.id === "btn_morado") {
      
      $("body").css({ "background-color": "purple" });
    } else if (event.target.id === "btn_rojo") {
      $("body").css({ "background-color": "red" });
    }
  }
  $("#btn_azul").click(manejadora);
  $("#btn_rojo").click(manejadora);
  $("#btn_verde").click(manejadora);
  $("#btn_morado").click(manejadora);
});
