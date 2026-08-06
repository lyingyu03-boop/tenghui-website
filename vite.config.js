import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        siteApp: resolve(__dirname, 'site-app.html'),
        sopFlowchart: resolve(__dirname, 'tenghui-sop-flowchart.html')
      }
    }
  }
});
