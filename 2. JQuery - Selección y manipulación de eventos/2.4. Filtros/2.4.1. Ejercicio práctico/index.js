$(function () {
  //Mostrar en la consola los elementos seleccionados
  console.log($("div.module"));
  console.log($("#myList li:eq(2)"));
  console.log($("label[for='q']"));
  console.log($("*[style*='visibility: hidden']"));
  console.log($("img[alt]"));
  console.log($("#fruits tbody tr:odd"));

  //1. Seleccionar todos los elementos div que poseen la clase “module”.
  $("div.module").css("background-color", "#ffff00");
  //2. Seleccionar el tercer ítem de la lista desordenada con id= #myList.
  $("#myList li:eq(2)").css("background-color", "#ffff00");
  //3. Seleccionar el elemento <label> cuyo atributo for es ‘q’ utilizando un selector de atributo.
  $("label[for='q']").css("background-color", "#ffff00");
  //4. Selecciona todos los elementos ocultos de la web (visibility = hidden).
  $(":hidden").css("background-color", "#ffff00");
  //5. Selecciona todas las imágenes presentes en la página con atributo alt.
  $("img[alt]").css("background-color", "#ffff00");
  //6. Seleccionar todas las filas impares del cuerpo de la tabla con id=’fruits’.
  $("#fruits tbody tr:odd").css("background-color", "#ffff00");
});
