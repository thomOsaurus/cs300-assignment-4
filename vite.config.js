import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/cs300-assignment-4/",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test-setup.js"
  }
});
