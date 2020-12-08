new WOW().init();

// Main OwlCarousel
$(document).ready(function() {
  $('#feature-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 2,
        nav: false
      },
      992: {
        items: 3,
        // nav:true,
        loop: false
      }
    }
  })
});

// Carousel
$('.carousel').carousel({
  interval: 2000
});

// Team OwlCarousel
$(document).ready(function() {
  $('#team-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      767: {
        items: 2,
        nav: false
      },
      992: {
        items: 4,
        // nav:true,
        loop: false
      }
    }
  })
});
