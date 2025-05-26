import { defineConfig } from "vite";
import type { AliasOptions } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

import path from "path";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      //   "@components": path.resolve(__dirname, "./src/components"),
      // },
      "@components": path.resolve(__dirname, "./src/components"),
    } as AliasOptions,
  },
  plugins: [react(), tailwindcss()],
});
