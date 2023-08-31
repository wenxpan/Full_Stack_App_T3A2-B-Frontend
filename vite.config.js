import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: "true",
    coverage: {
      reportsDirectory: "./src/tests/coverage",
      all: true,
      // provider: "istanbul"
      provider: "v8"
    }
  }
})
