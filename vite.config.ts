import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@styles": "/src/assets/scss",
      "@fonts": "/src/assets/fonts",
    },
  },
});
