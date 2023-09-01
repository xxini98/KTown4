$(function () {
    let photoSwiper = new Swiper('.swiper.is-photo', {
        effect: 'flip',
        loop: true,
        grabCursor: true,
        speed: 1000,
        slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    let contentSwiper = new Swiper('.swiper.is-content', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        loop: true,
        grabCursor: true,
        speed: 1000,
        slidesPerView: 1, // 콘텐츠 슬라이더도 1개씩 보이도록 설정
        navigation: {
            nextEl: '.swiper-main-next',
            prevEl: '.swiper-main-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    photoSwiper.controller.control = contentSwiper;
    contentSwiper.controller.control = photoSwiper;

    $('.slider_pre-tag a').on('click', function () {
        $('.slider_pre_tagline').removeClass('on');
    });
    $('.slider_pre-tag a').on('click', function () {
        $(this).addClass('on');
    });

    var preSwiper = new Swiper('.swiper.is-preimg', {
        slidesPerView: 3,
        spaceBetween: 30,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-arrow-next',
            prevEl: '.swiper-arrow-prev',
        },
    });

    let brandSwiper = new Swiper('.swiper.is-brand', {
        slidesPerView: 5,
        spaceBetween: 30,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
        },
    });
});
