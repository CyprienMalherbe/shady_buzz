import vue from "@vitejs/plugin-vue"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

export default defineConfig(({ command }) => ({
  base: "/",
  plugins: [vue()],
  server: {
    port: 5174,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
}));
