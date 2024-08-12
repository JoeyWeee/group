import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.PORT || 5173,
    proxy: {
      '/api': {
        target: `http://localhost:3000`, // 确保此端口与后端服务一致
        changeOrigin: true,
      },
      '/auth': {
        target: `http://localhost:3000`,
        changeOrigin: true,
      },
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "./src/main.jsx",
      outDir: 'dist/app', // 确保这是一个有效路径
    },
  },
});
