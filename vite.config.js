import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tanStackRouterVite from "@tanstack/router-plugin/vite"; // Updated import statement

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://padre-genos-api-1.onrender.com/",
  //       changeOrigin: true,
  //     },
  //     "/public": {
  //       target: "https://padre-genos-api-1.onrender.com/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [tanStackRouterVite(), react()],
  test: {
    environment: "happy-dom",
  },
});
