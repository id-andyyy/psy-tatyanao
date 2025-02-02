const swiper = new Swiper(".edu-slider", {
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  simulateTouch: false,
  slidesPerView: 1,
  watchOverflow: true,
  loop: true,

  speed: 300,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

export default swiper;
