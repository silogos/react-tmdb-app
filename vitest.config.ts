import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setupTests.ts",
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: [
        "**/*.d.ts",
        "**/*.type.ts",
        "**/*.types.ts",
        "**/__mocks__/*.ts",
        "**/__mocks__/*.tsx",
      ],
      all: true,
      reporter: ["json", "html"],
      reportsDirectory: "./coverage",
    },
  },
});
