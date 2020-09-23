//animated header
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

//scroll smooth
$(document).on("click", ".scrollto", function (e) {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    var target = $(this.hash);
    if (target.length) {
      e.preventDefault();

      var scrollto = target.offset().top - 50;
      if ($(this).attr("href") == "#header") {
        scrollto = 0;
      }
      $("html, body").animate(
        {
          scrollTop: scrollto,
        },
        1500,
        "easeInOutExpo"
      );
    }
  }
});

//animasi aos
AOS.init({
  duration: 1000,
  once: true,
});

//venobox

$(window).on("load", function () {
  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $(".venobox").venobox({
      share: false,
    });
  });
});
