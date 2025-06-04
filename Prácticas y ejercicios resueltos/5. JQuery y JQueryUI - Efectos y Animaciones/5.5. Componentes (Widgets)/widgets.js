$(function () {
  $("#spinner").spinner({
    min: 5,
    max: 2500,
    step: 25,
  });
  $("#accordion").accordion();
  $("#tabs").tabs();
  var cuadro_dialogo = $("#dialogo").dialog({
    autoOpen: false,
    height: "auto",
    width: "auto",
    modal: true,
    buttons: {
      Registrar: function () {
        console.log("Nombre: " + $("#nombre").val());
        console.log("Mail: " + $("#correo").val());
        $(this).dialog("close");
      },
    },
  });
  $("#boton").click(function () {
    cuadro_dialogo.dialog("open");
  });
  $("#menu").menu({
    select: function (event, ui) {
      console.log(ui.item.text());
    },
  });
  $("#select").selectmenu();
});
