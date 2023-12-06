/** @type {import('vite').UserConfig} */
export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `made-with.js`,
        chunkFileNames: `made-with.js`,
        assetFileNames: `made-with.[ext]`
      }
    }
  }
}
