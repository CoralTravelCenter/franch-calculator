import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Typograf from 'typograf'
import { fileURLToPath, URL } from 'node:url'

const typograf = new Typograf({ locale: ['ru'] })

function typografTextNode(node) {
    if (node.type === 2 && /\S/u.test(node.content)) {
        const leadingWhitespace = node.content.match(/^\s*/u)?.[0] ?? ''
        const trailingWhitespace = node.content.match(/\s*$/u)?.[0] ?? ''
        const text = node.content.slice(
            leadingWhitespace.length,
            node.content.length - trailingWhitespace.length,
        )

        node.content = `${leadingWhitespace}${typograf.execute(text)}${trailingWhitespace}`
    }
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                compilerOptions: {
                    nodeTransforms: [typografTextNode],
                },
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    test: {
        environment: 'node',
        include: ['test/**/*.test.js'],
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'calculator.js',
                chunkFileNames: 'chunks/[name]-[hash].js',
                assetFileNames: ({ name }) => (
                    name?.endsWith('.css') ? 'calculator.css' : 'assets/[name]-[hash][extname]'
                ),
            },
        },
    },
})
