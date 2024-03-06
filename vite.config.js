import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { configDefaults } from 'vitest/config'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/tests/setup.js',
        exclude: [
            ...configDefaults.exclude,
            './src/tests/e2e/*'
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
});
