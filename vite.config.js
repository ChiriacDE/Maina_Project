import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    legacy({
      targets: ['ie >= 11'],
      force: true,
      mimeTypes: {
        'application/javascript': ['js']
      }
    })
  ]
});