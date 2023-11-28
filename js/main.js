const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "vertical",
  effect: "coverflow",
  mousewheel: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: true,
    desableOnInteraction: false,
  },
  speed: 700,
});

// BURGER MENU
