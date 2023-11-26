// Dit zorgt er voor dat de vode word uitgevoderd wanneer de pagina helemaal geladen is
$(document).ready(function () {
  // Custom navabar Hide Show
  // hiermee word een klik gebeurtenis listener element met de class "toggle" aangezet wanneer een element aangeklikt word word het uitgevoerd dus als je klikt op de gerescalede navbar dan opent deze functie
  $(".toggle").on("click", function () {
    var icon = $(this).find("i");
    // dit zorgt ervoor als het de klasse "Fa-bars" heeft betekent dat de navbar verborgen is en als het geen "fa-bars" heeft zal de navbar zichbaar worden"
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-solid fa-times");
    } else {
      icon.removeClass("fa-times").addClass("fa-bars");
    }
    // dit schakelt "custom nav" in of uit 
    $(".custom-nav").slideToggle();
  });
});
