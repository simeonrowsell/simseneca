// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    mdx()
  ],
  site: "https://simseneca.design",
  adapter: netlify()
});