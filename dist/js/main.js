$(function () {
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
      nextEl: ".swiper-main-next",
      prevEl: ".swiper-main-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  photoSwiper.controller.control = contentSwiper;
  contentSwiper.controller.control = photoSwiper;

  var preSwiper = new Swiper(".swiper.is-preimg", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
    },
    breakpoints: {
      428: {
        centeredSlides: true,
        slidesPerView: 2.1,
        // slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 50,
      },
      769: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1023: {
        // centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1399: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1599: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1999: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  let brandSwiper = new Swiper(".swiper.is-brand", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});
