import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tanStackRouterVite from "@tanstack/router-plugin/vite"; // Updated import statement

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
      "/public": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  plugins: [tanStackRouterVite(), react()],
  test: {
    environment: "happy-dom",
  },
});
