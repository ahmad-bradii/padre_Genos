import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tanStackRouterVite from "@tanstack/router-plugin/vite"; // Updated import statement

const port = 3000; // change with you curent port
// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: `http://localhost:${port}`,
  //       changeOrigin: true,
  //     },
  //     "/public": {
  //       target: `http://localhost:${port}`,
  //       changeOrigin: true,
  //     },
  //   },
  // },
  plugins: [tanStackRouterVite(), react()],
  test: {
    environment: "happy-dom",
  },
});
