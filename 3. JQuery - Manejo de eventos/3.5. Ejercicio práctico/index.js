$(function () {
  $("#search input[type='text']").focus(function () {
    if ($(this).val() === "Enter search term") {
      $(this).val("").removeClass("hint");
    }
  });
  $("#search input[type='text']").blur(function () {
    if ($(this).val() === "") {
      $(this).val("Enter search term").addClass("hint");
    }
  });
});
