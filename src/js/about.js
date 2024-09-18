import 'swiper/css';
import '../assets/scss/about.scss';
import './components/footer.js';
import 'swiper/css/pagination';


// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { useTabSwiper } from './components/home/slider.js';
import { useTabs } from './components/about/tabs.js';

useTheme();
useBurger();
useTestimonialsSlider();
useTabSwiper();
useTabs();
