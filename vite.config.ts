import { defineConfig } from "vite";
import type { AliasOptions } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    } as AliasOptions,
  },
  plugins: [react(), tailwindcss()],
});
