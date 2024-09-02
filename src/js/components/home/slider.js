import Swiper from 'swiper';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
        if (window.innerWidth <= 992) {
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
        modules: [Navigation],
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,

        navigation: {
            nextEl: '.testimonials__btn--prev',
            prevEl: '.testimonials__btn--next',
        },
    });
};
