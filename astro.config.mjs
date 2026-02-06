// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Domini propi: bernatsaiz.com (apunta a GitHub Pages). El lloc es serveix a l’arrel, base: '/'
export default defineConfig({
  site: 'https://bernatsaiz.com',
  base: '/aragon-elections/',
  build: {
    // Inline els CSS al HTML perquè carreguin sempre (evita 404 del fitxer extern)
    inlineStylesheets: 'always',
  },
});
