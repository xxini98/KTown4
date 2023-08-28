let photoSwiper = new Swiper('.swiper.is-photo', {
    effect: 'flip',
    loop: true,
    grabCursor: true,
    speed: 800,
    slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // on: {
    //     transitionProgress: function (swiper) {
    //         for (let i = 0; i < swiper.slides.length; i++) {
    //             const slide = swiper.slides[i];
    //             const progress = slide.progress;
    //             const opacity = 1 - Math.abs(progress);
    //             slide.style.opacity = opacity;
    //         }
    //     },
    // },
});

let contentSwiper = new Swiper('.swiper.is-content', {
    effect: 'fade',
    fadeEffect: {
        crossFade: true,
    },
    loop: true,
    grabCursor: true,
    speed: 800,
    slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

photoSwiper.controller.control = contentSwiper;
contentSwiper.controller.control = photoSwiper;
