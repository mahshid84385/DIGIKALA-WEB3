export default function PromotionalBanners(data) {
  return `
    <section class="w-full  mt-8 px-4">
      <div class="
        max-w-[1400px]
        mx-auto
      ">

        <div class="
          grid
          grid-cols-2
          gap-3
        ">

          ${data
            .map(
              (banner) => `
                <a
                  href="${banner.link}"
                  class="
                    block
                    overflow-hidden
                    rounded-xl
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

      </div>
    </section>
  `;
}