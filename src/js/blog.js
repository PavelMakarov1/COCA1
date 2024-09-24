
import '/scss/blog.scss';
import './components/footer.js';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useTestimonialsSlider } from './components/home/slider.js';

useTheme();
useBurger();
useTestimonialsSlider();
