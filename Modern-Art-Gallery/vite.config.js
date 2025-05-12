// @ts-check
import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Asegura rutas relativas si lo usarás en otro servidor
  build: {
    outDir: 'dist', // Carpeta de salida
    cssCodeSplit: true, // Optimiza el CSS
  }
});
