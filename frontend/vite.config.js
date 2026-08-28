import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({

  base:"/digikala-web3/",

  plugins:[
    tailwindcss()
  ],

})