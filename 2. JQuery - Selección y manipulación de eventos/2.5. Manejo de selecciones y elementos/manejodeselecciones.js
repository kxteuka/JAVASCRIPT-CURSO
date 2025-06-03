$().ready(function () {
  $(":button").click(function () {
    console.log($("li").text());
    console.log($("#lista_mono").val());
    //Cambiar el color de fondo de la lista
    $("#lista_mono").css("background-color", "#0000ff");
    $(":checkbox:checked").each(function () {
      console.log($(this).val());
    });
  });
  $("li").click(function () {
    //Indice respecto de li dentro de form
    console.log(
      "Sin argumento: " + $(this).text() + " en posicion: " + $(this).index()
    );
  });
  $("li").click(function () {
    //Indice respecto de li dentro de la pagina
    var $elemento = $(this);
    console.log(
      "Indice respecto de li: " +
        $elemento.text() +
        " en posicion: " +
        $("li").index($elemento)
    );
  });
});
