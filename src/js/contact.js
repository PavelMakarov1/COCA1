import 'swiper/css';
import 'swiper/css/autoplay';
import '../assets/scss/contact.scss';
import './components/footer.js';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useMap } from './components/contact/contactMap.js';
import { usePhone } from './components/contact/phone.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { usePartnersSlider } from './components/home/slider.js';

useTheme();
useBurger();
useMap();
usePhone();
useTestimonialsSlider();
usePartnersSlider();
