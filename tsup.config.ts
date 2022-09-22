import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  minify: false,
  clean: true,
  // dts: true,
  sourcemap: true,
  format: ['esm', 'cjs'],
  env: { NODE_ENV: 'development' },
  treeshake: true,
});
