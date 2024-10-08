import 'swiper/css';
import '/scss/about.scss';
import './components/footer.js';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { useTabSwiper } from './components/home/slider.js';
import { useSwiperArticles } from './components/home/slider.js';
import { useTabs } from './components/about/tabs.js';

useTheme();
useBurger();
useTestimonialsSlider();
useTabSwiper();
useSwiperArticles();
useTabs();
