export default function Categories(data) {
  return `
    <section class="
      w-full
      mt-8
      px-3
      md:px-4
    ">

      <div class="
        max-w-[1400px]
        mx-auto
      ">

        <h2 class="
          text-lg
          md:text-xl
          font-bold
          text-gray-800
          mb-5
          md:mb-6
        ">
          ${data.title}
        </h2>


        <div class="
          grid
          grid-cols-3
          sm:grid-cols-5
          md:grid-cols-8
          lg:grid-cols-9
          gap-y-7
          md:gap-y-8
          gap-x-3
          md:gap-x-2
        ">


          ${data.categories
            .map(
              (category) => `
                <div class="
                  flex
                  flex-col
                  items-center
                  justify-start
                  cursor-pointer
                  min-w-0
                ">


                  <img
                    src="/digikala-web3${category.image}"
                    alt="${category.title}"
                    class="
                      w-20
                      h-20
                      sm:w-24
                      sm:h-24
                      md:w-28
                      md:h-28
                      object-cover
                      rounded-full
                    "
                  >


                  <span class="
                    mt-3
                    text-xs
                    md:text-sm
                    text-gray-700
                    text-center
                    leading-5
                    md:leading-6
                    break-words
                  ">
                    ${category.title}
                  </span>


                </div>
              `,
            )
            .join("")}


        </div>


      </div>


    </section>
  `;
}