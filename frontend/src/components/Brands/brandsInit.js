import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function brandsInit() {
  new Swiper(".brandsSwiper", {
    modules: [Navigation],

    rtl: true,

    slidesPerView: 8,

    spaceBetween: 12,

    navigation: {
      nextEl: ".brands-prev",
      prevEl: ".brands-next",
    },

    breakpoints: {

      1280: {
        slidesPerView: 8,
        spaceBetween: 12,
      },


      1024: {
        slidesPerView: 7,
        spaceBetween: 10,
      },


      768: {
        slidesPerView: 6,
        spaceBetween: 10,
      },


      480: {
        slidesPerView: 4,
        spaceBetween: 8,
      },


      0: {
        slidesPerView: 3,
        spaceBetween: 8,
      }

    },
  });
}