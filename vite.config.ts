import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "@nabla/vite-plugin-eslint";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      eslint({
        eslintOptions: { cache: false },
      }),
    ],
  };
});
