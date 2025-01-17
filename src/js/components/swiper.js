import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.feedbeack__swiper', {
  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.feedbeack__next',
    prevEl: '.feedbeack__prev'
  }
});
