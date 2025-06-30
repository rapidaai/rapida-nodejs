import { defineConfig } from "tsup";
export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  sourcemap: true,
  target: "node18",
  platform: "node",
  esbuildOptions(options) {
    options.alias = {
      "@/rapida": "./src",
    };
  },
});
