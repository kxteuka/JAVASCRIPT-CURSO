$().ready(function () {
  $("#btn_primero").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").first().addClass("sel");
  });
  $("#btn_ultimo").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").last().addClass("sel");
  });
  $("#btn_tercero").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").eq(3).addClass("sel");
  });
  $("#btn_siguiente").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").eq(3).next().addClass("sel");
  });
  $("#btn_anterior").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").eq(3).prev().addClass("sel");
  });
  $("#btn_todos_siguientes").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").eq(3).nextAll().addClass("sel");
  });
  $("#btn_todos_ultimos").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li").eq(3).prevAll().addClass("sel");
  });
  $("#btn_pares").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li:odd").addClass("sel");
  });
  $("#btn_impares").click(function (event) {
    $("ol li").removeClass("sel");
    $("ol li:even").addClass("sel");
  });
});
