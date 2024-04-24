import react from "@vitejs/plugin-react";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./"),
    },
  },
  test: {
    environment: "jsdom",
    include: ["**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: "./vitest.setup.ts",
    coverage: {
      enabled: true,
      provider: "istanbul",
      reporter: ["text", "json", "html", "json-summary"],
    },
  },
});
