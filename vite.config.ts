/* Core */
import { defineConfig, UserConfigExport } from 'vite';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import progress from 'vite-plugin-progress';

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

import { peerDependencies, dependencies } from './package.json';

const externalPackages = [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {}),
];
const external = externalPackages.map((packageName) => new RegExp(`^${packageName}(/.*)?`));
console.log('🚀 ~ regexesOfPackages', external);

const config = async (): Promise<UserConfigExport> => {
    // let name = 'base-lib-name';

    const entryPath = path.join(__dirname, 'src', 'index.ts');
    console.log('🚀 ~ config ~ entryPath ', entryPath);

    const moduleString: string = await readFile(entryPath, { encoding: 'utf-8' });
    console.log('🚀 ~ config ~  moduleString', moduleString);

    const moduleList = moduleString.split('\n');

    // for (const mod of moduleList.reverse()) {
    //     if (mod.includes('export default')) {
    //         name = mod.replace('export default ', '').replace(' ', '');
    //     }
    // }

    return defineConfig({
        plugins: [ react(), dts({ insertTypesEntry: true }), progress() ],
        build:   {
            sourcemap: true,
            lib:       {
                // entry: './src',
                // entry: path.resolve(__dirname, 'src'),
                entry:    path.resolve(__dirname, 'src/index.ts'),
                name:     'lib',
                formats:  [ 'es' ],
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
                        // entryFileNames: ({ name: fileName }) => {
                        //     return `${fileName}.js`;
                        // },
                        // inlineDynamicImports: false,
                        globals:         {
                            react:               'React',
                            'react-dom':         'ReactDOM',
                            'styled-components': 'styled',
                        },
                    },
                ],
            },
        },
    });
};

export default config;
