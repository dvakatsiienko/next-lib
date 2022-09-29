import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts', 'src/sum.ts', 'src/log.ts', 'src/Button.tsx', 'src/ButtonSimple.tsx'],
    // entry: ['src/ButtonSimple.tsx'],
    minify: false,
    clean: true,
    dts: true,
    sourcemap: true,
    format: ['esm'],
    // env: { NODE_ENV: 'development' },
    treeshake: true,
});
