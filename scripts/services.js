var swiper = new Swiper(".mySwiper", {
  slidesPerView: (window.innerWidth > 765 ? 2 : 1),
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});
