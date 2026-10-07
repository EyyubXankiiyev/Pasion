import { defineConfig } from 'vite';
export default defineConfig({
  server: {
    proxy: {'/api': 'http://127.0.0.1:8000'},
    fs: {
      deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/backend/**', '**/.venv/**'],
    },
  },
});
