import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import '/scss/main.scss';
import './components/footer.js';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
    useInsightSlider,
    usePartnersSlider,
    useTestimonialsSlider,
} from './components/home/slider.js';
useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
