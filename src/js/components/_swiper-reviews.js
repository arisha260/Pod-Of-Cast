// Подключение свайпера
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.reviews__swiper', {
  slidesPerView: 2.5,
  // centeredSlides: true,
  spaceBetween: 20,
  // centeredSlidesBounds: true,
  navigation: {
    nextEl: '.reviews__btn-prev',
    prevEl: '.reviews__btn-next',
  },
  // breakpoints: {
  //   // when window width is >= 320px
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 10
  //   },
  //   // when window width is >= 480px
  //   480: {
  //     slidesPerView: 1,
  //     spaceBetween: 10
  //   },
  //   // when window width is >= 640px
  //   1070: {
  //     slidesPerView: 2,
  //     spaceBetween: 20
  //   },
  //   1080: {
  //     slidesPerView: 2.5,
  //     spaceBetween: 20
  //   }
  // }
});
