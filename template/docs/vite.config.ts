import { SearchPlugin } from 'vitepress-plugin-search';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    SearchPlugin({
      previewLength: 62,
      buttonLabel: '搜索',
      placeholder: '搜索文档'
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['../..'],
    },
  },
});
