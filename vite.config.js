const { defineConfig } = require('vite');
const react = require('@vitejs/plugin-react');

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 8080;

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${PORT}`,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist/app',
  },
});