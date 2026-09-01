import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function eyelashEnhancersInit() {
  new Swiper(".eyelashEnhancersSwiper", {
    modules: [Navigation],

    rtl: true,

    slidesPerView: 6.5,

    spaceBetween: 8,

    navigation: {
      nextEl: ".eyelashEnhancers-prev",
      prevEl: ".eyelashEnhancers-next",
    },

    breakpoints: {

      1280: {
        slidesPerView: 6.5,
        spaceBetween: 8,
      },


      1024: {
        slidesPerView: 5.5,
        spaceBetween: 8,
      },


      768: {
        slidesPerView: 4,
        spaceBetween: 8,
      },


      480: {
        slidesPerView: 2.2,
        spaceBetween: 8,
      },


      0: {
        slidesPerView: 1.5,
        spaceBetween: 8,
      },

    },

  });
}