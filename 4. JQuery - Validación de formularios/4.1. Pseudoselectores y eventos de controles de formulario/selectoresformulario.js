$(function () {
  var $valores = $("input:text");
  var $resultado = $("#resultado");
  $valores.focus(function () {
    $(this).css("background-color", "blue");
  });
  $valores.blur(function () {
    $(this).css("background-color", "white");
  });
  $resultado.focus(function () {
    $(this).css("background-color", "red");
  });
  $resultado.blur(function () {
    $(this).css("background-color", "white");
    $(this).css("border", "2px solid green");
  });
  $("input:button").click(function () {
    var sumatorio = 0;
    $valores.each(function () {
      sumatorio += parseInt($(this).val());
      $resultado.val(sumatorio);
    });
  });
});
