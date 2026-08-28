export default function Brands(data) {
  return `
    <section
      dir="rtl"
      class="
        max-w-[1400px]
        mx-auto
        bg-white
        rounded-2xl
        border
        border-gray-200
        px-3
        md:px-4
        py-4
        md:py-5
        relative
        mt-6
      "
    >

      <!-- عنوان بخش -->
      <div class="
        flex
        items-center
        justify-start
        gap-2
        mb-4
        md:mb-5
        px-2
      ">

        <i class="
          fa-solid
          fa-star
          text-gray-700
          text-base
          md:text-lg
        "></i>

        <h2 class="
          text-lg
          md:text-xl
          font-bold
          text-gray-800
        ">
          محبوب‌ترین برندها
        </h2>

      </div>


      <!-- اسلایدر برندها -->
      <div class="
        relative
        px-3
        md:px-8
      ">

        <div class="
          swiper
          brandsSwiper
          overflow-hidden
        ">

          <div class="swiper-wrapper">


            ${data.brands
              .map(
                (brand) => `
                  <div
                    class="
                      swiper-slide
                      h-[100px]
                      md:h-[115px]
                    "
                  >

                    <div
                      class="
                        w-full
                        h-full
                        bg-white
                        border
                        border-gray-100
                        rounded-xl
                        flex
                        flex-col
                        items-center
                        justify-center
                        px-2
                        md:px-3
                        py-2
                        md:py-3
                        transition
                        duration-200
                        hover:shadow-sm
                        hover:border-gray-200
                      "
                    >


                      <div class="
                        w-full
                        h-[60px]
                        md:h-[70px]
                        flex
                        items-center
                        justify-center
                      ">


                        <img
                          src="/digikala-web3${brand.image}"
                          alt="${brand.name}"
                          class="
                            max-w-[90px]
                            md:max-w-[115px]
                            max-h-[55px]
                            md:max-h-[70px]
                            object-contain
                          "
                        >


                      </div>


                      <div class="
                        text-xs
                        md:text-sm
                        text-gray-700
                        text-center
                        whitespace-nowrap
                        overflow-hidden
                        text-ellipsis
                        max-w-full
                      ">
                        ${brand.name}
                      </div>


                    </div>


                  </div>
                `,
              )
              .join("")}


          </div>


        </div>


        <button class="
          brands-prev
          absolute
          left-2
          md:left-[260px]
          top-1/2
          -translate-y-1/2
          z-30
          bg-white
          w-8
          h-8
          md:w-10
          md:h-10
          rounded-full
          shadow
          flex
          items-center
          justify-center
          text-lg
          md:text-xl
        ">
          ‹
        </button>


        <button class="
          brands-next
          absolute
          left-10
          md:left-[210px]
          top-1/2
          -translate-y-1/2
          z-30
          bg-white
          w-8
          h-8
          md:w-10
          md:h-10
          rounded-full
          shadow
          flex
          items-center
          justify-center
          text-lg
          md:text-xl
        ">
          ›
        </button>


      </div>


    </section>
  `;
}