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
      bi: ['facebook', 'twitter-x', 'youtube', 'instagram', 'linkedin', 'github', 'behance','envelope-paper-heart','file-earmark-arrow-down', 'box-arrow-in-right', 'arrow-left', 'link-45deg'],
      simple: ['astro', 'css3', 'javascript', 'html5', 'tailwindcss', 'bootstrap', 'sass', 'github', 'figma', 'adobephotoshop', 'adobepremierepro', 'adobeillustrator', 'adobeaftereffects', 'adobeaudition', 'blender', 'moodle']
    }
  })]
});
