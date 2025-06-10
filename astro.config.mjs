// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import mdx from '@astrojs/mdx';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    mdx(),
    sanity({
      projectId: 'geds04ig',
      dataset: 'production',
      useCdn: false,
      apiVersion: "2025-06-09",
      studioBasePath: '/studio',
    }),
    react()
  ],
  site: "https://simseneca.design",
  output: 'static',
});