import '../assets/scss/pricing.scss';
import './components/footer.js';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTestimonialsSlider } from './components/home/slider.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';

useTheme();
useBurger();
useTestimonialsSlider();
usePriceSwitcher();
