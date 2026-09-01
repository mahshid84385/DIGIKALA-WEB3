export default function CategoryBanners(data) {
  return `
    <section class="w-full mt-8 px-4">
      <div class="
        max-w-[1400px]
        mx-auto
        grid
        grid-cols-2
        gap-3
      ">

        ${data.banners
          .map(
            (banner) => `
              <a
                href="${banner.link}"
                class="
                  block
                  overflow-hidden
                  rounded-2xl
                "
              >
                <img
                  src="/digikala-web3${banner.image}"
                  alt=""
                  class="
                    w-full
                    h-auto
                    block
                    object-cover
                  "
                >
              </a>
            `,
          )
          .join("")}

      </div>
    </section>
  `;
}