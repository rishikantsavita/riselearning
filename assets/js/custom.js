// header start

// fixed
$(window).scroll(function () {
  if ($(window).scrollTop() >= 70) {
    $(".header").addClass("fixed");
  } else {
    $(".header").removeClass("fixed");
  }
});

(function ($) {
  "use strict";

  // Sticky Menu
  $(window).scroll(function () {
    if ($("header").offset().top > 10) {
      $(".top-header").addClass("hide");
      $(".navigation").addClass("nav-bg");
    } else {
      $(".top-header").removeClass("hide");
      $(".navigation").removeClass("nav-bg");
    }
  });
})(jQuery);

// Banner Details slider
$(".hero-owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// current page ke according active class set karega
var currentPage = window.location.pathname.split("/").pop();

$(".navbar-nav .nav-item a").each(function () {
  var linkPage = $(this).attr("href");

  if (linkPage == currentPage) {
    $(".navbar-nav .nav-item").removeClass("active");
    $(this).parent().addClass("active");
  }
});

// header end

// Banner Details slider
$(".bandel-owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// ///////////

const counters = document.querySelectorAll(".cnt");

counters.forEach((counter) => {
  let target = +counter.dataset.n;
  let count = 0;

  let update = () => {
    count += target / 100;

    if (count < target) {
      counter.innerText = Math.floor(count);

      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".home-stat-number");

  counters.forEach((counter) => {
    let target = +counter.getAttribute("data-target");
    let count = 0;
    let speed = target / 100;

    function updateCounter() {
      count += speed;

      if (count < target) {
        counter.innerText =
          Math.ceil(count) + (counter.innerText.includes("%") ? "%" : "+");
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText =
          target + (counter.innerText.includes("%") ? "%" : "+");
      }
    }

    updateCounter();
  });
});
