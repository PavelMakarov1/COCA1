import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useInsightSlider } from './components/slider.js';
import { usePartnersSlider } from './components/slider.js';
useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
