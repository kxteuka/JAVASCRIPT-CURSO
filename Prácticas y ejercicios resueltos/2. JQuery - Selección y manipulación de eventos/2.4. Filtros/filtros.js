$(function () {
  $("ul li")
    .filter(function (indice, elemento) {
      return Number($(elemento).text()) % 2 == 0;
    })
    .css("background-color", "#ffff00");

  $("input[type=radio]").click(function () {
    if ($("#No").is(":checked")) {
      alert("Se marcó No");
      $("#No").prop("checked", false);
    }
    if ($("#Si").is(":checked")) {
      alert("Se marcó Sí");
      $("#Si").prop("checked", false);
    }
  });
});
