import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',  
  plugins: [vue()],
  server: {
    port: 3000 // Cambia '3000' por el puerto que desees
  },
});
