$(document).ready(function () {
  // Custom navabar Hide Show
  $(".toggle").on("click", function () {
    var icon = $(this).find("i");

    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-solid fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }

    $(".custom-nav").slideToggle();
  });
});
