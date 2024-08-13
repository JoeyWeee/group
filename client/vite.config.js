import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: import.meta.env.PORT || 5173,
    proxy: {
      '/api': {
        target: `http://localhost:${import.meta.env.BACKEND_PORT || 3000}`, // 确保与 Express 端口一致
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:${import.meta.env.BACKEND_PORT || 3000}`,
        changeOrigin: true,
      },
      '/products': {
        target: `http://localhost:${import.meta.env.BACKEND_PORT || 3000}`,
        changeOrigin: true,
      }, 
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
      output: {
        dir: 'dist/app',
      },
    },
  },
});
