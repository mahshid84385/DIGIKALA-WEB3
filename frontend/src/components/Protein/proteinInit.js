import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function proteinInit() {
  const swiperElement = document.querySelector(".proteinSwiper");

  if (!swiperElement) {
    return;
  }

  new Swiper(".proteinSwiper", {
    modules: [Navigation],

    rtl: true,

    slidesPerView: 6,

    spaceBetween: 10,

    navigation: {
      nextEl: ".protein-prev",
      prevEl: ".protein-next",
    },

    breakpoints: {

      0: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },

      480: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },

      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },

      1280: {
        slidesPerView: 6,
        spaceBetween: 10,
      },

    },
  });
}