$(function () {
  $(".module").hide().first().show(); //1

  $("<ul class='module-list'></ul>").insertBefore(".module:first");

  $(".module").each(function () {
    var title = $(this).find("h2").text();
    $(".module-list").append("<li>" + title + "</li>"); //3
  });

  $(document).on("click", ".module-list li", function () {
    var index = $(this).index();
    $(".module").hide().eq(index).show();
    $(".module-list li").removeClass("current").eq(index).addClass("current");
  });
});
