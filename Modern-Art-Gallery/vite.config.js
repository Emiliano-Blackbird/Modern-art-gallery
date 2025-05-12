// @ts-check
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Modern-art-gallery/',
  build: {
    outDir: 'dist', // Carpeta de salida
    cssCodeSplit: true, // Optimiza el CSS
  }
});
