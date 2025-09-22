var swiper = new Swiper(".multiple-slide-carousel", {
   loop: true,
   slidesPerView: 3,
   spaceBetween: 0,
   navigation: {
     nextEl: ".multiple-slide-carousel .swiper-button-next",
     prevEl: ".multiple-slide-carousel .swiper-button-prev",
   },
   breakpoints: {
    850: {
        slidesPerView: 4,
        spaceBetween: 5
    },
    481: {
        slidesPerView: 2,
        spaceBetween: 5
    },
    0: {
        slidesPerView: 1,
        spaceBetween: 0
    }
  }
 });