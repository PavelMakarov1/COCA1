import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        modules: [Pagination],
        slidesPerView: 'auto',
        spaceBetween: 32,
        loop: true,
        centeredSlides: true,

        pagination: {
            el: '.insight__pagination',
            clickable: true,
        },

        breakpoints: {
            993: {
                centeredSlides: false,
            },
        },
    });
};

export const usePartnersSlider = () => {
    let partnersSlider = null;

    function checkWidth() {
        if (window.innerWidth <= 768) {
            if (!partnersSlider) {
                initSwiper();
            }
        } else {
            if (partnersSlider) {
                destroySwiper();
            }
        }
    }

    function initSwiper() {
        partnersSlider = new Swiper('.partners__slider', {
            modules: [Autoplay],
            speed: 1000,
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 15,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                451: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                651: {
                    slidesPerView: 3,
                },
            },
        });
    }

    function destroySwiper() {
        if (partnersSlider) {
            partnersSlider.destroy(true, true);
            partnersSlider = null;
        }
    }

    window.addEventListener('resize', checkWidth);
    checkWidth();
};

export const useTestimonialsSlider = () => {
    new Swiper('.testimonials__slider', {
        modules: [Navigation, EffectFade],
        slidesPerView: 1,
        spaceBetween: 22,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            prevEl: '.testimonials__btn--next',
            nextEl: '.testimonials__btn--prev',
        },
    });
};

export const useTabSwiper = () => {
    new Swiper('.hero__content-swiper', {
        modules: [Pagination],
        slidesPerView: 2.4,
        spaceBetween: 32,
        centeredSlides: false,

        pagination: {
            el: '.hero__content-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2.4,
                spaceBetween: 32,
                centeredSlides: false,
            },
            576: {
                slidesPerView: 1.9,
                spaceBetween: 20,
            },
            380: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
        },
    });
};
