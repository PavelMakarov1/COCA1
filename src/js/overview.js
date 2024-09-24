import 'swiper/css';
import '/scss/overview.scss';
import './components/footer.js';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { useSwiperOverview } from './components/home/slider.js';
import { useSwiperOverviewBot } from './components/home/slider.js';

useTheme();
useBurger();
useTestimonialsSlider();
useSwiperOverview();
useSwiperOverviewBot();
