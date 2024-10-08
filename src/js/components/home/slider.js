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
        slidesPerView: 2.7,
        spaceBetween: 32,
        centeredSlides: false,

        pagination: {
            el: '.hero__content-swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2.4,
                spaceBetween: 32,
                centeredSlides: false,
            },
            577: {
                slidesPerView: 1.9,
                spaceBetween: 20,
            },
            380: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
        },
    });
};

export const useSwiperArticles = () => {
    new Swiper('.articles__swiper', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 32,

        navigation: {
            nextEl: '.slides__button-prev',
            prevEl: '.slides__button-next',
        },

        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            993: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
        },
    });
};

export const useSwiperOverview = () => {
    new Swiper('.hero__swiper', {
        modules: [Navigation],
        slidesPerView: 2.5,
        spaceBetween: 32,

        navigation: {
            nextEl: '.hero__swiper-button-prev',
            prevEl: '.hero__swiper-button-next',
        },

        breakpoints: {
            1201: {
                slidesPerView: 2.5,
                spaceBetween: 32,
            },
            993: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            767: {
                slidesPerView: 1.9,
                spaceBetween: 20,
            },
            577: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            441: {
                slidesPerView: 1.3,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
        },
    });
};

export const useSwiperOverviewBot = () => {
    new Swiper('.team__swiper', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 32,

        navigation: {
            nextEl: '.team__swiper-button-prev',
            prevEl: '.team__swiper-button-next',
        },

        breakpoints: {
            993: {
                slidesPerView: 3,
                spaceBetween: 32,
            },
            769: {
                slidesPerView: 2.3,
                spaceBetween: 20,
            },
            621: {
                slidesPerView: 1.9,
                spaceBetween: 20,
            },
            451: {
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            320: {
                slidesPerView: 1.1,
                spaceBetween: 20,
            },
        },
    });
};
