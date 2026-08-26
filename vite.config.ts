import { defineConfig } from "vite-plus";

export default defineConfig({
  lint: {
    ignorePatterns: ["**/dist/**", ".github/workflows/**", ".pre-commit-config.yaml"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    ignorePatterns: ["**/dist/**", ".github/workflows/**", ".pre-commit-config.yaml"],
  },
});
