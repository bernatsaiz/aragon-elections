// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Per GitHub Pages: si el repo és github.com/USER/eleccions-arago, la URL serà https://USER.github.io/eleccions-arago/
// Canvia 'eleccions-arago' si el teu repositori té un altre nom.
export default defineConfig({
  // URL final: https://bernatsaiz.github.io/aragon-elections/
  site: 'https://bernatsaiz.github.io/aragon-elections',
  base: '/aragon-elections/',
});
