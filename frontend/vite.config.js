import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/DIGIKALA-WEB3/",

  plugins: [tailwindcss()],
});
