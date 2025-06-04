$().ready(function () {
  $("#mercurio").click(function () {
    $("#imagen").attr("src", "mercurio.jpg");
  });
  $("#venus").click(function () {
    $("#imagen").attr("src", "venus.jpg");
  });
  $("#tierra").click(function () {
    $("#imagen").attr("src", "tierra.jpg");
  });
  $("#marte").click(function () {
    $("#imagen").attr("src", "marte.jpg");
  });
});
