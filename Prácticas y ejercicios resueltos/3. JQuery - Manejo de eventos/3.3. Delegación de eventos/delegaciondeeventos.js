$().ready(function () {
  $("ul").on("click", "li", function () {
    console.log("Se ha tachado " + $(this).text() + " de la lista.");
    $(this).css("text-decoration", "line-through");
  });
  $("#formulario").submit(function (event) {
    if ($("#formulario input:text").val() == "") {
      alert("No se ha introducido ningún elemento.");
    } else {
      $("ul").append($("<li>", { text: $("input:text").val() }));
    }
    event.preventDefault(); //Previene que la página se recargue
  });
});
