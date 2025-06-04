$().ready(function () {
  $("#padre").find("p").addClass("seleccionado3");
  $("#hijo").parent().addClass("seleccionado");
  $("#nieto").parentsUntil("#padre").addClass("seleccionado2");
});
