$().ready(function () {
  function manejadora(event) {
    var color = event.data.color;
    $("body").css({ "background-color": color });
  }
  $("#btn_azul").on("click", { color: "#0000ff" }, manejadora);
  $("#btn_rojo").on("click", { color: "#ff0000" }, manejadora);
  $("#btn_verde").on("click", { color: "#00ff00" }, manejadora);
});
