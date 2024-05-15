// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.hero-swiper__swiper', {
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 20,
  centeredSlidesBounds: true,
  breakpoints: {
    // when window width is >= 320px
    1: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    400: {
      slidesPerView: 1.5,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1080: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  },
});
