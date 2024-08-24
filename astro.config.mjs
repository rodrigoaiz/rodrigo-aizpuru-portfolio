import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  }), icon({
    include: {
      bi: ['facebook', 'twitter-x', 'youtube', 'instagram', 'box-arrow-in-right', 'usb-c']
    }
  })]
});