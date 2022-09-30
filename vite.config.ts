/* Core */
import { defineConfig, UserConfigExport } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import progress from 'vite-plugin-progress';
import { fileURLToPath } from 'url';

/* Instruments */
import { peerDependencies, dependencies } from './package.json';

const config = async (): Promise<UserConfigExport> => {
    const entry = path.resolve(rootDir, 'src/index.ts');

    console.log('🚀 ~ config ~ external', external);

    return defineConfig({
        plugins: [ react(), dts({ insertTypesEntry: true }), progress() ],
        build:   {
            sourcemap: true,
            lib:       {
                entry,
                name:     'lib',
                fileName: (format) => `lib.${format}.js`,
            },
            rollupOptions: {
                external,
                output: [
                    {
                        dir:             'dist',
                        format:          'es',
                        esModule:        true,
                        preserveModules: true,
                        entryFileNames:  '[name].js',
                        globals:         {
                            react:       'React',
                            'react-dom': 'ReactDOM',
                            // '@mui/material': 'styled',
                        },
                    },
                ],
            },
        },
    });
};

/* Helpers */
const rootDir = path.dirname(fileURLToPath(import.meta.url));

const externalPackages = [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
];
const external = externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));

export default config;

// TODO: test Vite library mode plugin
// https://github.com/samonxian/vite-plugin-build

// TODO: test TypeScript's path mapping in Vite
// https://github.com/aleclarson/vite-tsconfig-paths

// TODO: test Exclude dependencies from the output bundles
// https://github.com/crcong/vite-plugin-externals

// TODO: test Better to define externals
// https://github.com/fengxinming/vite-plugins/tree/main/packages/vite-plugin-external

// TODO: test package.json."type": "module"
// If the package.json does not contain "type": "module",
// Vite will generate different file extensions for Node.js compatibility.
// .js will become.mjs and.cjs will become.js.
// {
//   "name": "my-lib",
//   "type": "module",
//   "files": ["dist"],
//   "main": "./dist/my-lib.umd.cjs",
//   "module": "./dist/my-lib.js",
//   "exports": {
//     ".": {
//       "import": "./dist/my-lib.js",
//       "require": "./dist/my-lib.umd.cjs"
//     }
//   }
// }
