$().ready(function () {
  $("button").click(function (event) {
    var color = $(this).data("color");
    $("body").css({ "background-color": color });
  });
});
