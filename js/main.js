const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  effect: "cards",
  grabCursor: true,
  centerdSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: true,
    disableOnInteraction: true,
  },
  mousewheel: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 700,
});

// BURGER MENU
