$(function () {
  $("button").click(function () {
    $("#parrafo").text("Seleccion por ID");
    $(".estilo").text("Seleccion por estilo");
    $(".filas").text("Filas que no son la 0");
    $('[name="saludos"]').text("Seleccion por atributo");
    $("div:has(table)").css({ "background-color": "#ffff12" });
    $("tr:first").css({ "background-color": "#ff0000" });
    $("tr:eq(2)").css({ "background-color": "#0000ff" });
    $("tr:odd").css({ "background-color": "#00ff00" });
  });
});
