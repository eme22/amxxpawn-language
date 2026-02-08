'use strict';

const esbuild = require('esbuild');

const watch = process.argv.includes('--watch');

const sharedOptions = {
    bundle: true,
    platform: 'node',
    format: 'cjs',
    target: 'es2020',
    sourcemap: true,
    logLevel: 'info',
    external: ['vscode'],
    tsconfig: 'tsconfig.json'
};

const clientOptions = {
    ...sharedOptions,
    entryPoints: ['src/client/client.ts'],
    outfile: 'build/client/client.js'
};

const serverOptions = {
    ...sharedOptions,
    entryPoints: ['src/server/server.ts'],
    outfile: 'build/server/server.js'
};

async function runBuild() {
    if (watch) {
        const clientContext = await esbuild.context(clientOptions);
        const serverContext = await esbuild.context(serverOptions);
        await Promise.all([clientContext.watch(), serverContext.watch()]);
        console.log('esbuild: watching for changes...');
        return;
    }

    await esbuild.build(clientOptions);
    await esbuild.build(serverOptions);
}

runBuild().catch((error) => {
    console.error(error);
    process.exit(1);
});
