import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Ensure Less is processed properly
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://f7fb-213-230-112-63.ngrok-free.app', // Replace with the actual API endpoint
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
