let photoSwiper = new Swiper(".swiper.is-photo", {
  effect: "flip",
  loop: true,
  grabCursor: true,
  speed: 1000,
  slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let contentSwiper = new Swiper(".swiper.is-content", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  grabCursor: true,
  speed: 1000,
  slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

photoSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = photoSwiper;
